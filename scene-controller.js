/* Preferencias de ambiente independientes del reloj y del audio. */
(function(root) {
  'use strict';
  const catalog = [
    { id:'horizonte', position:'50% 55%', accent:'#E0A5B5', surface:'#17313D', fallback:'linear-gradient(145deg,#123441,#29465D 42%,#482A50 72%,#986276)' },
    { id:'refugio', position:'50% 50%', accent:'#B7CEBC', surface:'#1C3534', fallback:'linear-gradient(145deg,#132C30,#335854 42%,#526C63 72%,#877B83)' },
    { id:'aura', position:'50% 50%', accent:'#D5A9CF', surface:'#232E44', fallback:'linear-gradient(145deg,#102F3A,#28395B 38%,#52385D 65%,#AD7E8C)' }
  ].map(function(scene) {
    return Object.freeze(Object.assign(scene, {image:'assets/ambientes/' + scene.id + '.webp', thumbnail:'assets/ambientes/' + scene.id + '-mini.webp'}));
  });
  function preload(src) {
    return new Promise(function(resolve, reject) {
      const image = new Image();
      image.onload = function() { resolve(); };
      image.onerror = reject;
      image.src = src;
      if (image.decode) image.decode().then(resolve, reject);
    });
  }
  function create(options) {
    options = options || {};
    const storage = options.storage;
    const loadImage = options.loadImage || preload;
    const onChange = options.onChange || function() {};
    function read(key) { try { return storage && storage.getItem(key); } catch (_) { return null; } }
    function save(key, value) { try { if (storage) storage.setItem(key, value); } catch (_) { /* Memoria en navegación privada. */ } }
    let selected = catalog.some(s => s.id === read('fm_scene')) ? read('fm_scene') : 'horizonte';
    let rotate = read('fm_scene_rotate') === 'true';
    let revision = 0;
    let loaded = false;
    async function select(id) {
      const scene = catalog.find(s => s.id === id);
      if (!scene) return false;
      const request = ++revision;
      if (selected === id && loaded) return true;
      try { await loadImage(scene.image); } catch (_) { return false; }
      if (request !== revision) return false;
      selected = id;
      loaded = true;
      save('fm_scene', id);
      onChange(scene);
      return true;
    }
    return {
      getState: () => ({selected, rotate}),
      select,
      setRotation(value) { rotate = !!value; save('fm_scene_rotate', String(rotate)); },
      onNewSession() {
        if (!rotate) return Promise.resolve(false);
        return select(catalog[(catalog.findIndex(s => s.id === selected) + 1) % catalog.length].id);
      }
    };
  }
  const api = {catalog, create};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FlowScenes = api;
})(typeof window !== 'undefined' ? window : this);
