const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('PWA updates remove old app caches while retaining ambient audio and unrelated caches', async () => {
  const handlers = {};
  const deleted = [];
  let claimed = false;
  const context = vm.createContext({
    self: { addEventListener: (name, fn) => { handlers[name] = fn; },
      clients: { claim: async () => { claimed = true; } } },
    caches: {
      keys: async () => ['flowmodoro-v43', 'flowmodoro-v44', 'flowmodoro-audio-v1', 'another-app'],
      delete: async key => { deleted.push(key); return true; }
    }
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'service-worker.js'), 'utf8'), context);
  let finished;
  handlers.activate({ waitUntil: promise => { finished = promise; } });
  await finished;
  assert.deepEqual(deleted, ['flowmodoro-v43', 'flowmodoro-v44']);
  assert.equal(claimed, true);
});

test('installation precaches every scene and UI module from the release', async () => {
  const handlers = {};
  let assets;
  const context = vm.createContext({
    self:{addEventListener:(name, fn) => {handlers[name] = fn;}},
    caches:{open:async () => ({addAll:async entries => {assets = entries;}})}
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..','service-worker.js'),'utf8'),context);
  let installation;
  handlers.install({waitUntil:promise => {installation=promise;}});
  await installation;
  for(const asset of assets) assert.ok(fs.existsSync(path.join(__dirname,'..',asset)),asset);
  for(const scene of ['horizonte','refugio','aura']) assert.ok(assets.includes('./assets/ambientes/'+scene+'.webp'));
  for(const module of ['scene-controller.js','experience.css']) assert.ok(assets.includes('./'+module));
});
