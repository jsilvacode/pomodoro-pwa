// Run with: node --test tests/session.test.cjs
// Tests execute the real app against a small DOM/clock fixture. Layout and native
// browser behavior are checked separately in the browser, not simulated here.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { randomUUID } = require('node:crypto');

const source = fs.readFileSync(process.env.FLOWMODORO_SOURCE || path.join(__dirname, '..', 'app.js'), 'utf8');

function createApp(saved = {}, start = Date.parse('2026-09-22T12:00:00Z'), browserLanguages = ['es-CL']) {
  let now = start;
  let acceptDiscard = true;
  let nextTimer = 0;
  const timers = new Map();
  const storage = new Map(Object.entries({ fm_sound: 'false', ...saved }));
  const elements = new Map();
  class Element {
    constructor() {
      this.listeners = {};
      this.attributes = {};
      this.children = new Map();
      this.dataset = {};
      this.style = { setProperty() {}, removeProperty() {} };
      this.hidden = true;
      this.value = '';
      this.textContent = '';
      this.checked = false;
      const classes = new Set();
      this.classList = {
        add: (...xs) => xs.forEach(x => classes.add(x)),
        remove: (...xs) => xs.forEach(x => classes.delete(x)),
        contains: x => classes.has(x),
        toggle: (x, force) => {
          const on = force === undefined ? !classes.has(x) : force;
          on ? classes.add(x) : classes.delete(x);
          return on;
        }
      };
    }
    addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
    dispatch(name, event = {}) { for (const fn of this.listeners[name] || []) fn({ target: this, preventDefault() {}, ...event }); }
    click() { if (!this.disabled) this.dispatch('click'); }
    setAttribute(k, v) { this.attributes[k] = String(v); }
    getAttribute(k) { return this.attributes[k] ?? null; }
    hasAttribute(k) { return k in this.attributes; }
    removeAttribute(k) { delete this.attributes[k]; }
    querySelector(selector) {
      if (!this.children.has(selector)) this.children.set(selector, new Element());
      return this.children.get(selector);
    }
    querySelectorAll() { return []; }
    appendChild() {}
    remove() {}
    contains(x) { return x === this; }
    closest() { return null; }
    matches() { return false; }
    focus() {}
    blur() {}
    select() {}
    scrollIntoView() {}
    getBoundingClientRect() { return { top: 0, left: 0, right: 400, bottom: 100, width: 400, height: 100 }; }
    showModal() { this.open = true; }
    close() { this.open = false; }
    pause() {}
    load() {}
    play() { return Promise.resolve(); }
  }
  const el = id => {
    if (!elements.has(id)) elements.set(id, new Element());
    return elements.get(id);
  };
  const document = Object.assign(new Element(), {
    documentElement: el('html'), body: el('body'), visibilityState: 'visible',
    getElementById: el, createElement: () => new Element(), title: ''
  });
  class ClockDate extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const navigator = { language: browserLanguages[0], languages: browserLanguages, userAgent: 'test' };
  const window = Object.assign(new Element(), {
    FlowScenes: { ...require('../scene-controller.js'), create:options => require('../scene-controller.js').create({...options, loadImage:async () => {}}) },
    navigator, location: { hash: '' }, scrollY: 0, innerWidth: 1440, innerHeight: 900,
    matchMedia: q => ({ matches: q.includes('reduced-motion'), addEventListener() {} }),
    scrollTo() {}, confirm: () => acceptDiscard
  });
  const context = vm.createContext({
    document, window, navigator, console, Date: ClockDate, crypto: { randomUUID },
    localStorage: {
      getItem: k => storage.get(k) ?? null,
      setItem: (k, v) => storage.set(k, String(v)), removeItem: k => storage.delete(k)
    },
    setTimeout: (fn, ms = 0) => { const id = ++nextTimer; timers.set(id, { fn, at: now + ms }); return id; },
    clearTimeout: id => timers.delete(Number(id)),
    setInterval: () => ++nextTimer, clearInterval() {},
    requestAnimationFrame: () => 0, cancelAnimationFrame() {},
    performance: { now: () => now },
    getComputedStyle: () => ({ getPropertyValue: () => '52px' }),
    fetch: async () => ({ ok: false }), history: { pushState() {}, replaceState() {} },
    URL, Blob, confirm: () => acceptDiscard
  });
  vm.runInContext(source, context, { filename: 'app.js' });
  const run = code => vm.runInContext(code, context);
  run('state.soundEnabled = false');
  return {
    run, el, document,
    state: () => JSON.parse(run('JSON.stringify(state)')),
    saved: () => Object.fromEntries(storage),
    now: () => now,
    acceptDiscard(value) { acceptDiscard = value; },
    advance(ms, tick = true) {
      now += ms;
      if (tick) run('tick()');
      for (const [id, timer] of [...timers]) {
        if (timer.at <= now) { timers.delete(id); timer.fn(); }
      }
    }
  };
}

test('paused session survives saving settings and reloading; new duration applies next time', () => {
  const app = createApp();
  app.run('startTimer()');
  app.advance(73_000);
  app.run('pauseTimer(); openSettings()');
  app.el('setWork').value = '40';
  app.el('saveSettings').click();
  assert.equal(app.state().timeLeft, 1427);
  assert.equal(app.state().totalTime, 1500);
  const loaded = createApp(app.saved(), app.now());
  assert.equal(loaded.state().timeLeft, 1427);
  assert.equal(loaded.el('timerPlayLabel').textContent, 'Reanudar');
  loaded.run('startTimer()');
  loaded.advance(1427_000);
  assert.equal(loaded.state().history[0].durationMin, 25);
  loaded.run("transitionToPending(false); setMode('work')");
  assert.equal(loaded.state().timeLeft, 2400);
});

test('first visit follows browser language and stays dark even with a former light preference', () => {
  const app = createApp({ fm_theme_preference: 'light' }, Date.parse('2026-09-22T12:00:00Z'), ['fr-FR', 'pt-BR']);
  assert.equal(app.state().lang, 'pt');
  assert.equal(app.run("t('home.title')"), 'Faça mais, com calma.');
  assert.equal(app.document.documentElement.getAttribute('data-theme'), 'dark');
  assert.equal(app.saved().fm_theme_preference, undefined);
  assert.equal(app.saved().fm_lang, undefined);
  assert.equal(createApp({}, app.now(), ['en-US']).state().lang, 'en');
});

test('language button cycles through three languages and preserves a manual choice', () => {
  const app = createApp({}, Date.parse('2026-09-22T12:00:00Z'), ['pt-PT']);
  assert.equal(app.el('languageToggleBtn').textContent, 'ESP');
  app.el('languageToggleBtn').click();
  assert.equal(app.state().lang, 'es');
  assert.equal(app.el('languageToggleBtn').textContent, 'ENG');
  app.el('languageToggleBtn').click();
  assert.equal(app.state().lang, 'en');
  assert.equal(app.el('languageToggleBtn').textContent, 'PT');
  assert.equal(app.saved().fm_lang_override, 'true');
  assert.equal(createApp(app.saved(), app.now(), ['es-CL']).state().lang, 'en');
});

test('finished session survives repeated reloads with zero seconds and the next break', () => {
  let app = createApp();
  app.run('startTimer()');
  app.advance(1500_000);
  for (let i = 0; i < 3; i++) {
    app = createApp(app.saved(), app.now());
    assert.equal(app.state().timeLeft, 0);
    assert.equal(app.state().history.length, 1);
    assert.equal(app.state().pendingNextMode, 'short');
    assert.equal(app.el('sessionCompleteCard').hidden, false);
  }
  app.run('startTimer()');
  app.advance(200);
  assert.equal(app.state().currentMode, 'short');
  assert.equal(app.state().isRunning, true);
  assert.equal(app.state().history.length, 1);
});

test('reopening after expiry records the scheduled end, once, across midnight', () => {
  const app = createApp({}, new Date(2026, 8, 22, 23, 30).getTime());
  app.run('startTimer()');
  const expectedEnd = app.state().endTime;
  const loaded = createApp(app.saved(), expectedEnd + 3_600_000);
  assert.equal(loaded.state().history.length, 1);
  assert.equal(loaded.state().history[0].completedAt, expectedEnd);
  assert.equal(loaded.state().pendingNextMode, 'short');
  assert.equal(createApp(loaded.saved(), loaded.now()).state().history.length, 1);
});

test('work exceeding an estimate stays pending and records the task chosen at session start', () => {
  const app = createApp({
    fm_tasks: JSON.stringify([{ id: 'a', text: 'A', estPomos: 1 }, { id: 'b', text: 'B', estPomos: 1 }]),
    fm_activeTask: 'a'
  });
  app.run("startTimer(); setActiveTask('b')");
  app.advance(1500_000);
  const state = app.state();
  assert.equal(state.history[0].taskId, 'a');
  assert.equal(state.tasks.find(t => t.id === 'a').actPomos, 1);
  assert.equal(state.tasks.find(t => t.id === 'a').done, false);
  assert.equal(state.tasks.find(t => t.id === 'b').actPomos, 0);
});

test('exiting immersion pauses and reloading preserves the remaining time', () => {
  const app = createApp();
  app.run('startTimer()');
  app.advance(15_000);
  app.run('leaveImmersiveFocus()');
  assert.equal(app.state().isRunning, false);
  assert.equal(app.state().sessionPhase, 'paused');
  const loaded = createApp(app.saved(), app.now() + 5_000);
  assert.equal(loaded.state().isRunning, false);
  assert.equal(loaded.state().timeLeft, 1485);
  assert.equal(loaded.el('timerPlayLabel').textContent, 'Reanudar');
});

test('a session started without a task stays unassigned after selecting a task and resuming', () => {
  const app = createApp({ fm_tasks: JSON.stringify([{ id: 'b', text: 'B', estPomos: 1 }]) });
  app.run('startTimer()');
  app.advance(60_000);
  app.run("leaveImmersiveFocus(); setActiveTask('b')");
  assert.equal(app.el('taskSessionNotice').hidden, false);
  assert.match(app.el('taskSessionNotice').textContent, /B se usará en el siguiente bloque/);
  const loaded = createApp(app.saved(), app.now());
  assert.equal(loaded.el('taskSessionNotice').hidden, false);
  loaded.run('startTimer()');
  loaded.advance(1440_000);
  assert.equal(loaded.state().history[0].taskId, null);
  assert.equal(loaded.state().tasks[0].actPomos, 0);
});

test('legacy paused sessions and an explicit zero cycle counter restore without reset', () => {
  const app = createApp({
    fm_pomoCount: '3',
    fm_session: JSON.stringify({ currentMode: 'work', timeLeft: 642, totalTime: 1500, isRunning: false,
      sessionStartedAt: Date.parse('2026-09-22T11:45:00Z'), pomoCount: 0 })
  });
  assert.equal(app.state().timeLeft, 642);
  assert.equal(app.state().pomoCount, 0);
  app.run('startTimer()');
  app.advance(642_000);
  assert.equal(app.state().history.length, 1);
});

test('manual next-session click racing auto-start produces one running break', () => {
  const app = createApp({ fm_auto_breaks: 'true' });
  app.run('startTimer()');
  app.advance(1500_000);
  app.el('nextSessionBtn').click();
  app.el('nextSessionBtn').click();
  app.advance(1200);
  assert.equal(app.state().currentMode, 'short');
  assert.equal(app.state().isRunning, true);
  assert.equal(app.state().history.length, 1);
});

test('automatic break preference is respected after an immersive work block', () => {
  const manual = createApp({ fm_auto_breaks: 'false' });
  manual.run('startTimer()');
  manual.advance(1500_000);
  manual.advance(1200);
  assert.equal(manual.state().sessionPhase, 'finished');
  assert.equal(manual.state().pendingNextMode, 'short');
  assert.equal(manual.el('sessionCompleteCard').hidden, false);
  manual.el('nextSessionBtn').click();
  assert.equal(manual.state().currentMode, 'short');
  assert.equal(manual.state().isRunning, true);

  const automatic = createApp({ fm_auto_breaks: 'true' });
  automatic.run('startTimer()');
  automatic.advance(1500_000);
  automatic.advance(1200);
  assert.equal(automatic.state().currentMode, 'short');
  assert.equal(automatic.state().isRunning, true);
  assert.equal(automatic.state().history.length, 1);
});

test('the immersive task label stays with the current block when the next task changes', () => {
  const app = createApp({
    fm_tasks: JSON.stringify([{ id: 'a', text: 'Actual', estPomos: 1 }, { id: 'b', text: 'Siguiente', estPomos: 1 }]),
    fm_activeTask: 'a'
  });
  app.run('startTimer()');
  assert.equal(app.el('focusPillText').textContent, 'Cambiar próxima tarea');
  app.run("setActiveTask('b')");
  assert.match(app.el('timerActiveTask').textContent, /Actual/);
  assert.doesNotMatch(app.el('timerActiveTask').textContent, /Siguiente/);
  app.run('leaveImmersiveFocus()');
  assert.match(app.el('timerActiveTask').textContent, /Esta sesión · Actual/);
  assert.match(app.el('focusPillText').textContent, /Después · Siguiente/);
  assert.match(app.el('taskSessionNotice').textContent, /Siguiente/);
});

test('vertical navigation keeps a paused session and its task intact', () => {
  const app = createApp({
    fm_tasks: JSON.stringify([{ id: 'a', text: 'Actual', estPomos: 1 }]),
    fm_activeTask: 'a'
  });
  assert.equal(app.run('activeAppView'), 'home');
  app.run('startTimer()');
  app.advance(30_000);
  app.run("showAppView('today')");
  assert.equal(app.run('activeAppView'), 'today');
  assert.equal(app.state().sessionPhase, 'paused');
  assert.equal(app.state().timeLeft, 1470);
  assert.equal(app.state().sessionTaskSnapshot.text, 'Actual');
  app.run("showAppView('focus')");
  assert.equal(app.el('timerPlayLabel').textContent, 'Reanudar');
  assert.equal(app.state().timeLeft, 1470);
});

test('both creation paths select the first task without stealing an existing selection', () => {
  const app = createApp();
  app.el('taskInput').value = 'First';
  app.el('addTaskBtn').click();
  const first = app.state().activeTaskId;
  assert.ok(first);
  assert.equal(app.state().tasks.find(t => t.id === first).text, 'First');
  app.el('focusQuickAdd').value = 'Second';
  app.el('focusQuickAdd').dispatch('keydown', { key: 'Enter' });
  assert.equal(app.state().activeTaskId, first);
  assert.equal(app.state().tasks.length, 2);
  const other = createApp();
  other.el('focusQuickAdd').value = 'First via timer';
  other.el('focusQuickAdd').dispatch('keydown', { key: 'Enter' });
  assert.ok(other.state().activeTaskId);
});

test('canceling reset or mode change preserves a paused block', () => {
  const app = createApp();
  app.run('startTimer()');
  app.advance(50_000);
  app.run('pauseTimer()');
  app.acceptDiscard(false);
  app.run("resetTimer(); setMode('short')");
  assert.equal(app.state().timeLeft, 1450);
  assert.equal(app.state().currentMode, 'work');
  assert.equal(app.state().sessionPhase, 'paused');
  app.acceptDiscard(true);
  app.run("setMode('short')");
  assert.equal(app.state().currentMode, 'short');
  assert.equal(app.state().isRunning, false);
  assert.equal(app.state().history.length, 0);
});

test('four completed work blocks lead to a long break and retain a zero cycle count', () => {
  let app = createApp();
  for (let i = 0; i < 4; i++) {
    app.run('startTimer()');
    app.advance(1500_000);
    assert.equal(app.state().pendingNextMode, i === 3 ? 'long' : 'short');
    if (i < 3) app.run("transitionToPending(false); setMode('work')");
  }
  app = createApp(app.saved(), app.now());
  assert.equal(app.state().pomoCount, 0);
  assert.equal(app.state().pendingNextMode, 'long');
  assert.equal(app.state().history.length, 4);
});

test('legacy completed block migrates to the next break without creating another record', () => {
  const end = Date.parse('2026-09-22T11:55:00Z');
  const app = createApp({
    fm_session: JSON.stringify({ currentMode: 'work', timeLeft: 0, totalTime: 1500,
      isRunning: false, sessionStartedAt: null, endTime: null, pomoCount: 1 }),
    fm_history: JSON.stringify([{ id: 'old-finished', mode: 'work', startedAt: end - 1500_000,
      completedAt: end, durationMin: 25, taskId: null, taskText: '' }])
  });
  assert.equal(app.state().timeLeft, 0);
  assert.equal(app.state().pendingNextMode, 'short');
  assert.equal(app.el('sessionCompleteCard').hidden, false);
  assert.equal(app.state().history.length, 1);
});

test('finishing a task is explicit and applies to the completed session, not the next selected task', () => {
  const app = createApp({
    fm_tasks: JSON.stringify([{ id: 'a', text: 'A', estPomos: 1 }, { id: 'b', text: 'B', estPomos: 1 }]),
    fm_activeTask: 'a'
  });
  app.run("startTimer(); setActiveTask('b')");
  app.advance(1500_000);
  assert.equal(app.el('completeTaskBtn').hidden, false);
  app.el('completeTaskBtn').click();
  assert.equal(app.state().tasks.find(t => t.id === 'a').done, true);
  assert.equal(app.state().tasks.find(t => t.id === 'b').done, false);
  assert.equal(app.state().activeTaskId, 'b');
  assert.equal(app.state().history.length, 1);
  assert.equal(app.el('sessionCompleteCard').hidden, false);
  app.el('laterSessionBtn').click();
  assert.equal(app.state().currentMode, 'short');
  assert.equal(app.state().isRunning, false);
});

test('global shortcuts do not intercept native button or link keyboard actions', () => {
  const app = createApp();
  app.run('startTimer()');
  let prevented = false;
  const button = { matches: selector => selector.includes('button'), closest: selector => selector.includes('button') ? {} : null };
  app.document.dispatch('keydown', { key: ' ', target: button, preventDefault() { prevented = true; } });
  assert.equal(prevented, false);
  assert.equal(app.state().isRunning, true);
});

test('browser shortcuts never reset or change the current block', () => {
  const app = createApp();
  app.run('startTimer()');
  const before = app.state();
  for (const modifier of ['metaKey','ctrlKey','altKey']) {
    for (const key of ['r','f','1','2','3']) {
      app.document.dispatch('keydown', { key, [modifier]: true });
    }
  }
  const after = app.state();
  for (const key of ['sessionId','endTime','sessionPhase','currentMode','timeLeft']) assert.equal(after[key],before[key]);
});

test('scene rotation only runs when a new work block starts, never on resume or breaks', () => {
  const app = createApp();
  app.run('var sceneRotations = 0; sceneController.onNewSession = function() { sceneRotations++; }; startTimer(); pauseTimer(); startTimer();');
  assert.equal(app.run('sceneRotations'),1);
  app.run("pauseTimer(); setMode('short', {force:true}); startTimer();");
  assert.equal(app.run('sceneRotations'),1);
  app.run("pauseTimer(); setMode('work', {force:true}); startTimer();");
  assert.equal(app.run('sceneRotations'),2);
});

test('scene and overlay changes preserve the running block, its task and audio state', async () => {
  const app = createApp();
  app.run("createTask('Preparar propuesta'); startTimer(); state.ambientPlaying = true;");
  const before = app.state();
  await app.run("sceneController.select('refugio')");
  app.run("openPanel($('sceneDialog'), dom.startBtn); openSoundPopover(dom.focusAudioToggleBtn);");
  assert.equal(app.el('sceneDialog').open,false);
  assert.equal(app.el('soundPopover').open,true);
  app.run('closePanel()');
  const after = app.state();
  for (const key of ['sessionId','endTime','sessionPhase','timeLeft','ambientPlaying']) assert.equal(after[key],before[key]);
  assert.deepEqual(after.sessionTaskSnapshot,before.sessionTaskSnapshot);
  assert.equal(app.el('soundPopover').open,false);
  assert.equal(app.saved().fm_scene,'refugio');
});
