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
    'settings.title':   'Configuración',
    'settings.work':    'Trabajo (min)',
    'settings.short':   'Descanso corto (min)',
    'settings.long':    'Descanso largo (min)',
    'settings.sound':   'Sonido',
    'settings.save':    'Guardar',
    'tasks.badge':      '📋 Gestión de tareas',
    'tasks.title':      '¿En qué vas a trabajar hoy?',
    'tasks.subtitle':   'Agrega tus tareas y marca la activa para enfocar el timer en ella.',
    'tasks.placeholder':'Agregar nueva tarea...',
    'tasks.add':        '+ Agregar',
    'tasks.empty':      'No hay tareas aún. ¡Agrega la primera!',
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
    'tasks.notes':      'Notas o indicaciones',
    'tasks.notes.placeholder': 'Escribe detalles, enlaces o contexto...',
    'tasks.subtasks':   'Subtareas',
    'tasks.subtasks.placeholder': '+ Agregar subtarea y presiona Enter',
    'tasks.estimation': 'Pomodoros estimados',
    'tasks.delete':     'Eliminar tarea',
    'footer.tagline':   'Tu flujo de trabajo perfecto.',
    'footer.made':      'Hecho con',
  },
  en: {
    'nav.timer':        'Timer',
    'nav.tasks':        'Tasks',
    'nav.guide':        'Guide',
    'nav.install':      'Install App',
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
    'settings.title':   'Settings',
    'settings.work':    'Work (min)',
    'settings.short':   'Short break (min)',
    'settings.long':    'Long break (min)',
    'settings.sound':   'Sound',
    'settings.save':    'Save',
    'tasks.badge':      '📋 Task management',
    'tasks.title':      "What are you working on today?",
    'tasks.subtitle':   'Add your tasks and mark an active one to focus your timer on it.',
    'tasks.placeholder':'Add a new task...',
    'tasks.add':        '+ Add',
    'tasks.empty':      'No tasks yet. Add your first one!',
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
    'tasks.notes':      'Notes or context',
    'tasks.notes.placeholder': 'Add details, links, or context...',
    'tasks.subtasks':   'Subtasks',
    'tasks.subtasks.placeholder': '+ Add subtask and press Enter',
    'tasks.estimation': 'Estimated pomodoros',
    'tasks.delete':     'Delete task',
    'footer.tagline':   'Your perfect workflow.',
    'footer.made':      'Made with',
  }
};

// ─── State ────────────────────────────────────────────────────
const state = {
  lang: localStorage.getItem('fm_lang') || 'es',
  theme: localStorage.getItem('fm_theme') || 'light',
  durations: JSON.parse(localStorage.getItem('fm_durations') || 'null') || { work: 25, short: 5, long: 15 },
  currentMode: 'work',    // 'work' | 'short' | 'long'
  timeLeft: 0,
  totalTime: 0,
  isRunning: false,
  intervalId: null,
  endTime: null,
  pomoCount: 0,           // 0-3 in current set
  soundEnabled: true,
  tasks: JSON.parse(localStorage.getItem('fm_tasks') || '[]'),
  activeTaskId: localStorage.getItem('fm_activeTask') || null,
  expandedTasks: new Set(),
};

// Pre-fill timeLeft from durations
state.timeLeft = state.durations.work * 60;
state.totalTime = state.durations.work * 60;

// ─── DOM refs ─────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const dom = {
  html:           document.documentElement,
  body:           document.body,
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
  activeTaskBar:  $('activeTaskBar'),
  activeTaskName: $('activeTaskName'),
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
  pomoCount:      [0,1,2,3].map(i => $(`pomo${i}`)),
};

// ─── i18n ─────────────────────────────────────────────────────
function t(key) {
  return TRANSLATIONS[state.lang][key] || TRANSLATIONS['es'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  dom.html.lang = state.lang;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('fm_lang', lang);
  dom.langLabel.textContent = lang.toUpperCase();
  applyTranslations();
  updateTimerUI(); // re-apply session label
}

dom.langToggle.addEventListener('click', () => {
  setLang(state.lang === 'es' ? 'en' : 'es');
});

// ─── Theme ────────────────────────────────────────────────────
function applyTheme(theme) {
  state.theme = theme;
  dom.html.setAttribute('data-theme', theme);
  localStorage.setItem('fm_theme', theme);
  dom.sunIcon.style.display  = theme === 'light' ? 'block' : 'none';
  dom.moonIcon.style.display = theme === 'dark'  ? 'block' : 'none';
}

dom.themeToggle.addEventListener('click', () => {
  applyTheme(state.theme === 'light' ? 'dark' : 'light');
});

// ─── Mobile menu ──────────────────────────────────────────────
dom.hamburger.addEventListener('click', () => {
  dom.mobileMenu.classList.toggle('open');
});

dom.mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => dom.mobileMenu.classList.remove('open'));
});

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = '';
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

function updateTimerUI() {
  dom.timerDisplay.textContent = formatTime(state.timeLeft);
  setRingProgress(state.timeLeft, state.totalTime);
  dom.sessionLabel.textContent = SESSION_LABELS[state.currentMode]();
  document.title = `${formatTime(state.timeLeft)} — Flowmodoro`;
}

function setMode(mode) {
  pauseTimer();
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

function handleSessionEnd() {
  playSound();

  if (state.currentMode === 'work') {
    // Add completed pomo to active task
    if (state.activeTaskId) {
      const task = state.tasks.find(t => t.id === state.activeTaskId);
      if (task) {
        task.actPomos = (task.actPomos || 0) + 1;
        saveTasks();
      }
    }

    // Advance pomo counter
    dom.pomoCount[state.pomoCount].classList.add('active');
    state.pomoCount = (state.pomoCount + 1) % 4;

    // Notify
    showNotification(t('timer.done.work'));

    // After 4 pomodoros → long break, else short
    const nextMode = state.pomoCount === 0 ? 'long' : 'short';
    setTimeout(() => setMode(nextMode), 1000);
  } else {
    const msg = state.currentMode === 'short' ? t('timer.done.short') : t('timer.done.long');
    showNotification(msg);
    setTimeout(() => setMode('work'), 1000);
  }
}

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
  localStorage.setItem('fm_activeTask', state.activeTaskId || '');
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function renderTasks() {
  const list = dom.taskList;
  // Remove all task items (keep the empty state div)
  list.querySelectorAll('.task-item').forEach(el => el.remove());

  if (state.tasks.length === 0) {
    dom.taskEmpty.style.display = 'block';
    return;
  }
  dom.taskEmpty.style.display = 'none';

  state.tasks.forEach(task => {
    // Data backwards compatibility
    task.notes = task.notes || '';
    task.subtasks = task.subtasks || [];
    task.estPomos = task.estPomos || 1;
    task.actPomos = task.actPomos || 0;

    const item = document.createElement('div');
    item.className = 'task-item' +
      (task.id === state.activeTaskId ? ' active-task' : '') +
      (task.done ? ' done' : '') +
      (state.expandedTasks.has(task.id) ? ' expanded' : '');
    item.dataset.id = task.id;

    item.innerHTML = `
      <div class="task-header">
        <div class="task-check" data-action="toggle" aria-label="Completar">
          ${task.done ? '✓' : ''}
        </div>
        <div class="task-content">
          <span class="task-text">${escapeHtml(task.text)}</span>
          <div class="task-meta">
            ${task.subtasks.length > 0 ? `<span class="meta-item">🔖 ${task.subtasks.filter(s=>s.done).length}/${task.subtasks.length}</span>` : ''}
            <span class="meta-item pomo-badge">🍅 ${task.actPomos}/${task.estPomos}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-action-btn focus-btn ${state.activeTaskId === task.id ? 'active' : ''}" data-action="focus" title="Enfocar timer en esta tarea" aria-label="Foco">📌</button>
          <button class="task-action-btn expand-btn" data-action="expand" aria-label="Expandir">▼</button>
        </div>
      </div>
      <div class="task-details">
        <div class="details-section">
          <label class="details-label">${t('tasks.notes')}</label>
          <textarea class="task-notes-input" data-id="${task.id}" placeholder="${t('tasks.notes.placeholder')}">${escapeHtml(task.notes)}</textarea>
        </div>
        
        <div class="details-section">
          <label class="details-label">${t('tasks.subtasks')}</label>
          <div class="subtask-list">
            ${task.subtasks.map(s => `
              <div class="subtask-item ${s.done ? 'done' : ''}" data-subid="${s.id}">
                <div class="subtask-check" data-action="toggle-subtask">${s.done ? '✓' : ''}</div>
                <span class="subtask-text">${escapeHtml(s.text)}</span>
                <button class="subtask-delete" data-action="delete-subtask">✕</button>
              </div>
            `).join('')}
          </div>
          <input type="text" class="subtask-input" data-id="${task.id}" placeholder="${t('tasks.subtasks.placeholder')}">
        </div>

        <div class="details-section pomo-estimation">
          <label class="details-label">${t('tasks.estimation')}</label>
          <div class="pomo-controls">
            <button class="pomo-ctrl-btn" data-action="dec-pomo">-</button>
            <span class="pomo-count">🍅 ${task.estPomos}</span>
            <button class="pomo-ctrl-btn" data-action="inc-pomo">+</button>
          </div>
        </div>
        <div class="task-details-footer">
           <button class="delete-btn" data-action="delete" title="${t('tasks.delete')}">🗑️ ${t('tasks.delete')}</button>
        </div>
      </div>
    `;

    list.appendChild(item);
  });

  updateActiveTaskBar();
}

function updateActiveTaskBar() {
  const task = state.tasks.find(t => t.id === state.activeTaskId);
  if (task && !task.done) {
    dom.activeTaskBar.style.display = 'flex';
    dom.activeTaskName.textContent = task.text;
  } else {
    dom.activeTaskBar.style.display = 'none';
    state.activeTaskId = null;
  }
}

function addTask() {
  const text = dom.taskInput.value.trim();
  if (!text) return;
  const task = { 
    id: generateId(), 
    text, 
    done: false,
    notes: '',
    subtasks: [],
    estPomos: 1,
    actPomos: 0
  };
  state.tasks.unshift(task);
  dom.taskInput.value = '';
  saveTasks();
  renderTasks();
}

// Delegate task list actions
dom.taskList.addEventListener('click', e => {
  const item = e.target.closest('.task-item');
  if (!item) return;
  const id = item.dataset.id;
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;

  const action = e.target.closest('[data-action]')?.dataset.action;

  if (action === 'toggle') {
    task.done = !task.done;
    if (task.done && state.activeTaskId === id) state.activeTaskId = null;
    saveTasks();
    renderTasks();
  } else if (action === 'focus') {
    state.activeTaskId = (state.activeTaskId === id) ? null : id;
    saveTasks();
    renderTasks();
  } else if (action === 'delete') {
    state.tasks = state.tasks.filter(t => t.id !== id);
    if (state.activeTaskId === id) state.activeTaskId = null;
    saveTasks();
    renderTasks();
  } else if (action === 'expand') {
    if (state.expandedTasks.has(id)) {
      state.expandedTasks.delete(id);
      item.classList.remove('expanded');
    } else {
      state.expandedTasks.add(id);
      item.classList.add('expanded');
    }
  } else if (action === 'toggle-subtask') {
    const subtaskId = e.target.closest('.subtask-item').dataset.subid;
    const subtask = task.subtasks.find(s => s.id === subtaskId);
    if (subtask) {
      subtask.done = !subtask.done;
      saveTasks();
      renderTasks();
    }
  } else if (action === 'delete-subtask') {
    const subtaskId = e.target.closest('.subtask-item').dataset.subid;
    task.subtasks = task.subtasks.filter(s => s.id !== subtaskId);
    saveTasks();
    renderTasks();
  } else if (action === 'inc-pomo') {
    task.estPomos++;
    saveTasks();
    renderTasks();
  } else if (action === 'dec-pomo') {
    if (task.estPomos > 1) {
      task.estPomos--;
      saveTasks();
      renderTasks();
    }
  }
});

dom.taskList.addEventListener('input', e => {
  if (e.target.classList.contains('task-notes-input')) {
    const id = e.target.dataset.id;
    const task = state.tasks.find(t => t.id === id);
    if (task) {
      task.notes = e.target.value;
      saveTasks(); // persist without interrupting typing
    }
  }
});

dom.taskList.addEventListener('keydown', e => {
  if (e.target.classList.contains('subtask-input') && e.key === 'Enter') {
    const text = e.target.value.trim();
    if (!text) return;
    const id = e.target.dataset.id;
    const task = state.tasks.find(t => t.id === id);
    if (task) {
      task.subtasks.push({ id: generateId(), text, done: false });
      saveTasks();
      renderTasks();
      // focus again to allow typing multiple subtasks quickly
      setTimeout(() => {
        const input = document.querySelector(`.subtask-input[data-id="${id}"]`);
        if (input) input.focus();
      }, 0);
    }
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

// ─── Init ─────────────────────────────────────────────────────
function init() {
  applyTheme(state.theme);
  setLang(state.lang);
  dom.body.setAttribute('data-mode', 'work');
  updateTimerUI();
  renderTasks();

  // Request notification permission early
  if ('Notification' in window && Notification.permission === 'default') {
    // We'll request on first timer start to avoid being annoying
  }
}

init();

// ─── Atmospheric Parallax ─────────────────────────────────────
document.addEventListener('mousemove', e => {
  if (state.theme !== 'dark') return;
  const bg = document.getElementById('parallaxBg');
  if (!bg) return;
  
  // Max movement ~20px in any direction
  const x = (e.clientX / window.innerWidth - 0.5) * 40; 
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  
  bg.style.transform = `translate(${-x}px, ${-y}px)`;
});
