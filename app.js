/* ═══════════════════════════════════════════════════════════
   FLOWMODORO — App Logic
   Timer · Tasks · i18n (es/en) · Dark mode · localStorage
═══════════════════════════════════════════════════════════ */

'use strict';

// ─── i18n Translations ───────────────────────────────────────
const TRANSLATIONS = {
  es: {
    'nav.timer':        'Timer',
    'nav.tasks':        'Tareas',
    'nav.guide':        'Guía',
    'nav.install':      'Instalar App',
    'nav.support':      'Apoyar',
    'hero.badge':       '✨ Tu flujo de trabajo perfecto',
    'hero.title1':      'Trabaja mejor,',
    'hero.title2':      'descansa mejor.',
    'hero.subtitle':    'Usa la técnica Pomodoro para potenciar tu productividad con intervalos de trabajo y descanso que respetan tu cerebro.',
    'hero.cta':         'Empezar ahora',
    'hero.learn':       '¿Qué es Pomodoro?',
    'hero.stat1':       'min de enfoque',
    'hero.stat2':       'min de descanso',
    'hero.stat3':       'y descansas 15 min',
    'timer.work':       'Trabajo',
    'timer.short':      'Descanso corto',
    'timer.long':       'Descanso largo',
    'timer.start':      'Iniciar',
    'timer.pause':      'Pausar',
    'timer.focusTime':  'Tiempo de enfoque',
    'timer.shortBreak': 'Descanso corto',
    'timer.longBreak':  'Descanso largo',
    'timer.done.work':  '¡Tiempo de descanso! 🎉',
    'timer.done.short': '¡A trabajar de nuevo! 💪',
    'timer.done.long':  '¡Recargado! Volvamos al foco 🚀',
    'timer.done.work.task':         '¡Descanso! 🍅 {act}/{est} · {task}',
    'timer.done.work.taskComplete': '¡Tarea completada! 🎉 {task}',
    'timer.focusTitle':     'Enfocar en…',
    'timer.focusChoose':    'Elegir tarea',
    'timer.focusQuickAdd':  '+ Nueva tarea…',
    'timer.focusCompleted': '¡Tarea completada! 🎉',
    'focus.exit':       'Salir del modo foco',
    'settings.title':   'Configuración',
    'settings.work':    'Trabajo (min)',
    'settings.short':   'Descanso corto (min)',
    'settings.long':    'Descanso largo (min)',
    'settings.sound':   'Sonido',
    'settings.long':    'Descanso largo (min)',
    'settings.sound':   'Sonido',
    'settings.save':    'Guardar',
    'tasks.badge':      '📋 Gestión de tareas',
    'tasks.title':      '¿En qué vas a trabajar hoy?',
    'tasks.subtitle':   'Agrega tus tareas y marca la activa para enfocar el timer en ella.',
    'tasks.placeholder':'Agregar nueva tarea...',
    'tasks.add':        '+ Agregar',
    'tasks.empty':      'No hay tareas aún. ¡Agrega la primera!',
    'tasks.empty.filter':'No hay tareas aquí.',
    'tasks.noTask':      'Sin tarea',
    'tasks.filter.all':   'Todas',
    'tasks.filter.active':'Pendientes',
    'tasks.filter.done':  'Completadas',
    'tasks.clearDone':        'Limpiar completadas',
    'tasks.clearDone.confirm':'¿Seguro?',
    'tasks.estimation': 'Pomodoros estimados',
    'tasks.delete':     'Eliminar tarea',
    'tasks.focus':      'Enfocar timer en esta tarea',
    'tasks.unfocus':    'Quitar foco',
    'tasks.complete':   'Marcar como completada',
    'tasks.reorder.up':   'Subir tarea',
    'tasks.reorder.down': 'Bajar tarea',
    'tasks.inc.pomos':  'Aumentar pomodoros estimados',
    'tasks.dec.pomos':  'Reducir pomodoros estimados',
    'guide.badge':      '📚 Técnica Pomodoro',
    'guide.title':      '¿Cómo funciona?',
    'guide.subtitle':   "Desarrollada por Francesco Cirillo a finales de los '80, la técnica Pomodoro es una de las metodologías de productividad más efectivas del mundo.",
    'guide.cycle.work': 'Trabajo profundo',
    'guide.cycle.short':'Descanso corto',
    'guide.cycle.repeat':'Repetir',
    'guide.cycle.long': 'Descanso largo',
    'guide.card1.title':'¿Por qué funciona?',
    'guide.card1.text': 'El cerebro humano no está diseñado para mantener foco profundo por horas. Los intervalos cortos e intensos aprovechan los picos naturales de atención y reducen la fatiga cognitiva.',
    'guide.card2.title':'El origen del nombre',
    'guide.card2.text': 'Francesco Cirillo usaba un timer de cocina con forma de tomate ("pomodoro" en italiano) cuando era universitario. De ahí el nombre y el ícono 🍅 que hoy conocemos.',
    'guide.card3.title':'Tips para empezar',
    'guide.card3.text': 'Antes de iniciar, define una sola tarea en la que vas a trabajar. Pon el teléfono en silencio. Si surge algo urgente, anótalo y vuelve tu foco. El pomodoro es sagrado.',
    'guide.card4.title':'Adáptalo a ti',
    'guide.card4.text': 'Aunque el estándar es 25/5, puedes ajustar los tiempos. Algunos prefieren 50/10 para trabajo creativo o 15/5 para tareas mecánicas. Experimenta hasta encontrar tu ritmo.',
    'footer.tagline':   'Tu flujo de trabajo perfecto.',
    'footer.developed': 'Desarrollado con ❤️ por Julio Silva',
    'donation.badge':   'Apoya el proyecto',
    'donation.text':    'Este proyecto es gratuito y sin anuncios. Tu donación ayuda a mantener los servidores y el desarrollo.',
  },
  en: {
    'nav.timer':        'Timer',
    'nav.tasks':        'Tasks',
    'nav.guide':        'Guide',
    'nav.install':      'Install App',
    'nav.support':      'Support',
    'hero.badge':       '✨ Your perfect workflow',
    'hero.title1':      'Work smarter,',
    'hero.title2':      'rest better.',
    'hero.subtitle':    'Use the Pomodoro technique to boost your productivity with focused work and rest intervals that respect your brain.',
    'hero.cta':         'Get started',
    'hero.learn':       'What is Pomodoro?',
    'hero.stat1':       'min of focus',
    'hero.stat2':       'min of rest',
    'hero.stat3':       'then 15 min break',
    'timer.work':       'Work',
    'timer.short':      'Short break',
    'timer.long':       'Long break',
    'timer.start':      'Start',
    'timer.pause':      'Pause',
    'timer.focusTime':  'Focus time',
    'timer.shortBreak': 'Short break',
    'timer.longBreak':  'Long break',
    'timer.done.work':  'Break time! 🎉',
    'timer.done.short': 'Back to work! 💪',
    'timer.done.long':  'Recharged! Back to focus 🚀',
    'timer.done.work.task':         'Break! 🍅 {act}/{est} · {task}',
    'timer.done.work.taskComplete': 'Task completed! 🎉 {task}',
    'timer.focusTitle':     'Focus on…',
    'timer.focusChoose':    'Choose task',
    'timer.focusQuickAdd':  '+ New task…',
    'timer.focusCompleted': 'Task completed! 🎉',
    'focus.exit':       'Exit focus mode',
    'settings.title':   'Settings',
    'settings.work':    'Work (min)',
    'settings.short':   'Short break (min)',
    'settings.long':    'Long break (min)',
    'settings.sound':   'Sound',
    'settings.long':    'Long break (min)',
    'settings.sound':   'Sound',
    'settings.save':    'Save',
    'tasks.badge':      '📋 Task management',
    'tasks.title':      "What are you working on today?",
    'tasks.subtitle':   'Add your tasks and mark an active one to focus your timer on it.',
    'tasks.placeholder':'Add a new task...',
    'tasks.add':        '+ Add',
    'tasks.empty':      'No tasks yet. Add your first one!',
    'tasks.empty.filter':'No tasks here.',
    'tasks.noTask':      'No task',
    'tasks.filter.all':   'All',
    'tasks.filter.active':'Active',
    'tasks.filter.done':  'Completed',
    'tasks.clearDone':        'Clear completed',
    'tasks.clearDone.confirm':'Sure?',
    'tasks.estimation': 'Estimated pomodoros',
    'tasks.delete':     'Delete task',
    'tasks.focus':      'Focus timer on this task',
    'tasks.unfocus':    'Remove focus',
    'tasks.complete':   'Mark as completed',
    'tasks.reorder.up':   'Move task up',
    'tasks.reorder.down': 'Move task down',
    'tasks.inc.pomos':  'Increase estimated pomodoros',
    'tasks.dec.pomos':  'Decrease estimated pomodoros',
    'guide.badge':      '📚 Pomodoro Technique',
    'guide.title':      'How does it work?',
    'guide.subtitle':   "Developed by Francesco Cirillo in the late '80s, the Pomodoro Technique is one of the world's most effective productivity methods.",
    'guide.cycle.work': 'Deep work',
    'guide.cycle.short':'Short break',
    'guide.cycle.repeat':'Repeat',
    'guide.cycle.long': 'Long break',
    'guide.card1.title':'Why does it work?',
    'guide.card1.text': "The human brain isn't designed for hours of sustained focus. Short, intense intervals leverage natural attention peaks and reduce cognitive fatigue.",
    'guide.card2.title':'The origin of the name',
    'guide.card2.text': 'Francesco Cirillo used a tomato-shaped kitchen timer ("pomodoro" in Italian) when he was a student. That\'s where the name and the 🍅 icon come from.',
    'guide.card3.title':'Tips to get started',
    'guide.card3.text': 'Before starting, define just one task to work on. Put your phone on silent. If something urgent comes up, note it down and return your focus. The pomodoro is sacred.',
    'guide.card4.title':'Adapt it to you',
    'guide.card4.text': 'While the standard is 25/5, you can adjust the times. Some prefer 50/10 for creative work or 15/5 for mechanical tasks. Experiment until you find your rhythm.',
    'footer.tagline':   'Your perfect workflow.',
    'footer.developed': 'Developed with ❤️ by Julio Silva',
    'donation.badge':   'Support the project',
    'donation.text':    'This project is free and ad-free. Your donation helps maintain servers and development.',
  }
};

// ─── Safe localStorage helpers ──────────────────────────────
function safeGetJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn(`[Flowmodoro] Could not parse localStorage key "${key}":`, e);
    return fallback;
  }
}

// ─── State ────────────────────────────────────────────────────
function normalizeTask(t) {
  return {
    id: String(t.id || generateId()),
    text: String(t.text || ''),
    done: !!t.done,
    estPomos: Math.max(1, parseInt(t.estPomos) || 1),
    actPomos: Math.max(0, parseInt(t.actPomos) || 0),
  };
}

const state = {
  lang: localStorage.getItem('fm_lang') || 'en',
  theme: localStorage.getItem('fm_theme') || 'dark',
  durations: safeGetJSON('fm_durations', null) || { work: 25, short: 5, long: 15 },
  currentMode: 'work',    // 'work' | 'short' | 'long'
  timeLeft: 0,
  totalTime: 0,
  isRunning: false,
  intervalId: null,
  endTime: null,
  pomoCount: 0,           // 0-3 in current set
  soundEnabled: true,
  tasks: safeGetJSON('fm_tasks', []).map(normalizeTask),
  activeTaskId: localStorage.getItem('fm_activeTask') || null,
  taskFilter: 'all',      // 'all' | 'active' | 'done'
  prevTime: null,
};

// Pre-fill timeLeft from durations
state.timeLeft = state.durations.work * 60;
state.totalTime = state.durations.work * 60;

// ─── DOM refs ─────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const dom = {
  html:           document.documentElement,
  body:           document.body,
  timerSection:   $('timer-section'),
  themeToggle:    $('themeToggle'),
  sunIcon:        $('sunIcon'),
  moonIcon:       $('moonIcon'),
  langToggle:     $('langToggle'),
  langLabel:      $('langLabel'),
  installBtn:     $('installBtn'),
  hamburger:      $('hamburger'),
  mobileMenu:     $('mobileMenu'),
  timerDisplay:   $('timerDisplay'),
  sessionLabel:   $('sessionLabel'),
  ringProgress:   $('ringProgress'),
  startBtn:       $('startBtn'),
  resetBtn:       $('resetBtn'),
  settingsBtn:    $('settingsBtn'),
  settingsPanel:  $('settingsPanel'),
  focusPill:      $('focusPill'),
  focusPillText:  $('focusPillText'),
  focusPillProgress: $('focusPillProgress'),
  focusPopover:   $('focusPopover'),
  focusList:      $('focusList'),
  focusQuickAdd:  $('focusQuickAdd'),
  focusExitBtn:   $('focusExitBtn'),
  tabWork:        $('tab-work'),
  tabShort:       $('tab-short'),
  tabLong:        $('tab-long'),
  setWork:        $('setWork'),
  setShort:       $('setShort'),
  setLong:        $('setLong'),
  soundToggle:    $('soundToggle'),
  saveSettings:   $('saveSettings'),
  taskInput:      $('taskInput'),
  addTaskBtn:     $('addTaskBtn'),
  taskList:       $('taskList'),
  taskEmpty:      $('taskEmpty'),
  taskEmptyText:  $('taskEmptyText'),
  clearDoneBtn:   $('clearDoneBtn'),
  pomoCount:      [0,1,2,3].map(i => $(`pomo${i}`)),
  viewFlip:       $('viewFlip'),
};

// ─── i18n ─────────────────────────────────────────────────────
function t(key, vars) {
  let str = TRANSLATIONS[state.lang][key] || TRANSLATIONS['es'][key] || key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, v);
    }
  }
  return str;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.classList.contains('confirm')) return;
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  dom.html.lang = state.lang;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('fm_lang', lang);
  dom.langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  applyTranslations();
  updateTimerUI(); // re-apply session label
  renderTasks();
  renderFocusUI();
}

dom.langToggle.addEventListener('click', () => {
  setLang(state.lang === 'es' ? 'en' : 'es');
});

// ─── Theme ────────────────────────────────────────────────────
function setThemeUI(theme) {
  dom.html.setAttribute('data-theme', theme);
  dom.sunIcon.style.display  = theme === 'dark'  ? 'block' : 'none';
  dom.moonIcon.style.display = theme === 'light' ? 'block' : 'none';
}

function applyTheme(theme) {
  state.theme = theme;
  setThemeUI(theme);
  localStorage.setItem('fm_theme', theme);
}

dom.themeToggle.addEventListener('click', () => {
  applyTheme(state.theme === 'light' ? 'dark' : 'light');
});

// ─── Mobile menu ──────────────────────────────────────────────
dom.hamburger.addEventListener('click', () => {
  const isOpen = dom.mobileMenu.classList.toggle('open');
  dom.hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

dom.mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => dom.mobileMenu.classList.remove('open'));
});

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    dom.navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    dom.navbar.style.boxShadow = '';
  }
}, { passive: true });

// ─── Timer Logic ──────────────────────────────────────────────
const RING_CIRCUMFERENCE = 2 * Math.PI * 100; // r=100

function setRingProgress(remaining, total) {
  const ratio = total > 0 ? (remaining / total) : 1;
  const offset = RING_CIRCUMFERENCE * (1 - ratio);
  dom.ringProgress.style.strokeDashoffset = offset;
}

function formatTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const SESSION_LABELS = {
  work:  () => t('timer.focusTime'),
  short: () => t('timer.shortBreak'),
  long:  () => t('timer.longBreak'),
};

function updateTimerUI(force = false) {
  updateFlipClock(force);
  dom.sessionLabel.textContent = SESSION_LABELS[state.currentMode]();
  document.title = `${formatTime(state.timeLeft)} — Flowmodoro`;
}

function updateFlipClock(force = false) {
  const m = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const s = (state.timeLeft % 60).toString().padStart(2, '0');
  
  updateFlipCard('flip-m1', m[0], force);
  updateFlipCard('flip-m2', m[1], force);
  updateFlipCard('flip-s1', s[0], force);
  updateFlipCard('flip-s2', s[1], force);
}

function updateFlipCard(id, value, force = false) {
  const el = $(id);
  if (!el) return;
  const currentVal = el.getAttribute('data-value');
  
  if (force || currentVal !== value) {
    // Si ya hay una animación en curso, la limpiamos
    if (el.dataset.timeoutId) {
      clearTimeout(parseInt(el.dataset.timeoutId));
      el.classList.remove('flipping');
      delete el.dataset.timeoutId;
    }

    const top = el.querySelector('.top span');
    const bottom = el.querySelector('.bottom span');
    const flapTop = el.querySelector('.flap-top span');
    const flapBottom = el.querySelector('.flap-bottom span');
    
    const prev = currentVal || value; // Si no hay previo, usamos el actual para evitar saltos extraños

    if (force) {
      top.textContent = value;
      bottom.textContent = value;
      flapTop.textContent = value;
      flapBottom.textContent = value;
      el.setAttribute('data-value', value);
      return;
    }

    // Preparar textos para la animación
    top.textContent = value;
    bottom.textContent = prev;
    flapTop.textContent = prev;
    flapBottom.textContent = value;
    
    // Forzar reinicio de animación
    el.classList.remove('flipping');
    void el.offsetWidth; 
    el.classList.add('flipping');
    
    el.setAttribute('data-value', value);
    
    const timeoutId = setTimeout(() => {
      el.classList.remove('flipping');
      // Asentar valores finales
      bottom.textContent = value;
      flapTop.textContent = value;
      delete el.dataset.timeoutId;
    }, 850);
    el.dataset.timeoutId = timeoutId;
  }
}

function setMode(mode) {
  pauseTimer();
  exitFocusMode();
  state.currentMode = mode;
  state.timeLeft = state.durations[mode] * 60;
  state.totalTime = state.timeLeft;
  dom.body.setAttribute('data-mode', mode);

  // Update tabs
  dom.tabWork.classList.toggle('active', mode === 'work');
  dom.tabShort.classList.toggle('active', mode === 'short');
  dom.tabLong.classList.toggle('active', mode === 'long');

  // Reset start button
  dom.startBtn.textContent = t('timer.start');
  updateTimerUI();
}

function startTimer() {
  if (state.isRunning) return;
  state.isRunning = true;
  state.endTime = Date.now() + (state.timeLeft * 1000);
  dom.startBtn.textContent = t('timer.pause');
  state.intervalId = setInterval(tick, 200);
  if (state.currentMode === 'work') enterFocusMode();
}

function pauseTimer() {
  if (!state.isRunning) return;
  state.isRunning = false;
  dom.startBtn.textContent = t('timer.start');
  clearInterval(state.intervalId);
  if (state.endTime) {
    state.timeLeft = Math.max(0, Math.round((state.endTime - Date.now()) / 1000));
    state.endTime = null;
  }
  updateTimerUI();
  exitFocusMode();
}

function resetTimer() {
  pauseTimer();
  state.timeLeft = state.durations[state.currentMode] * 60;
  state.totalTime = state.timeLeft;
  state.endTime = null;
  updateTimerUI();
}

function tick() {
  if (!state.isRunning || !state.endTime) return;
  
  const now = Date.now();
  const remaining = Math.max(0, Math.round((state.endTime - now) / 1000));
  
  if (remaining !== state.timeLeft) {
    state.timeLeft = remaining;
    updateTimerUI();
    
    if (state.timeLeft <= 0) {
      clearInterval(state.intervalId);
      state.isRunning = false;
      state.endTime = null;
      dom.startBtn.textContent = t('timer.start');
      handleSessionEnd();
    }
  }
}

function updatePomoDotsUI() {
  dom.pomoCount.forEach((dot, i) => {
    dot.classList.toggle('active', i < state.pomoCount);
  });
}

function handleSessionEnd() {
  playSound();

  if (state.currentMode === 'work') {
    // Add completed pomo to active task
    let taskMsg = null;
    const task = state.tasks.find(t => t.id === state.activeTaskId);
    if (task && !task.done) {
      task.actPomos = (task.actPomos || 0) + 1;
      if (task.actPomos >= task.estPomos) {
        task.done = true;
        taskMsg = t('timer.done.work.taskComplete', { task: task.text });
      } else {
        taskMsg = t('timer.done.work.task', { act: task.actPomos, est: task.estPomos, task: task.text });
      }
      saveTasks();
      if (task.done) {
        setActiveTask(null);
        flashFocusCompleted();
      }
    }

    // Advance pomo counter (0-4)
    state.pomoCount = Math.min(state.pomoCount + 1, 4);
    updatePomoDotsUI();

    // Notify
    showNotification(taskMsg || t('timer.done.work'));

    // After 4 pomodoros → long break (and reset counter), else short
    if (state.pomoCount >= 4) {
      state.pomoCount = 0;
      setTimeout(() => { updatePomoDotsUI(); setMode('long'); }, 1000);
    } else {
      setTimeout(() => setMode('short'), 1000);
    }
  } else {
    const msg = state.currentMode === 'short' ? t('timer.done.short') : t('timer.done.long');
    showNotification(msg);
    setTimeout(() => setMode('work'), 1000);
  }
}

// ─── Focus mode (inmersivo: noche al reproducir trabajo) ─────
let focusMode = false;
let focusPrevTheme = null;

// Aplica el estado focus-mode y, si el movimiento no está reducido,
// anima el zoom espacial del reloj (transform, sin tocar layout)
function prepareFocusZoom(focusOn) {
  const flip = dom.viewFlip;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const from = !reduced && flip ? flip.getBoundingClientRect().width : 0;

  if (focusOn) document.body.classList.add('focus-mode');
  else document.body.classList.remove('focus-mode');

  if (reduced || !flip) return;
  const to = flip.getBoundingClientRect().width;
  if (!to || Math.abs(from - to) < 2) return;
  const ratio = from / to;
  flip.style.transition = 'none';
  flip.style.transform = `scale(${ratio})`;
  void flip.getBoundingClientRect();
  requestAnimationFrame(() => {
    flip.style.transition = '';
    flip.style.transform = '';
  });
}

function enterFocusMode() {
  if (focusMode) return;
  focusMode = true;
  focusPrevTheme = state.theme;
  // Alinear la sección del timer con el viewport para que el vidrio
  // quede realmente centrado y ocupe el centro de la pantalla
  if (dom.timerSection && typeof dom.timerSection.scrollIntoView === 'function') {
    dom.timerSection.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  // Los tabs de modo son solo indicadores durante el foco
  dom.tabWork.disabled = true;
  dom.tabShort.disabled = true;
  dom.tabLong.disabled = true;
  prepareFocusZoom(true);
  setThemeUI('dark');
}

function exitFocusMode() {
  if (!focusMode) return;
  focusMode = false;
  dom.tabWork.disabled = false;
  dom.tabShort.disabled = false;
  dom.tabLong.disabled = false;
  prepareFocusZoom(false);
  setThemeUI(focusPrevTheme || 'dark');
}

// Salir del foco pausando: si el timer corre, se pausa (pauseTimer ya
// sale del modo foco); si no corre, solo se sale del modo foco.
function exitFocusAndPause() {
  if (state.isRunning) pauseTimer();
  else exitFocusMode();
}

if (dom.focusExitBtn) dom.focusExitBtn.addEventListener('click', exitFocusAndPause);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && focusMode && dom.focusPopover.hidden) exitFocusAndPause();
});

// Start/pause toggle
dom.startBtn.addEventListener('click', () => {
  if (state.isRunning) pauseTimer();
  else startTimer();
});

dom.resetBtn.addEventListener('click', resetTimer);

// Mode tabs
dom.tabWork.addEventListener('click',  () => setMode('work'));
dom.tabShort.addEventListener('click', () => setMode('short'));
dom.tabLong.addEventListener('click',  () => setMode('long'));

// ─── Sound ────────────────────────────────────────────────────
let audioCtx;
function playSound() {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.6);
  } catch(e) { /* ignore */ }
}

// ─── Notifications ────────────────────────────────────────────
function showNotification(body) {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      new Notification('Flowmodoro 🍅', { body, icon: 'icons/icon-192.png' });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(p => {
        if (p === 'granted') new Notification('Flowmodoro 🍅', { body, icon: 'icons/icon-192.png' });
      });
    }
  }
}

// ─── Settings ─────────────────────────────────────────────────
dom.settingsBtn.addEventListener('click', () => {
  const panel = dom.settingsPanel;
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  if (panel.style.display === 'block') {
    dom.setWork.value  = state.durations.work;
    dom.setShort.value = state.durations.short;
    dom.setLong.value  = state.durations.long;
    dom.soundToggle.checked = state.soundEnabled;
  }
});

dom.saveSettings.addEventListener('click', () => {
  const work  = Math.min(60, Math.max(1, parseInt(dom.setWork.value)  || 25));
  const short = Math.min(30, Math.max(1, parseInt(dom.setShort.value) || 5));
  const long  = Math.min(60, Math.max(1, parseInt(dom.setLong.value)  || 15));
  state.durations = { work, short, long };
  state.soundEnabled = dom.soundToggle.checked;
  localStorage.setItem('fm_durations', JSON.stringify(state.durations));
  dom.settingsPanel.style.display = 'none';
  resetTimer();
});

// ─── Tasks ────────────────────────────────────────────────────
function saveTasks() {
  localStorage.setItem('fm_tasks', JSON.stringify(state.tasks));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function persistActiveTask() {
  if (state.activeTaskId) {
    localStorage.setItem('fm_activeTask', state.activeTaskId);
  } else {
    localStorage.removeItem('fm_activeTask');
  }
}

// Validate the stored active task (missing or completed → clear)
function validateActiveTask() {
  const task = state.tasks.find(t => t.id === state.activeTaskId);
  if (!task || task.done) {
    state.activeTaskId = null;
    persistActiveTask();
  }
}

function setActiveTask(id) {
  state.activeTaskId = id || null;
  persistActiveTask();
  renderTasks();
  renderFocusUI();
}

// ─── Focus pill + popover (timer ↔ tasks integration) ────────
let focusCompletedTimer = null;

function renderFocusUI() {
  const pill = dom.focusPill;
  const task = state.tasks.find(t => t.id === state.activeTaskId && !t.done);

  if (task) {
    pill.classList.remove('ghost', 'complete');
    pill.classList.add('active');
    dom.focusPillText.textContent = task.text;
    dom.focusPillProgress.textContent = `🍅 ${task.actPomos}/${task.estPomos}`;
  } else {
    pill.classList.add('ghost');
    pill.classList.remove('active');
    dom.focusPillText.textContent = t('timer.focusChoose');
    dom.focusPillProgress.textContent = '';
  }

  renderFocusList();
}

function renderFocusList() {
  const pending = state.tasks.filter(t => !t.done);
  const items = pending.map(task => `
    <div class="focus-option ${task.id === state.activeTaskId ? 'selected' : ''}"
         data-id="${task.id}" role="option" aria-selected="${task.id === state.activeTaskId}">
      <span class="focus-option-text">${escapeHtml(task.text)}</span>
      <span class="focus-option-progress">🍅 ${task.actPomos}/${task.estPomos}</span>
    </div>
  `).join('');

  const noneSelected = !state.activeTaskId;
  dom.focusList.innerHTML = `
    <div class="focus-option ${noneSelected ? 'selected' : ''}" data-id="" role="option" aria-selected="${noneSelected}">
      <span class="focus-option-text">— ${t('tasks.noTask')} —</span>
    </div>
    ${items}
  `;
}

function positionFocusPopover() {
  const pop = dom.focusPopover;
  const pillRect = dom.focusPill.getBoundingClientRect();
  const popWidth = Math.min(300, window.innerWidth - 32);
  const popHeight = pop.offsetHeight || 0;
  let left = pillRect.left + pillRect.width / 2 - popWidth / 2;
  left = Math.max(16, Math.min(left, window.innerWidth - popWidth - 16));
  let top = pillRect.bottom + 10;
  if (popHeight && top + popHeight > window.innerHeight - 8) {
    top = Math.max(8, pillRect.top - popHeight - 10);
  }
  pop.style.width = popWidth + 'px';
  pop.style.left = left + 'px';
  pop.style.top = top + 'px';
}

function openFocusPopover() {
  renderFocusList();
  dom.focusPopover.hidden = false;
  dom.focusPill.setAttribute('aria-expanded', 'true');
  positionFocusPopover();
}

function closeFocusPopover() {
  dom.focusPopover.hidden = true;
  dom.focusPill.setAttribute('aria-expanded', 'false');
}

function toggleFocusPopover() {
  if (dom.focusPopover.hidden) openFocusPopover();
  else closeFocusPopover();
}

window.addEventListener('scroll', () => {
  if (!dom.focusPopover.hidden) positionFocusPopover();
}, { passive: true });

window.addEventListener('resize', () => {
  if (!dom.focusPopover.hidden) positionFocusPopover();
});

function flashFocusCompleted() {
  clearTimeout(focusCompletedTimer);
  dom.focusPill.classList.add('complete');
  dom.focusPillText.textContent = t('timer.focusCompleted');
  dom.focusPillProgress.textContent = '';
  focusCompletedTimer = setTimeout(() => {
    dom.focusPill.classList.remove('complete');
    renderFocusUI();
  }, 2500);
}

dom.focusPill.addEventListener('click', () => {
  renderFocusList();
  toggleFocusPopover();
});

dom.focusList.addEventListener('click', e => {
  const option = e.target.closest('.focus-option');
  if (!option) return;
  setActiveTask(option.dataset.id || null);
  closeFocusPopover();
});

function submitFocusQuickAdd() {
  const text = dom.focusQuickAdd.value.trim();
  if (!text) return;
  const task = normalizeTask({ id: generateId(), text, done: false, estPomos: 1, actPomos: 0 });
  state.tasks.unshift(task);
  dom.focusQuickAdd.value = '';
  saveTasks();
  setActiveTask(task.id);
  closeFocusPopover();
}

dom.focusQuickAdd.addEventListener('keydown', e => {
  if (e.key === 'Enter') submitFocusQuickAdd();
});

document.addEventListener('click', e => {
  if (dom.focusPopover.hidden) return;
  if (dom.focusPopover.contains(e.target) || dom.focusPill.contains(e.target)) return;
  closeFocusPopover();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !dom.focusPopover.hidden) closeFocusPopover();
});

function renderTasks() {
  const list = dom.taskList;
  // Remove all task items (keep the empty state div)
  list.querySelectorAll('.task-item').forEach(el => el.remove());

  const visible = state.tasks.filter(task => {
    if (state.taskFilter === 'active') return !task.done;
    if (state.taskFilter === 'done') return task.done;
    return true;
  });

  dom.taskEmpty.style.display = visible.length === 0 ? 'block' : 'none';
  dom.taskEmptyText.textContent = state.tasks.length === 0
    ? t('tasks.empty')
    : t('tasks.empty.filter');

  dom.clearDoneBtn.disabled = !state.tasks.some(t => t.done);

  visible.forEach(task => {
    const idx = state.tasks.indexOf(task);
    const item = document.createElement('div');
    item.className = 'task-item' +
      (task.id === state.activeTaskId ? ' active-task' : '') +
      (task.done ? ' done' : '');
    item.dataset.id = task.id;

    const isActive = state.activeTaskId === task.id;
    item.innerHTML = `
      <button class="task-check" data-action="toggle" aria-pressed="${task.done}" aria-label="${t('tasks.complete')}">
        ${task.done ? '✓' : ''}
      </button>
      <span class="task-text">${escapeHtml(task.text)}</span>
      <div class="pomo-badge" title="${t('tasks.estimation')}">
        <button class="pomo-ctrl-btn" data-action="dec-pomo" aria-label="${t('tasks.dec.pomos')}" ${task.estPomos <= 1 ? 'disabled' : ''}>−</button>
        <span class="pomo-count">🍅 ${task.actPomos}/${task.estPomos}</span>
        <button class="pomo-ctrl-btn" data-action="inc-pomo" aria-label="${t('tasks.inc.pomos')}">+</button>
      </div>
      <div class="task-actions">
        <button class="task-action-btn focus-btn ${isActive ? 'active' : ''}" data-action="focus"
          title="${t(isActive ? 'tasks.unfocus' : 'tasks.focus')}" aria-label="${t(isActive ? 'tasks.unfocus' : 'tasks.focus')}"
          ${task.done ? 'disabled' : ''}>📌</button>
        <button class="task-action-btn reorder-btn" data-action="up" aria-label="${t('tasks.reorder.up')}" ${idx === 0 ? 'disabled' : ''}>↑</button>
        <button class="task-action-btn reorder-btn" data-action="down" aria-label="${t('tasks.reorder.down')}" ${idx === state.tasks.length - 1 ? 'disabled' : ''}>↓</button>
        <button class="task-action-btn delete-btn-icon" data-action="delete" aria-label="${t('tasks.delete')}">🗑️</button>
      </div>
    `;

    list.appendChild(item);
  });
}

function addTask() {
  const text = dom.taskInput.value.trim();
  if (!text) return;
  const task = normalizeTask({ id: generateId(), text, done: false, estPomos: 1, actPomos: 0 });
  state.tasks.unshift(task);
  dom.taskInput.value = '';
  saveTasks();
  renderTasks();
  renderFocusUI();
}

function moveTask(task, delta) {
  const i = state.tasks.indexOf(task);
  const j = i + delta;
  if (i === -1 || j < 0 || j >= state.tasks.length) return;
  [state.tasks[i], state.tasks[j]] = [state.tasks[j], state.tasks[i]];
}

// Delegate task list actions
dom.taskList.addEventListener('click', e => {
  const item = e.target.closest('.task-item');
  if (!item) return;
  const id = item.dataset.id;
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  const action = e.target.closest('[data-action]')?.dataset.action;

  switch (action) {
    case 'toggle':
      task.done = !task.done;
      saveTasks();
      if (task.done && state.activeTaskId === id) setActiveTask(null);
      else renderTasks();
      break;
    case 'focus':
      setActiveTask(state.activeTaskId === id ? null : id);
      break;
    case 'delete':
      state.tasks = state.tasks.filter(t => t.id !== id);
      if (state.activeTaskId === id) state.activeTaskId = null;
      persistActiveTask();
      saveTasks();
      renderTasks();
      renderFocusUI();
      break;
    case 'inc-pomo':
      task.estPomos++;
      saveTasks();
      renderTasks();
      break;
    case 'dec-pomo':
      if (task.estPomos > 1) {
        task.estPomos--;
        saveTasks();
        renderTasks();
      }
      break;
    case 'up':
      moveTask(task, -1);
      saveTasks();
      renderTasks();
      break;
    case 'down':
      moveTask(task, 1);
      saveTasks();
      renderTasks();
      break;
  }
});

// Filters
document.querySelectorAll('.task-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    state.taskFilter = btn.dataset.filter;
    document.querySelectorAll('.task-filter').forEach(b => b.classList.toggle('active', b === btn));
    renderTasks();
  });
});

// Clear completed (two-step confirm)
let clearDoneArmed = false;
let clearDoneTimer = null;

function resetClearDone() {
  clearDoneArmed = false;
  clearTimeout(clearDoneTimer);
  dom.clearDoneBtn.classList.remove('confirm');
  dom.clearDoneBtn.textContent = t('tasks.clearDone');
}

dom.clearDoneBtn.addEventListener('click', () => {
  if (!clearDoneArmed) {
    clearDoneArmed = true;
    dom.clearDoneBtn.classList.add('confirm');
    dom.clearDoneBtn.textContent = t('tasks.clearDone.confirm');
    clearDoneTimer = setTimeout(resetClearDone, 3000);
  } else {
    state.tasks = state.tasks.filter(t => !t.done);
    saveTasks();
    resetClearDone();
    renderTasks();
    renderFocusUI();
  }
});

dom.addTaskBtn.addEventListener('click', addTask);
dom.taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── PWA Install ─────────────────────────────────────────────
let deferredInstallPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  dom.installBtn.style.display = 'flex';
});

dom.installBtn.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  console.log('PWA install:', outcome);
  deferredInstallPrompt = null;
  dom.installBtn.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
  dom.installBtn.style.display = 'none';
});

// ─── Parallax Controller ──────────────────────────────────────
class ParallaxController {
  constructor() {
    this.sections = [];
    this.ticking = false;
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (this.prefersReduced) return;
    this.init();
  }

  init() {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      this.sections.push({
        el,
        speed: parseFloat(el.dataset.parallax) || 0.15,
        bg: el.querySelector('.section-parallax__bg') || null,
      });
    });

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.update(); 
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  update() {
    const scrollY = window.scrollY;

    this.sections.forEach(({ el, speed, bg }) => {
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const distance = centerY - viewCenter;

      const offset = distance * speed;

      if (bg) {
        bg.style.transform = `translateY(${offset}px)`;
      }
    });
  }
}

// ─── Init ─────────────────────────────────────────────────────
function init() {
  applyTheme(state.theme);
  setLang(state.lang);
  dom.body.setAttribute('data-mode', 'work');
  updateTimerUI(true); // Force initial render
  updatePomoDotsUI();
  validateActiveTask();
  renderTasks();
  renderFocusUI();
  // Move popover to body so section transforms/overflow can never clip it
  document.body.appendChild(dom.focusPopover);
  new ParallaxController();
}

init();


