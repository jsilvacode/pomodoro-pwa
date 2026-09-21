/* ═══════════════════════════════════════════════════════════
   FLOWMODORO — App Logic v3
   Focus · Today · Progress · PWA · local-first persistence
═══════════════════════════════════════════════════════════ */

'use strict';

const TRANSLATIONS = {
  es: {
    'nav.focus':'Foco','nav.today':'Hoy','nav.progress':'Progreso','nav.more':'Más',
    'nav.timer':'Timer','nav.tasks':'Tareas','nav.guide':'Guía Pomodoro','nav.install':'Instalar App','nav.support':'Apoyar proyecto',
    'hero.badge':'✨ Tu flujo de trabajo perfecto','hero.title1':'Trabaja mejor,','hero.title2':'descansa mejor.',
    'hero.subtitle':'Usa la técnica Pomodoro para potenciar tu productividad con intervalos de trabajo y descanso que respetan tu cerebro.',
    'hero.cta':'Empezar ahora','hero.learn':'¿Qué es Pomodoro?','hero.stat1':'min de enfoque','hero.stat2':'min de descanso','hero.stat3':'y descansas 15 min',
    'timer.work':'Trabajo','timer.short':'Descanso corto','timer.long':'Descanso largo','timer.start':'Iniciar','timer.pause':'Pausar',
    'timer.focusTime':'Tiempo de enfoque','timer.shortBreak':'Descanso corto','timer.longBreak':'Descanso largo',
    'timer.done.work':'Sesión de foco completada.','timer.done.short':'Descanso terminado.','timer.done.long':'Descanso largo terminado.',
    'timer.done.work.task':'Foco completado · 🍅 {act}/{est} · {task}','timer.done.work.taskComplete':'Tarea completada · {task}',
    'timer.focusTitle':'Enfocar en…','timer.focusChoose':'Elegir tarea','timer.focusQuickAdd':'+ Nueva tarea…','timer.focusCompleted':'Tarea completada',
    'focus.exit':'Salir del modo foco','focus.session':'Sesión de foco','focus.of':'de',
    'complete.kicker':'Sesión completada','complete.later':'Ahora no','complete.startBreak':'Iniciar descanso','complete.startFocus':'Iniciar foco',
    'settings.title':'Preferencias','settings.timer':'Temporizador','settings.flow':'Flujo','settings.experience':'Experiencia',
    'settings.work':'Foco','settings.short':'Descanso corto','settings.long':'Descanso largo','settings.sound':'Aviso al terminar',
    'settings.autoBreak':'Iniciar descansos automáticamente','settings.autoFocus':'Iniciar siguiente foco automáticamente',
    'settings.wakeLock':'Mantener pantalla activa','settings.notifications':'Notificaciones','settings.enableNotifications':'Activar',
    'settings.notificationsOn':'Activadas','settings.notificationsDenied':'Bloqueadas por el navegador',
    'settings.appearance':'Apariencia','settings.themeLabel':'Tema','settings.language':'Idioma','settings.advanced':'Avanzado',
    'settings.theme.system':'Sistema','settings.theme.light':'Claro','settings.theme.dark':'Oscuro',
    'settings.save':'Guardar cambios',
    'today.sessions':'sesiones','today.focus':'en foco','today.tasks':'tareas','today.plan':'planificados','today.next':'Próxima tarea',
    'tasks.badge':'Hoy','tasks.title':'¿Qué vas a hacer ahora?','tasks.subtitle':'Elige una tarea y vuelve al foco.',
    'tasks.placeholder':'Agregar nueva tarea...','tasks.add':'+ Agregar','tasks.empty':'No hay tareas aún. Agrega la primera.','tasks.empty.filter':'No hay tareas aquí.',
    'tasks.noTask':'Sin tarea','tasks.filter.all':'Todas','tasks.filter.active':'Pendientes','tasks.filter.done':'Completadas',
    'tasks.clearDone':'Limpiar completadas','tasks.clearDone.confirm':'¿Seguro?','tasks.estimation':'Real / estimado',
    'tasks.delete':'Eliminar','tasks.focus':'Enfocar','tasks.unfocus':'Quitar foco','tasks.complete':'Marcar como completada',
    'tasks.reorder.up':'Subir','tasks.reorder.down':'Bajar','tasks.inc.pomos':'Aumentar estimación','tasks.dec.pomos':'Reducir estimación','tasks.edit':'Editar',
    'progress.badge':'Progreso','progress.week':'Esta semana','progress.details':'Ver actividad','progress.title':'Tu trabajo deja huella.',
    'progress.subtitle':'Compara lo que planeaste con lo que realmente tomó, sin convertir el foco en una competencia.',
    'progress.weekSessions':'Sesiones esta semana','progress.weekMinutes':'Minutos de foco','progress.completedTasks':'Tareas completadas',
    'progress.estimateRatio':'Real / estimado','progress.history':'Historial reciente','progress.localOnly':'Tus datos permanecen en este dispositivo.',
    'progress.export':'Exportar','progress.empty':'Completa una sesión para empezar tu historial.',
    'guide.badge':'Técnica Pomodoro','guide.title':'Una cosa a la vez.',
    'guide.subtitle':'Trabaja con intención, descansa antes de agotarte y vuelve con claridad.',
    'guide.cycle.work':'Trabajo profundo','guide.cycle.short':'Descanso corto','guide.cycle.repeat':'Repetir','guide.cycle.long':'Descanso largo',
    'guide.card1.title':'¿Por qué funciona?','guide.card1.text':'Los intervalos acotados ayudan a proteger la atención y reducen la fatiga de sostener foco continuo.',
    'guide.card2.title':'El origen del nombre','guide.card2.text':'Francesco Cirillo usaba un temporizador de cocina con forma de tomate cuando era estudiante.',
    'guide.card3.title':'Para empezar','guide.card3.text':'Antes de iniciar, define una sola tarea. Si surge algo, anótalo y vuelve a tu intención.',
    'guide.card4.title':'Adáptalo a ti','guide.card4.text':'El estándar 25/5 es un punto de partida. Ajusta los tiempos hasta encontrar un ritmo sostenible.',
    'footer.tagline':'Tu flujo de trabajo perfecto.','footer.developed':'Desarrollado con ❤️ por Julio Silva',
    'donation.badge':'Apoya Flowmodoro','donation.title':'Si te sirve, puedes ayudar a que siga mejorando.','donation.text':'Tu aporte ayuda a sostener el desarrollo, probar nuevas ideas y cuidar cada detalle del producto.',
    'update.available':'Hay una nueva versión disponible.','update.action':'Actualizar',
    'shortcuts.title':'Atajos de teclado','shortcuts.toggle':'Iniciar / pausar','shortcuts.reset':'Reiniciar','shortcuts.modes':'Cambiar modo',
    'shortcuts.focus':'Entrar / salir de Focus','shortcuts.newTask':'Nueva tarea','shortcuts.help':'Ver atajos','shortcuts.escape':'Cerrar / salir',
    'install.ios':'En iPhone o iPad: abre Compartir en Safari y elige “Añadir a pantalla de inicio”.',
    'ambient.label':'Ambiente','ambient.off':'Sin audio','ambient.rain':'Lluvia suave','ambient.nightForest':'Bosque nocturno','ambient.cafe':'Café','ambient.campfire':'Fogata',
    'ambient.sound':'Sonido','ambient.focusSound':'Sonido de foco',
    'ambient.spotifySection':'Playlists en Spotify','ambient.spotifyExternal':'Se abren en Spotify',
    'ambient.volume':'Volumen','ambient.attenuate':'Atenuar durante descansos',
    'ambient.note':'Los ambientes usan grabaciones CC0 y pueden quedar disponibles en caché después de reproducirse.',
    'ambient.paused':'Pausado','ambient.playing':'Reproduciendo',
    'break.tip1':'Levántate un momento.','break.tip2':'Mira a distancia y descansa la vista.','break.tip3':'Toma agua.','break.tip4':'Respira y cambia de postura.'
  },
  en: {
    'nav.focus':'Focus','nav.today':'Today','nav.progress':'Progress','nav.more':'More',
    'nav.timer':'Timer','nav.tasks':'Tasks','nav.guide':'Pomodoro guide','nav.install':'Install App','nav.support':'Support project',
    'hero.badge':'✨ Your perfect workflow','hero.title1':'Work smarter,','hero.title2':'rest better.',
    'hero.subtitle':'Use the Pomodoro technique with focused work and recovery intervals that respect your attention.',
    'hero.cta':'Get started','hero.learn':'What is Pomodoro?','hero.stat1':'min of focus','hero.stat2':'min of rest','hero.stat3':'then 15 min break',
    'timer.work':'Work','timer.short':'Short break','timer.long':'Long break','timer.start':'Start','timer.pause':'Pause',
    'timer.focusTime':'Focus time','timer.shortBreak':'Short break','timer.longBreak':'Long break',
    'timer.done.work':'Focus session completed.','timer.done.short':'Break finished.','timer.done.long':'Long break finished.',
    'timer.done.work.task':'Focus completed · 🍅 {act}/{est} · {task}','timer.done.work.taskComplete':'Task completed · {task}',
    'timer.focusTitle':'Focus on…','timer.focusChoose':'Choose task','timer.focusQuickAdd':'+ New task…','timer.focusCompleted':'Task completed',
    'focus.exit':'Exit focus mode','focus.session':'Focus session','focus.of':'of',
    'complete.kicker':'Session completed','complete.later':'Not now','complete.startBreak':'Start break','complete.startFocus':'Start focus',
    'settings.title':'Preferences','settings.timer':'Timer','settings.flow':'Flow','settings.experience':'Experience',
    'settings.work':'Focus','settings.short':'Short break','settings.long':'Long break','settings.sound':'Completion sound',
    'settings.autoBreak':'Start breaks automatically','settings.autoFocus':'Start next focus automatically',
    'settings.wakeLock':'Keep screen awake','settings.notifications':'Notifications','settings.enableNotifications':'Enable',
    'settings.notificationsOn':'Enabled','settings.notificationsDenied':'Blocked by browser',
    'settings.appearance':'Appearance','settings.themeLabel':'Theme','settings.language':'Language','settings.advanced':'Advanced',
    'settings.theme.system':'System','settings.theme.light':'Light','settings.theme.dark':'Dark',
    'settings.save':'Save changes',
    'today.sessions':'sessions','today.focus':'in focus','today.tasks':'tasks','today.plan':'planned','today.next':'Next task',
    'tasks.badge':'Today','tasks.title':'What will you do now?','tasks.subtitle':'Choose one task and return to focus.',
    'tasks.placeholder':'Add a new task...','tasks.add':'+ Add','tasks.empty':'No tasks yet. Add your first one.','tasks.empty.filter':'No tasks here.',
    'tasks.noTask':'No task','tasks.filter.all':'All','tasks.filter.active':'Pending','tasks.filter.done':'Completed',
    'tasks.clearDone':'Clear completed','tasks.clearDone.confirm':'Sure?','tasks.estimation':'Actual / estimated',
    'tasks.delete':'Delete','tasks.focus':'Focus','tasks.unfocus':'Remove focus','tasks.complete':'Mark as completed',
    'tasks.reorder.up':'Move up','tasks.reorder.down':'Move down','tasks.inc.pomos':'Increase estimate','tasks.dec.pomos':'Reduce estimate','tasks.edit':'Edit',
    'progress.badge':'Progress','progress.week':'This week','progress.details':'View activity','progress.title':'Your work leaves a trace.',
    'progress.subtitle':'Compare what you planned with what it actually took, without turning focus into a competition.',
    'progress.weekSessions':'Sessions this week','progress.weekMinutes':'Focus minutes','progress.completedTasks':'Completed tasks',
    'progress.estimateRatio':'Actual / estimated','progress.history':'Recent history','progress.localOnly':'Your data stays on this device.',
    'progress.export':'Export','progress.empty':'Complete a session to start your history.',
    'guide.badge':'Pomodoro Technique','guide.title':'One thing at a time.',
    'guide.subtitle':'Work with intention, rest before fatigue, and return with clarity.',
    'guide.cycle.work':'Deep work','guide.cycle.short':'Short break','guide.cycle.repeat':'Repeat','guide.cycle.long':'Long break',
    'guide.card1.title':'Why does it work?','guide.card1.text':'Bounded intervals help protect attention and reduce the fatigue of sustaining focus continuously.',
    'guide.card2.title':'Where the name comes from','guide.card2.text':'Francesco Cirillo used a tomato-shaped kitchen timer while he was a student.',
    'guide.card3.title':'Start here','guide.card3.text':'Before starting, define one task. If something comes up, note it and return to your intention.',
    'guide.card4.title':'Adapt it to you','guide.card4.text':'The 25/5 standard is a starting point. Adjust the times until you find a sustainable rhythm.',
    'footer.tagline':'Your perfect workflow.','footer.developed':'Developed with ❤️ by Julio Silva',
    'donation.badge':'Support Flowmodoro','donation.title':'If it helps you, you can help it keep improving.','donation.text':'Your support helps sustain development, test new ideas, and care for every detail of the product.',
    'update.available':'A new version is available.','update.action':'Update',
    'shortcuts.title':'Keyboard shortcuts','shortcuts.toggle':'Start / pause','shortcuts.reset':'Reset','shortcuts.modes':'Change mode',
    'shortcuts.focus':'Enter / exit Focus','shortcuts.newTask':'New task','shortcuts.help':'Show shortcuts','shortcuts.escape':'Close / exit',
    'install.ios':'On iPhone or iPad: open Share in Safari and choose “Add to Home Screen”.',
    'ambient.label':'Ambience','ambient.off':'No audio','ambient.rain':'Gentle rain','ambient.nightForest':'Night forest','ambient.cafe':'Café','ambient.campfire':'Campfire',
    'ambient.sound':'Sound','ambient.focusSound':'Focus sound',
    'ambient.spotifySection':'Spotify playlists','ambient.spotifyExternal':'Opens in Spotify',
    'ambient.volume':'Volume','ambient.attenuate':'Lower during breaks',
    'ambient.note':'Ambient presets use CC0 recordings and may remain cached after first playback.',
    'ambient.paused':'Paused','ambient.playing':'Playing',
    'break.tip1':'Stand up for a moment.','break.tip2':'Look into the distance and rest your eyes.','break.tip3':'Drink some water.','break.tip4':'Breathe and change posture.'
  }
};

function safeGetJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn('[Flowmodoro] Invalid local data for', key, error);
    return fallback;
  }
}

function getBool(key, fallback) {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  return raw === 'true';
}

function setBool(key, value) {
  localStorage.setItem(key, value ? 'true' : 'false');
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function normalizeTask(task) {
  return {
    id: String(task.id || generateId()),
    text: String(task.text || '').trim(),
    done: !!task.done,
    estPomos: Math.max(1, parseInt(task.estPomos, 10) || 1),
    actPomos: Math.max(0, parseInt(task.actPomos, 10) || 0)
  };
}

function normalizeHistory(entry) {
  if (!entry || !entry.completedAt) return null;
  return {
    id: String(entry.id || generateId()),
    mode: ['work','short','long'].includes(entry.mode) ? entry.mode : 'work',
    startedAt: Number(entry.startedAt) || Number(entry.completedAt),
    completedAt: Number(entry.completedAt),
    durationMin: Math.max(0, Number(entry.durationMin) || 0),
    taskId: entry.taskId ? String(entry.taskId) : null,
    taskText: entry.taskText ? String(entry.taskText) : ''
  };
}

const storedDurations = safeGetJSON('fm_durations', { work:25, short:5, long:15 });
const storedSession = safeGetJSON('fm_session', null);
const initialMode = storedSession && ['work','short','long'].includes(storedSession.currentMode) ? storedSession.currentMode : 'work';
const defaultSeconds = (Number(storedDurations[initialMode]) || 25) * 60;

const state = {
  lang: localStorage.getItem('fm_lang') || ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en'),
  themePreference: localStorage.getItem('fm_theme_preference') || localStorage.getItem('fm_theme') || 'system',
  effectiveTheme: 'dark',
  durations: {
    work: clamp(parseInt(storedDurations.work, 10) || 25, 1, 60),
    short: clamp(parseInt(storedDurations.short, 10) || 5, 1, 30),
    long: clamp(parseInt(storedDurations.long, 10) || 15, 1, 60)
  },
  currentMode: initialMode,
  timeLeft: storedSession ? Math.max(0, Number(storedSession.timeLeft) || defaultSeconds) : defaultSeconds,
  totalTime: storedSession ? Math.max(1, Number(storedSession.totalTime) || defaultSeconds) : defaultSeconds,
  isRunning: false,
  intervalId: null,
  endTime: storedSession ? Number(storedSession.endTime) || null : null,
  sessionStartedAt: storedSession ? Number(storedSession.sessionStartedAt) || null : null,
  restoreExpired: false,
  pomoCount: clamp(parseInt(storedSession && storedSession.pomoCount, 10) || parseInt(localStorage.getItem('fm_pomoCount'), 10) || 0, 0, 3),
  soundEnabled: getBool('fm_sound', true),
  autoStartBreaks: getBool('fm_auto_breaks', false),
  autoStartFocus: getBool('fm_auto_focus', false),
  keepAwake: getBool('fm_wake_lock', false),
  ambientPreset: localStorage.getItem('fm_ambient') || 'off',
  ambientVolume: clamp(parseInt(localStorage.getItem('fm_ambient_volume'), 10) || 35, 0, 100),
  ambientAttenuate: getBool('fm_ambient_attenuate', true),
  ambientPlaying: false,
  tasks: safeGetJSON('fm_tasks', []).map(normalizeTask).filter(function(t){ return t.text; }),
  activeTaskId: localStorage.getItem('fm_activeTask') || null,
  history: safeGetJSON('fm_history', []).map(normalizeHistory).filter(Boolean),
  pendingNextMode: null,
  breakTipIndex: 0
};

if (storedSession && storedSession.isRunning && state.endTime) {
  const remaining = Math.max(0, Math.round((state.endTime - Date.now()) / 1000));
  if (remaining > 0) {
    state.isRunning = true;
    state.timeLeft = remaining;
  } else {
    state.timeLeft = 0;
    state.endTime = null;
    state.isRunning = false;
    state.restoreExpired = true;
  }
}

const $ = function(id) { return document.getElementById(id); };
const dom = {
  html: document.documentElement,
  body: document.body,
  navbar: $('navbar'),
  timerSection: $('timer-section'),
  languagePreference: $('languagePreference'),
  installDrawerBtn: $('installDrawerBtn'),
  moreBtn: $('moreBtn'), bottomMoreBtn: $('bottomMoreBtn'),
  settingsBtn: $('settingsBtn'), settingsPanel: $('settingsPanel'), settingsBackdrop: $('settingsBackdrop'), settingsCloseBtn: $('settingsCloseBtn'),
  setWork: $('setWork'), setShort: $('setShort'), setLong: $('setLong'), soundToggle: $('soundToggle'),
  autoBreakToggle: $('autoBreakToggle'), autoFocusToggle: $('autoFocusToggle'), wakeLockToggle: $('wakeLockToggle'),
  notificationBtn: $('notificationBtn'), themePreference: $('themePreference'), saveSettings: $('saveSettings'),
  ambientVolume: $('ambientVolume'), ambientVolumeValue: $('ambientVolumeValue'),
  ambientAttenuateToggle: $('ambientAttenuateToggle'), ambientPill: $('ambientPill'),
  ambientPillName: $('ambientPillName'), ambientPillState: $('ambientPillState'),
  ambientAudioPrimary: $('ambientAudioPrimary'), ambientAudioSecondary: $('ambientAudioSecondary'),
  soundPopover: $('soundPopover'), soundPopoverClose: $('soundPopoverClose'),
  spotifyLink1Label: $('spotifyLink1Label'), spotifyLink2Label: $('spotifyLink2Label'), spotifyLink3Label: $('spotifyLink3Label'),
  tabWork: $('tab-work'), tabShort: $('tab-short'), tabLong: $('tab-long'),
  sessionLabel: $('sessionLabel'), breakTip: $('breakTip'), startBtn: $('startBtn'), resetBtn: $('resetBtn'),
  focusSessionCycle: $('focusSessionCycle'), focusExitBtn: $('focusExitBtn'), viewFlip: $('viewFlip'),
  focusPill: $('focusPill'), focusPillText: $('focusPillText'), focusPillProgress: $('focusPillProgress'),
  focusPopover: $('focusPopover'), focusList: $('focusList'), focusQuickAdd: $('focusQuickAdd'),
  pomoCount: [0,1,2,3].map(function(i){ return $('pomo' + i); }),
  sessionCompleteCard: $('sessionCompleteCard'), sessionCompleteTitle: $('sessionCompleteTitle'),
  sessionCompleteTask: $('sessionCompleteTask'), nextSessionBtn: $('nextSessionBtn'), dismissSessionBtn: $('dismissSessionBtn'),
  taskInput: $('taskInput'), addTaskBtn: $('addTaskBtn'), taskList: $('taskList'), taskEmpty: $('taskEmpty'), taskEmptyText: $('taskEmptyText'),
  clearDoneBtn: $('clearDoneBtn'),
  todaySessions: $('todaySessions'), todayMinutes: $('todayMinutes'), todayTasks: $('todayTasks'),
  weekSessions: $('weekSessions'), weekMinutes: $('weekMinutes'), weekChart: $('weekChart'),
  sessionHistory: $('sessionHistory'), exportHistoryBtn: $('exportHistoryBtn'),
  shortcutsBtn: $('shortcutsBtn'), shortcutsDialog: $('shortcutsDialog'), shortcutsCloseBtn: $('shortcutsCloseBtn'),
  updateToast: $('updateToast'), updateAppBtn: $('updateAppBtn')
};

function t(key, vars) {
  let value = (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || TRANSLATIONS.es[key] || key;
  if (vars) {
    Object.keys(vars).forEach(function(name) {
      value = value.split('{' + name + '}').join(String(vars[name]));
    });
  }
  return value;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    if (el.classList.contains('confirm')) return;
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
    el.label = t(el.getAttribute('data-i18n-label'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  dom.html.lang = state.lang;
  updateNotificationButton();
}

function setLang(lang) {
  state.lang = lang === 'en' ? 'en' : 'es';
  localStorage.setItem('fm_lang', state.lang);
  if (dom.languagePreference) dom.languagePreference.value = state.lang;
  applyTranslations();
  updateTimerUI(true);
  renderTasks();
  renderFocusUI();
  renderToday();
  renderProgress();
  updateAmbientUI();
}

function resolveTheme(preference) {
  if (preference === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return preference === 'light' ? 'light' : 'dark';
}

function setThemeUI(theme) {
  state.effectiveTheme = theme;
  dom.html.setAttribute('data-theme', theme);
}

function applyThemePreference(preference, persist) {
  const allowed = ['system','light','dark'];
  state.themePreference = allowed.includes(preference) ? preference : 'system';
  if (persist !== false) {
    localStorage.setItem('fm_theme_preference', state.themePreference);
    localStorage.removeItem('fm_theme');
  }
  setThemeUI((typeof focusMode !== 'undefined' && focusMode) ? 'dark' : resolveTheme(state.themePreference));
  if (dom.themePreference) dom.themePreference.value = state.themePreference;
}

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function() {
  if (state.themePreference === 'system' && !focusMode) setThemeUI(resolveTheme('system'));
});

function persistSession() {
  localStorage.setItem('fm_session', JSON.stringify({
    currentMode: state.currentMode,
    timeLeft: state.timeLeft,
    totalTime: state.totalTime,
    isRunning: state.isRunning,
    endTime: state.endTime,
    sessionStartedAt: state.sessionStartedAt,
    pomoCount: state.pomoCount
  }));
  localStorage.setItem('fm_pomoCount', String(state.pomoCount));
}

function markAsUsed() {
  localStorage.setItem('fm_has_used_app', 'true');
}

function saveTasks() {
  localStorage.setItem('fm_tasks', JSON.stringify(state.tasks));
  renderToday();
  renderProgress();
}

function saveHistory() {
  state.history = state.history.slice(-500);
  localStorage.setItem('fm_history', JSON.stringify(state.history));
  renderToday();
  renderProgress();
}

function persistActiveTask() {
  if (state.activeTaskId) localStorage.setItem('fm_activeTask', state.activeTaskId);
  else localStorage.removeItem('fm_activeTask');
}

function validateActiveTask() {
  const task = state.tasks.find(function(item){ return item.id === state.activeTaskId && !item.done; });
  if (!task) {
    state.activeTaskId = null;
    persistActiveTask();
  }
}

if (dom.languagePreference) {
  dom.languagePreference.addEventListener('change', function() {
    setLang(dom.languagePreference.value);
  });
}

window.addEventListener('scroll', function() {
  if (!dom.navbar) return;
  dom.navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.08)' : '';
}, { passive:true });

function openSettings() {
  dom.setWork.value = state.durations.work;
  dom.setShort.value = state.durations.short;
  dom.setLong.value = state.durations.long;
  dom.soundToggle.checked = state.soundEnabled;
  dom.autoBreakToggle.checked = state.autoStartBreaks;
  dom.autoFocusToggle.checked = state.autoStartFocus;
  dom.wakeLockToggle.checked = state.keepAwake;
  dom.themePreference.value = state.themePreference;
  dom.languagePreference.value = state.lang;
  dom.settingsPanel.classList.add('open');
  dom.settingsPanel.setAttribute('aria-hidden','false');
  dom.settingsBackdrop.hidden = false;
  dom.body.style.overflow = 'hidden';
  updateNotificationButton();
}

function closeSettings() {
  dom.settingsPanel.classList.remove('open');
  dom.settingsPanel.setAttribute('aria-hidden','true');
  dom.settingsBackdrop.hidden = true;
  if (!focusMode) dom.body.style.overflow = '';
}

[dom.settingsBtn,dom.moreBtn,dom.bottomMoreBtn].filter(Boolean).forEach(function(btn) {
  btn.addEventListener('click', openSettings);
});
dom.settingsCloseBtn.addEventListener('click', closeSettings);
dom.settingsBackdrop.addEventListener('click', closeSettings);
document.querySelectorAll('[data-drawer-close]').forEach(function(el){ el.addEventListener('click', closeSettings); });

dom.saveSettings.addEventListener('click', function() {
  state.durations = {
    work: clamp(parseInt(dom.setWork.value,10) || 25,1,60),
    short: clamp(parseInt(dom.setShort.value,10) || 5,1,30),
    long: clamp(parseInt(dom.setLong.value,10) || 15,1,60)
  };
  state.soundEnabled = !!dom.soundToggle.checked;
  state.autoStartBreaks = !!dom.autoBreakToggle.checked;
  state.autoStartFocus = !!dom.autoFocusToggle.checked;
  state.keepAwake = !!dom.wakeLockToggle.checked;
  localStorage.setItem('fm_durations', JSON.stringify(state.durations));
  setBool('fm_sound', state.soundEnabled);
  setBool('fm_auto_breaks', state.autoStartBreaks);
  setBool('fm_auto_focus', state.autoStartFocus);
  setBool('fm_wake_lock', state.keepAwake);
  applyThemePreference(dom.themePreference.value, true);
  if (!state.isRunning) {
    state.timeLeft = state.durations[state.currentMode] * 60;
    state.totalTime = state.timeLeft;
    state.sessionStartedAt = null;
    updateTimerUI(true);
    persistSession();
  }
  if (state.keepAwake && state.isRunning) acquireWakeLock();
  else if (!state.keepAwake) releaseWakeLock();
  closeSettings();
});


const SPOTIFY_PLAYLISTS = [
  { url:'https://open.spotify.com/playlist/0oZy1DMRofAqvOO9P4Z8qr', labelEl:function(){ return dom.spotifyLink1Label; } },
  { url:'https://open.spotify.com/playlist/1YGk1NFAw8l9zPwHReImrY', labelEl:function(){ return dom.spotifyLink2Label; } },
  { url:'https://open.spotify.com/playlist/1c62qIWEuYaRGAEYpFcZTs', labelEl:function(){ return dom.spotifyLink3Label; } }
];

const AMBIENT_PRESETS = {
  off: { labelKey:'ambient.off', layers:[] },
  rain: {
    labelKey:'ambient.rain',
    layers:[{ src:'https://cdn.freesound.org/previews/523/523405_8448725-hq.mp3', gain:1 }]
  },
  nightForest: {
    labelKey:'ambient.nightForest',
    layers:[
      { src:'https://cdn.freesound.org/previews/181/181801_3153523-hq.mp3', gain:0.42 },
      { src:'https://cdn.freesound.org/previews/580/580353_989468-hq.mp3', gain:0.72 }
    ]
  },
  cafe: {
    labelKey:'ambient.cafe',
    layers:[{ src:'https://cdn.freesound.org/previews/370/370973_5835751-hq.mp3', gain:0.88 }]
  },
  campfire: {
    labelKey:'ambient.campfire',
    layers:[{ src:'https://cdn.freesound.org/previews/681/681366_5752443-hq.mp3', gain:0.92 }]
  }
};

if (!AMBIENT_PRESETS[state.ambientPreset]) {
  state.ambientPreset = 'off';
  localStorage.setItem('fm_ambient','off');
}

const ambientPlayers = [dom.ambientAudioPrimary, dom.ambientAudioSecondary].filter(Boolean);
let ambientFadeFrame = null;

function ambientPresetConfig() {
  return AMBIENT_PRESETS[state.ambientPreset] || AMBIENT_PRESETS.off;
}

function ambientModeFactor() {
  return state.currentMode === 'work' || !state.ambientAttenuate ? 1 : 0.28;
}

function ambientTargetVolumes() {
  const config = ambientPresetConfig();
  const master = state.ambientVolume / 100;
  const factor = ambientModeFactor();
  return ambientPlayers.map(function(player,index) {
    const layer = config.layers[index];
    return layer ? clamp(master * factor * layer.gain, 0, 1) : 0;
  });
}

function updateSoundOptions() {
  document.querySelectorAll('.sound-option[data-sound]').forEach(function(button) {
    const selected = button.dataset.sound === state.ambientPreset;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
}

function updateAmbientUI() {
  const config = ambientPresetConfig();
  const active = state.ambientPreset !== 'off';

  dom.ambientPillName.textContent = active ? t(config.labelKey) : t('ambient.sound');
  dom.ambientPillState.textContent = dom.soundPopover && !dom.soundPopover.hidden
    ? '⌃'
    : (active && state.ambientPlaying ? 'Ⅱ' : '▾');
  dom.ambientPill.classList.toggle('sound-active', active);
  dom.ambientPill.setAttribute('aria-expanded', dom.soundPopover && !dom.soundPopover.hidden ? 'true' : 'false');
  dom.ambientPill.setAttribute('aria-label',
    active
      ? (state.ambientPlaying ? t('ambient.playing') : t('ambient.paused')) + ' · ' + t(config.labelKey)
      : t('ambient.sound')
  );
  dom.ambientVolumeValue.textContent = state.ambientVolume + '%';
  updateSoundOptions();
}

function fadeAmbientTo(targets, duration) {
  if (ambientFadeFrame) cancelAnimationFrame(ambientFadeFrame);
  const start = performance.now();
  const from = ambientPlayers.map(function(player){ return player.volume; });
  const ms = Math.max(80, duration || 420);

  function step(now) {
    const p = Math.min(1, (now - start) / ms);
    const eased = 1 - Math.pow(1 - p, 3);
    ambientPlayers.forEach(function(player,index) {
      player.volume = clamp(from[index] + ((targets[index] || 0) - from[index]) * eased, 0, 1);
    });
    if (p < 1) ambientFadeFrame = requestAnimationFrame(step);
    else ambientFadeFrame = null;
  }
  ambientFadeFrame = requestAnimationFrame(step);
}

function syncAmbientVolume() {
  if (!state.ambientPlaying) fadeAmbientTo(ambientPlayers.map(function(){ return 0; }), 260);
  else fadeAmbientTo(ambientTargetVolumes(), 520);
  updateAmbientUI();
}

function stopLocalAmbient(reset) {
  if (ambientFadeFrame) cancelAnimationFrame(ambientFadeFrame);
  ambientPlayers.forEach(function(player) {
    player.pause();
    if (reset !== false) player.currentTime = 0;
    player.volume = 0;
  });
}

async function startAmbient() {
  const config = ambientPresetConfig();
  if (!config.layers.length) {
    stopAmbient();
    return false;
  }

  ambientPlayers.forEach(function(player,index) {
    const layer = config.layers[index];
    if (!layer) {
      player.pause();
      player.removeAttribute('src');
      player.load();
      player.volume = 0;
      return;
    }
    if (player.src !== layer.src) {
      player.src = layer.src;
      player.loop = true;
      player.preload = 'auto';
      player.volume = 0;
    }
  });

  const results = await Promise.allSettled(ambientPlayers.map(function(player,index) {
    if (!config.layers[index]) return Promise.resolve();
    return player.play();
  }));
  state.ambientPlaying = results.some(function(result){ return result.status === 'fulfilled'; });
  syncAmbientVolume();
  return state.ambientPlaying;
}

function pauseAmbient() {
  state.ambientPlaying = false;
  fadeAmbientTo(ambientPlayers.map(function(){ return 0; }), 360);
  setTimeout(function(){
    if (!state.ambientPlaying) ambientPlayers.forEach(function(player){ player.pause(); });
  },400);
  updateAmbientUI();
}

function stopAmbient() {
  state.ambientPlaying = false;
  stopLocalAmbient(true);
  updateAmbientUI();
}

async function setAmbientPreset(preset, autoplay) {
  const next = AMBIENT_PRESETS[preset] ? preset : 'off';
  stopLocalAmbient(false);
  state.ambientPlaying = false;
  state.ambientPreset = next;
  localStorage.setItem('fm_ambient', state.ambientPreset);
  updateAmbientUI();

  if (next !== 'off' && autoplay) await startAmbient();
}

function positionSoundPopover() {
  if (!dom.soundPopover || dom.soundPopover.hidden) return;
  const rect = dom.ambientPill.getBoundingClientRect();
  const width = Math.min(360, window.innerWidth - 24);
  dom.soundPopover.style.width = width + 'px';

  const measuredHeight = dom.soundPopover.offsetHeight || 390;
  let left = rect.left + rect.width / 2 - width / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - width - 12));

  let top = rect.bottom + 10;
  if (top + measuredHeight > window.innerHeight - 12) {
    top = Math.max(12, rect.top - measuredHeight - 10);
  }

  dom.soundPopover.style.left = left + 'px';
  dom.soundPopover.style.top = top + 'px';
}

function openSoundPopover() {
  dom.soundPopover.hidden = false;
  dom.ambientPill.setAttribute('aria-expanded','true');
  updateAmbientUI();
  requestAnimationFrame(positionSoundPopover);
}

function closeSoundPopover() {
  dom.soundPopover.hidden = true;
  dom.ambientPill.setAttribute('aria-expanded','false');
  updateAmbientUI();
}

dom.ambientPill.addEventListener('click', function() {
  if (dom.soundPopover.hidden) openSoundPopover();
  else closeSoundPopover();
});

dom.soundPopoverClose.addEventListener('click', closeSoundPopover);

document.querySelectorAll('.sound-option[data-sound]').forEach(function(button) {
  button.addEventListener('click', function() {
    setAmbientPreset(button.dataset.sound, button.dataset.sound !== 'off');
  });
});

dom.ambientVolume.addEventListener('input', function() {
  state.ambientVolume = clamp(parseInt(dom.ambientVolume.value,10) || 0, 0, 100);
  localStorage.setItem('fm_ambient_volume', String(state.ambientVolume));
  syncAmbientVolume();
});

dom.ambientAttenuateToggle.addEventListener('change', function() {
  state.ambientAttenuate = !!dom.ambientAttenuateToggle.checked;
  setBool('fm_ambient_attenuate', state.ambientAttenuate);
  syncAmbientVolume();
});

window.addEventListener('resize', positionSoundPopover);
window.addEventListener('scroll', positionSoundPopover, { passive:true });

ambientPlayers.forEach(function(player) {
  player.addEventListener('error', function() {
    console.warn('[Flowmodoro] Ambient audio source unavailable:', player.currentSrc || player.src);
  });
});

async function hydrateSpotifyLinkLabels() {
  await Promise.all(SPOTIFY_PLAYLISTS.map(async function(playlist,index) {
    const label = playlist.labelEl();
    if (!label) return;
    try {
      const response = await fetch('https://open.spotify.com/oembed?url=' + encodeURIComponent(playlist.url));
      if (!response.ok) return;
      const data = await response.json();
      if (data && data.title) label.textContent = data.title;
    } catch (error) {
      // The links remain fully usable with fallback names when oEmbed is unavailable.
    }
  }));
}

const SESSION_LABELS = {
  work: function(){ return t('timer.focusTime'); },
  short: function(){ return t('timer.shortBreak'); },
  long: function(){ return t('timer.longBreak'); }
};

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2,'0');
  const secs = Math.max(0, seconds % 60).toString().padStart(2,'0');
  return mins + ':' + secs;
}

function updateTimerUI(force) {
  updateFlipClock(!!force);
  dom.sessionLabel.textContent = SESSION_LABELS[state.currentMode]();
  dom.startBtn.textContent = state.isRunning ? t('timer.pause') : t('timer.start');
  dom.focusSessionCycle.textContent = String(Math.min(state.pomoCount + 1, 4)) + ' ' + t('focus.of') + ' 4';
  const isBreak = state.currentMode !== 'work';
  dom.breakTip.hidden = !isBreak;
  if (isBreak) dom.breakTip.textContent = t('break.tip' + (state.breakTipIndex + 1));
  document.title = state.currentMode === 'work'
    ? formatTime(state.timeLeft) + ' · Flowmodoro'
    : formatTime(state.timeLeft) + ' · ' + SESSION_LABELS[state.currentMode]() + ' · Flowmodoro';
}

function updateFlipClock(force) {
  const mins = Math.floor(state.timeLeft / 60).toString().padStart(2,'0');
  const secs = (state.timeLeft % 60).toString().padStart(2,'0');
  updateFlipCard('flip-m1', mins[0], force);
  updateFlipCard('flip-m2', mins[1], force);
  updateFlipCard('flip-s1', secs[0], force);
  updateFlipCard('flip-s2', secs[1], force);
}

function updateFlipCard(id, value, force) {
  const el = $(id);
  if (!el) return;
  const current = el.getAttribute('data-value');
  const top = el.querySelector('.top span');
  const bottom = el.querySelector('.bottom span');
  const flapTop = el.querySelector('.flap-top span');
  const flapBottom = el.querySelector('.flap-bottom span');
  if (force || current === null) {
    [top,bottom,flapTop,flapBottom].forEach(function(node){ node.textContent = value; });
    el.setAttribute('data-value', value);
    return;
  }
  if (current === value) return;
  if (el.dataset.timeoutId) {
    clearTimeout(Number(el.dataset.timeoutId));
    el.classList.remove('flipping');
  }
  top.textContent = value;
  bottom.textContent = current;
  flapTop.textContent = current;
  flapBottom.textContent = value;
  el.classList.remove('flipping');
  void el.offsetWidth;
  el.classList.add('flipping');
  el.setAttribute('data-value', value);
  el.dataset.timeoutId = String(setTimeout(function() {
    el.classList.remove('flipping');
    bottom.textContent = value;
    flapTop.textContent = value;
    delete el.dataset.timeoutId;
  },850));
}

function updateModeTabs() {
  dom.body.setAttribute('data-mode', state.currentMode);
  dom.tabWork.classList.toggle('active', state.currentMode === 'work');
  dom.tabShort.classList.toggle('active', state.currentMode === 'short');
  dom.tabLong.classList.toggle('active', state.currentMode === 'long');
}

function updatePomoDotsUI() {
  dom.pomoCount.forEach(function(dot,index) {
    dot.classList.toggle('active', index < state.pomoCount);
  });
}

function hideCompletion() {
  dom.sessionCompleteCard.hidden = true;
  state.pendingNextMode = null;
}

function setMode(mode) {
  if (!['work','short','long'].includes(mode)) return;
  pauseTimer();
  exitFocusMode();
  hideCompletion();
  state.currentMode = mode;
  state.timeLeft = state.durations[mode] * 60;
  state.totalTime = state.timeLeft;
  state.endTime = null;
  state.sessionStartedAt = null;
  if (mode !== 'work') state.breakTipIndex = Math.floor(Math.random() * 4);
  updateModeTabs();
  updateTimerUI(true);
  syncAmbientVolume();
  persistSession();
}

function startTimer() {
  if (state.isRunning) return;
  hideCompletion();
  if (state.timeLeft <= 0) {
    state.timeLeft = state.durations[state.currentMode] * 60;
    state.totalTime = state.timeLeft;
  }
  state.isRunning = true;
  state.sessionStartedAt = state.sessionStartedAt || Date.now();
  state.endTime = Date.now() + state.timeLeft * 1000;
  clearInterval(state.intervalId);
  state.intervalId = setInterval(tick, 250);
  markAsUsed();
  if (state.currentMode === 'work') enterFocusMode();
  if (state.ambientPreset !== 'off') {
    if (!state.ambientPlaying) startAmbient();
    else syncAmbientVolume();
  }
  acquireWakeLock();
  persistSession();
  updateTimerUI();
}

function pauseTimer() {
  if (!state.isRunning) return;
  state.isRunning = false;
  clearInterval(state.intervalId);
  state.intervalId = null;
  if (state.endTime) state.timeLeft = Math.max(0, Math.round((state.endTime - Date.now()) / 1000));
  state.endTime = null;
  releaseWakeLock();
  persistSession();
  updateTimerUI();
}

function resetTimer() {
  pauseTimer();
  hideCompletion();
  state.timeLeft = state.durations[state.currentMode] * 60;
  state.totalTime = state.timeLeft;
  state.endTime = null;
  state.sessionStartedAt = null;
  persistSession();
  updateTimerUI(true);
}

function tick() {
  if (!state.isRunning || !state.endTime) return;
  const remaining = Math.max(0, Math.round((state.endTime - Date.now()) / 1000));
  if (remaining === state.timeLeft) return;
  state.timeLeft = remaining;
  updateTimerUI();
  persistSession();
  if (remaining <= 0) {
    state.isRunning = false;
    clearInterval(state.intervalId);
    state.intervalId = null;
    state.endTime = null;
    releaseWakeLock();
    if (state.ambientPlaying) {
      fadeAmbientTo(ambientTargetVolumes().map(function(v){ return v * 0.22; }), 700);
    }
    handleSessionEnd(false);
  }
}

function recordSession() {
  const active = state.tasks.find(function(task){ return task.id === state.activeTaskId; });
  const entry = {
    id: generateId(),
    mode: state.currentMode,
    startedAt: state.sessionStartedAt || (Date.now() - state.totalTime * 1000),
    completedAt: Date.now(),
    durationMin: Math.round((state.totalTime / 60) * 10) / 10,
    taskId: active ? active.id : null,
    taskText: active ? active.text : ''
  };
  state.history.push(entry);
  saveHistory();
  return entry;
}

function showCompletion(nextMode, entry) {
  state.pendingNextMode = nextMode;
  dom.sessionCompleteTitle.textContent = Math.round(entry.durationMin) + ' min · ' + SESSION_LABELS[entry.mode]();
  dom.sessionCompleteTask.textContent = entry.taskText || '';
  dom.nextSessionBtn.textContent = nextMode === 'work' ? t('complete.startFocus') : t('complete.startBreak');
  dom.sessionCompleteCard.hidden = false;
}

function transitionToPending(startImmediately) {
  const mode = state.pendingNextMode;
  if (!mode) return;
  setMode(mode);
  if (startImmediately) setTimeout(startTimer, 120);
}

function handleSessionEnd(restored) {
  playSound();
  const entry = recordSession();
  let nextMode = 'work';
  let message;

  if (state.currentMode === 'work') {
    const task = state.tasks.find(function(item){ return item.id === state.activeTaskId && !item.done; });
    if (task) {
      task.actPomos += 1;
      if (task.actPomos >= task.estPomos) {
        task.done = true;
        message = t('timer.done.work.taskComplete', { task:task.text });
      } else {
        message = t('timer.done.work.task', { act:task.actPomos, est:task.estPomos, task:task.text });
      }
      saveTasks();
      if (task.done) {
        state.activeTaskId = null;
        persistActiveTask();
        flashFocusCompleted();
      }
    }
    state.pomoCount += 1;
    if (state.pomoCount >= 4) {
      state.pomoCount = 0;
      nextMode = 'long';
    } else {
      nextMode = 'short';
    }
    message = message || t('timer.done.work');
  } else {
    nextMode = 'work';
    message = state.currentMode === 'short' ? t('timer.done.short') : t('timer.done.long');
  }

  state.sessionStartedAt = null;
  updatePomoDotsUI();
  persistSession();
  renderTasks();
  renderFocusUI();
  renderToday();
  renderProgress();
  showNotification(message);
  showCompletion(nextMode, entry);

  const auto = state.currentMode === 'work' ? state.autoStartBreaks : state.autoStartFocus;
  if (auto && !restored) setTimeout(function(){ transitionToPending(true); }, 900);
}

dom.startBtn.addEventListener('click', function() {
  if (state.isRunning) pauseTimer();
  else startTimer();
});
dom.resetBtn.addEventListener('click', resetTimer);
dom.tabWork.addEventListener('click', function(){ setMode('work'); });
dom.tabShort.addEventListener('click', function(){ setMode('short'); });
dom.tabLong.addEventListener('click', function(){ setMode('long'); });
dom.nextSessionBtn.addEventListener('click', function(){ transitionToPending(true); });
dom.dismissSessionBtn.addEventListener('click', function(){ transitionToPending(false); });

let focusMode = false;

function enterFocusMode() {
  if (focusMode || state.currentMode !== 'work') return;
  focusMode = true;
  dom.body.classList.add('focus-mode');
  dom.tabWork.disabled = true;
  dom.tabShort.disabled = true;
  dom.tabLong.disabled = true;
  setThemeUI('dark');
  if (dom.timerSection) dom.timerSection.scrollIntoView({ behavior:'auto', block:'start' });
}

function exitFocusMode() {
  if (!focusMode) return;
  focusMode = false;
  dom.body.classList.remove('focus-mode');
  dom.tabWork.disabled = false;
  dom.tabShort.disabled = false;
  dom.tabLong.disabled = false;
  setThemeUI(resolveTheme(state.themePreference));
  if (!dom.settingsPanel.classList.contains('open')) dom.body.style.overflow = '';
}

dom.focusExitBtn.addEventListener('click', exitFocusMode);

let audioCtx = null;
function playSound() {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.24, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.6);
  } catch (error) {
    console.warn('[Flowmodoro] Sound unavailable', error);
  }
}

async function showNotification(body) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      await registration.showNotification('Flowmodoro', { body:body, icon:'icons/icon-192.png', badge:'icons/icon-192.png' });
    } else {
      new Notification('Flowmodoro', { body:body, icon:'icons/icon-192.png' });
    }
  } catch (error) {
    console.warn('[Flowmodoro] Notification unavailable', error);
  }
}

function updateNotificationButton() {
  if (!dom.notificationBtn || !('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    dom.notificationBtn.textContent = t('settings.notificationsOn');
    dom.notificationBtn.disabled = true;
  } else if (Notification.permission === 'denied') {
    dom.notificationBtn.textContent = t('settings.notificationsDenied');
    dom.notificationBtn.disabled = true;
  } else {
    dom.notificationBtn.textContent = t('settings.enableNotifications');
    dom.notificationBtn.disabled = false;
  }
}

dom.notificationBtn.addEventListener('click', async function() {
  if (!('Notification' in window)) return;
  try { await Notification.requestPermission(); } catch (error) {}
  updateNotificationButton();
});

let wakeLock = null;
async function acquireWakeLock() {
  if (!state.keepAwake || !state.isRunning || !('wakeLock' in navigator) || document.visibilityState !== 'visible') return;
  try {
    if (!wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', function(){ wakeLock = null; });
    }
  } catch (error) {
    console.warn('[Flowmodoro] Wake Lock unavailable', error);
  }
}

async function releaseWakeLock() {
  if (!wakeLock) return;
  try { await wakeLock.release(); } catch (error) {}
  wakeLock = null;
}

document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible' && state.isRunning) acquireWakeLock();
});

function setActiveTask(id) {
  state.activeTaskId = id || null;
  persistActiveTask();
  markAsUsed();
  renderTasks();
  renderFocusUI();
  renderToday();
}

function renderFocusUI() {
  const task = state.tasks.find(function(item){ return item.id === state.activeTaskId && !item.done; });
  if (task) {
    dom.focusPill.classList.remove('ghost','complete');
    dom.focusPill.classList.add('active');
    dom.focusPillText.textContent = task.text;
    dom.focusPillProgress.textContent = '🍅 ' + task.actPomos + '/' + task.estPomos;
  } else {
    dom.focusPill.classList.add('ghost');
    dom.focusPill.classList.remove('active','complete');
    dom.focusPillText.textContent = t('timer.focusChoose');
    dom.focusPillProgress.textContent = '';
  }
  renderFocusList();
}

function renderFocusList() {
  const pending = state.tasks.filter(function(task){ return !task.done; });
  const rows = pending.map(function(task) {
    return '<div class="focus-option ' + (task.id === state.activeTaskId ? 'selected' : '') + '" data-id="' + escapeHtml(task.id) + '" role="option" aria-selected="' + (task.id === state.activeTaskId) + '">' +
      '<span class="focus-option-text">' + escapeHtml(task.text) + '</span>' +
      '<span class="focus-option-progress">🍅 ' + task.actPomos + '/' + task.estPomos + '</span></div>';
  }).join('');
  dom.focusList.innerHTML =
    '<div class="focus-option ' + (!state.activeTaskId ? 'selected' : '') + '" data-id="" role="option" aria-selected="' + (!state.activeTaskId) + '">' +
    '<span class="focus-option-text">— ' + escapeHtml(t('tasks.noTask')) + ' —</span></div>' + rows;
}

function positionFocusPopover() {
  const rect = dom.focusPill.getBoundingClientRect();
  const width = Math.min(320, window.innerWidth - 24);
  const height = dom.focusPopover.offsetHeight || 0;
  let left = rect.left + rect.width / 2 - width / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
  let top = rect.bottom + 10;
  if (height && top + height > window.innerHeight - 8) top = Math.max(8, rect.top - height - 10);
  dom.focusPopover.style.width = width + 'px';
  dom.focusPopover.style.left = left + 'px';
  dom.focusPopover.style.top = top + 'px';
}

function openFocusPopover() {
  renderFocusList();
  dom.focusPopover.hidden = false;
  dom.focusPill.setAttribute('aria-expanded','true');
  requestAnimationFrame(positionFocusPopover);
}

function closeFocusPopover() {
  dom.focusPopover.hidden = true;
  dom.focusPill.setAttribute('aria-expanded','false');
}

dom.focusPill.addEventListener('click', function() {
  if (dom.focusPopover.hidden) openFocusPopover();
  else closeFocusPopover();
});

dom.focusList.addEventListener('click', function(event) {
  const option = event.target.closest('.focus-option');
  if (!option) return;
  setActiveTask(option.dataset.id || null);
  closeFocusPopover();
});

dom.focusQuickAdd.addEventListener('keydown', function(event) {
  if (event.key !== 'Enter') return;
  const text = dom.focusQuickAdd.value.trim();
  if (!text) return;
  const task = normalizeTask({ id:generateId(), text:text, done:false, estPomos:1, actPomos:0 });
  state.tasks.unshift(task);
  dom.focusQuickAdd.value = '';
  saveTasks();
  setActiveTask(task.id);
  closeFocusPopover();
});

window.addEventListener('resize', function(){ if (!dom.focusPopover.hidden) positionFocusPopover(); });
window.addEventListener('scroll', function(){ if (!dom.focusPopover.hidden) positionFocusPopover(); }, { passive:true });

let focusCompletedTimer = null;
function flashFocusCompleted() {
  clearTimeout(focusCompletedTimer);
  dom.focusPill.classList.add('complete');
  dom.focusPillText.textContent = t('timer.focusCompleted');
  dom.focusPillProgress.textContent = '';
  focusCompletedTimer = setTimeout(function(){
    dom.focusPill.classList.remove('complete');
    renderFocusUI();
  },2200);
}

function renderTasks() {
  dom.taskList.querySelectorAll('.task-item').forEach(function(el){ el.remove(); });
  const visible = state.tasks;
  dom.taskEmpty.style.display = visible.length ? 'none' : 'block';
  dom.taskEmptyText.textContent = t('tasks.empty');
  const hasDone = state.tasks.some(function(task){ return task.done; });
  dom.clearDoneBtn.hidden = !hasDone;
  dom.clearDoneBtn.disabled = !hasDone;

  visible.forEach(function(task) {
    const index = state.tasks.indexOf(task);
    const item = document.createElement('div');
    item.className = 'task-item' + (task.id === state.activeTaskId ? ' active-task' : '') + (task.done ? ' done' : '');
    item.dataset.id = task.id;
    const focusLabel = task.id === state.activeTaskId ? t('tasks.unfocus') : t('tasks.focus');
    item.innerHTML =
      '<button class="task-check" data-action="toggle" aria-pressed="' + task.done + '" aria-label="' + escapeHtml(t('tasks.complete')) + '">' + (task.done ? '✓' : '') + '</button>' +
      '<span class="task-text" data-action="focus" role="button" tabindex="0">' + escapeHtml(task.text) + '</span>' +
      '<div class="pomo-badge" title="' + escapeHtml(t('tasks.estimation')) + '"><span class="pomo-count">🍅 ' + task.actPomos + '/' + task.estPomos + '</span></div>' +
      '<div class="task-actions">' +
        '<button class="task-action-btn task-more-btn" data-action="more" aria-label="' + escapeHtml(t('nav.more')) + '">•••</button>' +
        '<div class="task-menu" hidden>' +
          '<button data-action="focus">' + escapeHtml(focusLabel) + '<span>◎</span></button>' +
          '<button data-action="edit">' + escapeHtml(t('tasks.edit')) + '<span>✎</span></button>' +
          '<button data-action="inc-pomo">' + escapeHtml(t('tasks.inc.pomos')) + '<span>+ 🍅</span></button>' +
          '<button data-action="dec-pomo" ' + (task.estPomos <= 1 ? 'disabled' : '') + '>' + escapeHtml(t('tasks.dec.pomos')) + '<span>− 🍅</span></button>' +
          '<button data-action="up" ' + (index === 0 ? 'disabled' : '') + '>' + escapeHtml(t('tasks.reorder.up')) + '<span>↑</span></button>' +
          '<button data-action="down" ' + (index === state.tasks.length - 1 ? 'disabled' : '') + '>' + escapeHtml(t('tasks.reorder.down')) + '<span>↓</span></button>' +
          '<button class="danger" data-action="delete">' + escapeHtml(t('tasks.delete')) + '<span>×</span></button>' +
        '</div>' +
      '</div>';
    dom.taskList.appendChild(item);
  });
}

function closeTaskMenus(except) {
  document.querySelectorAll('.task-menu').forEach(function(menu) {
    if (menu !== except) menu.hidden = true;
  });
}

function beginTaskEdit(item, task) {
  const textEl = item.querySelector('.task-text');
  const input = document.createElement('input');
  input.className = 'task-edit-input';
  input.value = task.text;
  input.maxLength = 120;
  textEl.replaceWith(input);
  input.focus();
  input.select();
  let finished = false;
  function finish(save) {
    if (finished) return;
    finished = true;
    if (save && input.value.trim()) {
      task.text = input.value.trim();
      saveTasks();
      renderFocusUI();
    }
    renderTasks();
  }
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') finish(true);
    if (event.key === 'Escape') finish(false);
  });
  input.addEventListener('blur', function(){ finish(true); });
}

function moveTask(task, delta) {
  const from = state.tasks.indexOf(task);
  const to = from + delta;
  if (from < 0 || to < 0 || to >= state.tasks.length) return;
  const moved = state.tasks.splice(from,1)[0];
  state.tasks.splice(to,0,moved);
}

dom.taskList.addEventListener('click', function(event) {
  const item = event.target.closest('.task-item');
  if (!item) return;
  const task = state.tasks.find(function(row){ return row.id === item.dataset.id; });
  if (!task) return;
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const action = control.dataset.action;

  if (action === 'more') {
    const menu = item.querySelector('.task-menu');
    const wasHidden = menu.hidden;
    closeTaskMenus();
    menu.hidden = !wasHidden;
    return;
  }

  closeTaskMenus();
  if (action === 'toggle') {
    task.done = !task.done;
    if (task.done && state.activeTaskId === task.id) {
      state.activeTaskId = null;
      persistActiveTask();
    }
  } else if (action === 'focus') {
    if (!task.done) state.activeTaskId = state.activeTaskId === task.id ? null : task.id;
    persistActiveTask();
  } else if (action === 'edit') {
    beginTaskEdit(item, task);
    return;
  } else if (action === 'inc-pomo') {
    task.estPomos += 1;
  } else if (action === 'dec-pomo') {
    task.estPomos = Math.max(1, task.estPomos - 1);
  } else if (action === 'up') {
    moveTask(task,-1);
  } else if (action === 'down') {
    moveTask(task,1);
  } else if (action === 'delete') {
    state.tasks = state.tasks.filter(function(row){ return row.id !== task.id; });
    if (state.activeTaskId === task.id) {
      state.activeTaskId = null;
      persistActiveTask();
    }
  }
  markAsUsed();
  saveTasks();
  renderTasks();
  renderFocusUI();
});

dom.taskList.addEventListener('keydown', function(event) {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('task-text')) {
    event.preventDefault();
    event.target.click();
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.task-actions')) closeTaskMenus();
  if (!dom.focusPopover.hidden && !dom.focusPopover.contains(event.target) && !dom.focusPill.contains(event.target)) closeFocusPopover();
  if (!dom.soundPopover.hidden && !dom.soundPopover.contains(event.target) && !dom.ambientPill.contains(event.target)) closeSoundPopover();
});

function addTask() {
  const text = dom.taskInput.value.trim();
  if (!text) return;
  state.tasks.unshift(normalizeTask({ id:generateId(), text:text, done:false, estPomos:1, actPomos:0 }));
  dom.taskInput.value = '';
  markAsUsed();
  saveTasks();
  renderTasks();
  renderFocusUI();
}

dom.addTaskBtn.addEventListener('click', addTask);
dom.taskInput.addEventListener('keydown', function(event){ if (event.key === 'Enter') addTask(); });

let clearDoneArmed = false;
let clearDoneTimer = null;
function resetClearDone() {
  clearDoneArmed = false;
  clearTimeout(clearDoneTimer);
  dom.clearDoneBtn.classList.remove('confirm');
  dom.clearDoneBtn.textContent = t('tasks.clearDone');
}
dom.clearDoneBtn.addEventListener('click', function() {
  if (!clearDoneArmed) {
    clearDoneArmed = true;
    dom.clearDoneBtn.classList.add('confirm');
    dom.clearDoneBtn.textContent = t('tasks.clearDone.confirm');
    clearDoneTimer = setTimeout(resetClearDone,3000);
    return;
  }
  state.tasks = state.tasks.filter(function(task){ return !task.done; });
  validateActiveTask();
  saveTasks();
  resetClearDone();
  renderTasks();
  renderFocusUI();
});

function isSameDay(timestamp, date) {
  const value = new Date(timestamp);
  return value.getFullYear() === date.getFullYear() && value.getMonth() === date.getMonth() && value.getDate() === date.getDate();
}

function renderToday() {
  const today = new Date();
  const workToday = state.history.filter(function(entry){ return entry.mode === 'work' && isSameDay(entry.completedAt, today); });
  const minutes = Math.round(workToday.reduce(function(sum,entry){ return sum + entry.durationMin; },0));
  const completed = state.tasks.filter(function(task){ return task.done; }).length;
  dom.todaySessions.textContent = String(workToday.length);
  dom.todayMinutes.textContent = String(minutes) + ' min';
  dom.todayTasks.textContent = completed + ' / ' + state.tasks.length;
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0,0,0,0);
  return d;
}

function renderProgress() {
  const now = new Date();
  const sevenDaysAgo = startOfDay(now);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
  const weekEntries = state.history.filter(function(entry){ return entry.mode === 'work' && entry.completedAt >= sevenDaysAgo.getTime(); });
  dom.weekSessions.textContent = String(weekEntries.length);
  dom.weekMinutes.textContent = String(Math.round(weekEntries.reduce(function(sum,entry){ return sum + entry.durationMin; },0)));
  const days = [];
  for (let i=6; i>=0; i--) {
    const d = startOfDay(now);
    d.setDate(d.getDate() - i);
    const count = state.history.filter(function(entry){ return entry.mode === 'work' && isSameDay(entry.completedAt,d); }).length;
    days.push({ date:d, count:count });
  }
  const max = Math.max(1, ...days.map(function(day){ return day.count; }));
  dom.weekChart.innerHTML = days.map(function(day) {
    const height = day.count ? Math.max(12, Math.round((day.count / max) * 100)) : 3;
    const label = day.date.toLocaleDateString(state.lang === 'es' ? 'es-CL' : 'en-US', { weekday:'short' }).replace('.','');
    return '<div class="week-bar-wrap"><div class="week-bar" style="--bar:' + height + '"></div><strong>' + day.count + '</strong><span>' + escapeHtml(label) + '</span></div>';
  }).join('');

  const recent = state.history.filter(function(entry){ return entry.mode === 'work'; }).slice(-12).reverse();
  dom.sessionHistory.innerHTML = recent.length ? recent.map(function(entry) {
    const when = new Date(entry.completedAt);
    const dateText = when.toLocaleDateString(state.lang === 'es' ? 'es-CL' : 'en-US', { day:'2-digit', month:'short' });
    const timeText = when.toLocaleTimeString(state.lang === 'es' ? 'es-CL' : 'en-US', { hour:'2-digit', minute:'2-digit' });
    return '<div class="history-item"><span class="history-dot"></span><div class="history-main"><strong>' +
      escapeHtml(entry.taskText || t('timer.focusTime')) + '</strong><span>' + Math.round(entry.durationMin) + ' min · ' + escapeHtml(dateText) +
      '</span></div><span class="history-time">' + escapeHtml(timeText) + '</span></div>';
  }).join('') : '<div class="history-empty">' + escapeHtml(t('progress.empty')) + '</div>';
}

dom.exportHistoryBtn.addEventListener('click', function() {
  const payload = {
    product:'Flowmodoro',
    exportedAt:new Date().toISOString(),
    durations:state.durations,
    tasks:state.tasks,
    history:state.history
  };
  const blob = new Blob([JSON.stringify(payload,null,2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'flowmodoro-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

function openShortcuts() {
  closeSettings();
  if (typeof dom.shortcutsDialog.showModal === 'function') dom.shortcutsDialog.showModal();
  else dom.shortcutsDialog.setAttribute('open','');
}
function closeShortcuts() {
  if (typeof dom.shortcutsDialog.close === 'function' && dom.shortcutsDialog.open) dom.shortcutsDialog.close();
  else dom.shortcutsDialog.removeAttribute('open');
}
dom.shortcutsBtn.addEventListener('click', openShortcuts);
dom.shortcutsCloseBtn.addEventListener('click', closeShortcuts);

document.addEventListener('keydown', function(event) {
  const target = event.target;
  const typing = target && (target.matches('input,textarea,select') || target.isContentEditable);
  if (typing) {
    if (event.key === 'Escape') target.blur();
    return;
  }

  if (event.key === 'Escape') {
    if (dom.shortcutsDialog.open) { closeShortcuts(); return; }
    if (dom.settingsPanel.classList.contains('open')) { closeSettings(); return; }
    if (!dom.soundPopover.hidden) { closeSoundPopover(); return; }
    if (!dom.focusPopover.hidden) { closeFocusPopover(); return; }
    if (focusMode) { exitFocusMode(); return; }
  }

  if (event.key === ' ') {
    event.preventDefault();
    state.isRunning ? pauseTimer() : startTimer();
  } else if (event.key.toLowerCase() === 'r') {
    resetTimer();
  } else if (event.key === '1') {
    setMode('work');
  } else if (event.key === '2') {
    setMode('short');
  } else if (event.key === '3') {
    setMode('long');
  } else if (event.key.toLowerCase() === 'f') {
    focusMode ? exitFocusMode() : enterFocusMode();
  } else if (event.key.toLowerCase() === 'n') {
    document.getElementById('tasks-section').scrollIntoView({ behavior:'smooth', block:'start' });
    setTimeout(function(){ dom.taskInput.focus(); },350);
  } else if (event.key === '?') {
    openShortcuts();
  }
});

let deferredInstallPrompt = null;
const isiOSDevice = /iphone|ipad|ipod/i.test(navigator.userAgent);

if (isiOSDevice && dom.installDrawerBtn) {
  dom.installDrawerBtn.hidden = false;
}

window.addEventListener('beforeinstallprompt', function(event) {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (dom.installDrawerBtn) dom.installDrawerBtn.hidden = false;
});

async function triggerInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch (error) {}
    deferredInstallPrompt = null;
    if (dom.installDrawerBtn) dom.installDrawerBtn.hidden = true;
    return;
  }
  if (isiOSDevice) window.alert(t('install.ios'));
}

if (dom.installDrawerBtn) dom.installDrawerBtn.addEventListener('click', triggerInstall);
window.addEventListener('appinstalled', function(){
  deferredInstallPrompt = null;
  if (dom.installDrawerBtn) dom.installDrawerBtn.hidden = true;
});

let refreshing = false;
async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const registration = await navigator.serviceWorker.register('service-worker.js');
    function offerUpdate(worker) {
      if (!worker || !navigator.serviceWorker.controller) return;
      dom.updateToast.hidden = false;
      dom.updateAppBtn.onclick = function() { worker.postMessage({ type:'SKIP_WAITING' }); };
    }
    if (registration.waiting) offerUpdate(registration.waiting);
    registration.addEventListener('updatefound', function() {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener('statechange', function() {
        if (worker.state === 'installed') offerUpdate(worker);
      });
    });
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  } catch (error) {
    console.warn('[Flowmodoro] Service worker registration failed', error);
  }
}

class ParallaxController {
  constructor() {
    this.sections = [];
    this.ticking = false;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this.reduced) this.init();
  }
  init() {
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      this.sections.push({ el:el, speed:parseFloat(el.dataset.parallax) || 0.15, bg:el.querySelector('.section-parallax__bg') });
    });
    window.addEventListener('scroll', () => this.onScroll(), { passive:true });
    this.update();
  }
  onScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => { this.update(); this.ticking = false; });
  }
  update() {
    this.sections.forEach(({el,speed,bg}) => {
      if (!bg) return;
      const rect = el.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      bg.style.transform = 'translateY(' + (distance * speed) + 'px)';
    });
  }
}


function getAnchorOffset() {
  const raw = getComputedStyle(dom.html).getPropertyValue('--nav-height');
  const navHeight = parseFloat(raw) || 52;
  return navHeight + 16;
}

function scrollToAnchorTarget(target, behavior) {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
  window.scrollTo({
    top: Math.max(0, Math.round(top)),
    behavior: behavior || (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth')
  });
}

document.addEventListener('click', function(event) {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href === '#') return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  if (dom.settingsPanel.classList.contains('open')) closeSettings();
  closeFocusPopover();
  closeSoundPopover();

  scrollToAnchorTarget(target);
  if (window.location.hash !== href) history.pushState(null, '', href);
});

window.addEventListener('popstate', function() {
  if (!window.location.hash) return;
  const target = document.getElementById(window.location.hash.slice(1));
  if (target) requestAnimationFrame(function(){ scrollToAnchorTarget(target, 'auto'); });
});

function setupNavigationState() {
  const sections = ['timer-section','tasks-section'];
  const links = document.querySelectorAll('.mobile-bottom-link[href]');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(function(entries) {
    const visible = entries.filter(function(entry){ return entry.isIntersecting; }).sort(function(a,b){ return b.intersectionRatio - a.intersectionRatio; })[0];
    if (!visible) return;
    links.forEach(function(link){ link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id); });
  }, { rootMargin:'-30% 0px -55% 0px', threshold:[0,0.15,0.5] });
  sections.forEach(function(id){ const el=$(id); if (el) observer.observe(el); });
}

function init() {
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (standalone) {
    dom.body.classList.add('standalone-app');
    if (dom.installDrawerBtn) dom.installDrawerBtn.hidden = true;
  }

  applyThemePreference(state.themePreference, false);
  setLang(state.lang);
  updateModeTabs();
  validateActiveTask();
  renderTasks();
  renderFocusUI();
  updatePomoDotsUI();
  renderToday();
  renderProgress();
  updateTimerUI(true);
  dom.ambientVolume.value = String(state.ambientVolume);
  dom.ambientVolumeValue.textContent = state.ambientVolume + '%';
  dom.ambientAttenuateToggle.checked = state.ambientAttenuate;
  updateAmbientUI();
  hydrateSpotifyLinkLabels();
  document.body.appendChild(dom.focusPopover);
  document.body.appendChild(dom.soundPopover);

  if (state.isRunning) {
    clearInterval(state.intervalId);
    state.intervalId = setInterval(tick,250);
    if (state.currentMode === 'work') enterFocusMode();
    acquireWakeLock();
  } else if (state.restoreExpired) {
    state.restoreExpired = false;
    handleSessionEnd(true);
  }

  const usedBefore = localStorage.getItem('fm_has_used_app') === 'true';
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) requestAnimationFrame(function(){ scrollToAnchorTarget(target, 'auto'); });
  } else if (standalone || usedBefore) {
    requestAnimationFrame(function(){ scrollToAnchorTarget(dom.timerSection, 'auto'); });
  }

  setupNavigationState();
  registerServiceWorker();
  new ParallaxController();
  persistSession();
}

init();
