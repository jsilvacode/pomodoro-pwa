const test = require('node:test');
const assert = require('node:assert/strict');
const {create, catalog} = require('../scene-controller.js');
function memory(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {getItem:key => values.get(key), setItem:(key,value) => values.set(key,value)};
}
test('valid saved scene and optional rotation restore independently', async () => {
  const storage = memory({fm_scene:'refugio',fm_scene_rotate:'true'});
  const seen = [];
  const controller = create({storage, loadImage:async () => {}, onChange:scene => seen.push(scene.id)});
  assert.deepEqual(controller.getState(), {selected:'refugio',rotate:true});
  await controller.select('refugio');
  await controller.onNewSession();
  assert.deepEqual(seen,['refugio','aura']);
  assert.equal(storage.getItem('fm_scene'),'aura');
});
test('invalid preferences fall back and rotation is disabled by default', async () => {
  let loads = 0;
  const controller = create({storage:memory({fm_scene:'missing',fm_scene_rotate:'invalid'}),loadImage:async () => {loads++;}});
  assert.deepEqual(controller.getState(),{selected:'horizonte',rotate:false});
  assert.equal(await controller.select('missing'),false);
  assert.equal(await controller.onNewSession(),false);
  assert.equal(loads,0);
});
test('failed image leaves current scene and stored choice intact', async () => {
  const storage = memory();
  const controller = create({storage, loadImage:async src => {if(src.includes('aura')) throw Error('offline');}});
  await controller.select('refugio');
  assert.equal(await controller.select('aura'),false);
  assert.equal(controller.getState().selected,'refugio');
  assert.equal(storage.getItem('fm_scene'),'refugio');
});
test('a slower earlier request cannot overwrite the latest selection', async () => {
  const pending = {};
  const applied = [];
  const controller = create({storage:memory(),loadImage:src => new Promise(resolve => {pending[src] = resolve;}),onChange:scene => applied.push(scene.id)});
  const first = controller.select('refugio');
  const second = controller.select('aura');
  pending[catalog[2].image](); await second;
  pending[catalog[1].image](); await first;
  assert.deepEqual(applied,['aura']);
});
test('choosing the currently displayed scene cancels an in-flight change', async () => {
  let resolvePending;
  const controller = create({storage:memory(),loadImage:src => src.includes('refugio') ? new Promise(resolve => {resolvePending=resolve;}) : Promise.resolve()});
  await controller.select('horizonte');
  const pending = controller.select('refugio');
  await controller.select('horizonte');
  resolvePending(); await pending;
  assert.equal(controller.getState().selected,'horizonte');
});
test('blocked storage still allows selecting and rotating scenes in memory', async () => {
  const storage = {getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}};
  const controller = create({storage,loadImage:async () => {}});
  controller.setRotation(true);
  await controller.onNewSession();
  assert.deepEqual(controller.getState(),{selected:'refugio',rotate:true});
});
