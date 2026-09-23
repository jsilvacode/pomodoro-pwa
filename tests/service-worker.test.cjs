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
