/* =========================================================
   PITCHPULSE — script.js
   TRL TEAM FOR DEVELOPMENT — Taimdev9
   ========================================================= */

/* ================= SITE CONFIG ================= */
// SITE NAME — غيّر هنا فقط
const SITE_NAME = 'PitchPulse';

/* ================= I18N ================= */
const I18N = {
  en: {
    termsTitle:'Terms of Use',
    termsSub:'TRL TEAM FOR DEVELOPMENT — Taimdev9',
    termsAgreeText:'I have read and agree to the Terms of Use.',
    termsContinue:'Continue',
    heroTitle:'Ready for kickoff?',
    heroSub:'Set up your teams and let the celebrations begin.',
    teamA:'Team A', teamB:'Team B', teamName:'Team name',
    players:'Players (comma separated)',
    matchDuration:'Match duration', matchDurationDesc:'Type minutes — timer counts down',
    min:'min', recordVideo:'Record match video',
    recordVideoDesc:'Records the camera during the match',
    saveRoster:'Save roster', saveRosterDesc:'Save team names & players for next time',
    exportData:'⬇ Export', importData:'⬆ Import',
    randomTeams:'Random Teams', startMatch:'Start Match',
    randomTitle:'Random Teams', randomHint:'Pick a format and enter all players.',
    format:'Format', allPlayers:'All players (comma separated)',
    wheelEmpty:'Enter players to spin',
    spin:'Spin', spinAgain:'Spin Again', applyTeams:'Apply to Teams', cancel:'Cancel',
    period1:'H1', period2:'H2', periodET:'ET',
    goalBtn:'Goal', matchFeed:'Match feed', celebrationPhotos:'Celebration photos',
    noEvents:'No events yet — first goal starts the party 🎉',
    noPhotos:'Celebration photos will appear here',
    download:'⬇ Save',
    player:'Player', assist:'Assist (optional)',
    goalType:'Goal type', regularGoal:'Regular', penalty:'Penalty',
    freeKick:'Free kick', header:'Header', bicycle:'Bicycle',
    registerGoal:'Register Goal', goal:'GOAL!',
    continueMatch:'Continue match ›', snap:'Shoot & Save',
    newMatch:'New Match', deleteEvent:'Delete this event?',
    needMorePlayers:'Not enough players for this format.',
    goalFor:'Goal for',
    fullTime:'Full Time', matchEnded:'Here are your match stats',
    topScorer:'Top Scorer', totalGoals:'Total Goals',
    photosCount:'Photos', matchTime:'Match Time',
    allGoals:'All Goals', downloadVideo:'Download Video',
    copySummary:'Copy Summary', copied:'✓ Copied',
    motm:'Man of the Match', charts:'Charts',
    shareCard:'Share Card', downloadCard:'⬇ Card',
    showQR:'📱 QR',
    historyTitle:'Match History', leaderboardTitle:'Leaderboard',
    noHistory:'No matches yet.', noLeaderboard:'No goals scored yet.',
    yellowCard:'Yellow', redCard:'Red',
    confirm:'Confirm', cardFor:'Card for',
    exportSuccess:'Data exported.', importSuccess:'Data imported.',
    importError:'Invalid file.',
    motmPlaceholder:'— Select player —',
    unknownPlayer:'Unknown player',
    endMatchConfirm:'End the match now?',
    newMatchConfirm:'Start a new match? Current data will be lost.',
    unknown: 'Unknown'
  },
  ar: {
    termsTitle:'شروط الاستخدام',
    termsSub:'فريق TRL للتطوير — Taimdev9',
    termsAgreeText:'قرأت وأوافق على شروط الاستخدام.',
    termsContinue:'متابعة',
    heroTitle:'جاهز للضربة؟',
    heroSub:'جهّز فرقك وخلّي الاحتفالات تبدأ.',
    teamA:'الفريق A', teamB:'الفريق B', teamName:'اسم الفريق',
    players:'اللاعبون (فصل بفاصلة)',
    matchDuration:'مدة المباراة', matchDurationDesc:'اكتب الدقائق — العدّاد تنازلي',
    min:'دقيقة', recordVideo:'تسجيل فيديو للمباراة',
    recordVideoDesc:'يسجّل الكاميرا طول المباراة',
    saveRoster:'حفظ الفريق', saveRosterDesc:'حفظ أسماء الفرق واللاعبين للمرة القادمة',
    exportData:'⬇ تصدير', importData:'⬆ استيراد',
    randomTeams:'تشكيلة عشوائية', startMatch:'ابدأ المباراة',
    randomTitle:'تشكيلة عشوائية', randomHint:'اختر العدد وأدخل أسماء الجميع.',
    format:'العدد', allPlayers:'كل اللاعبين (فصل بفاصلة)',
    wheelEmpty:'أدخل الأسماء عشان تدور العجلة',
    spin:'اسحب', spinAgain:'اسحب مرة ثانية', applyTeams:'طبّق على الفرق', cancel:'إلغاء',
    period1:'ش١', period2:'ش٢', periodET:'إضافي',
    goalBtn:'هدف', matchFeed:'مجرى المباراة', celebrationPhotos:'صور الاحتفالات',
    noEvents:'ما في أحداث بعد — أول هدف يبدأ الحفلة 🎉',
    noPhotos:'صور الاحتفالات رح تطلع هنا',
    download:'⬇ حفظ',
    player:'اللاعب', assist:'صناعة (اختياري)',
    goalType:'نوع الهدف', regularGoal:'عادي', penalty:'جزاء',
    freeKick:'حرة', header:'رأسية', bicycle:'مقصية',
    registerGoal:'سجّل الهدف', goal:'هدف!',
    continueMatch:'متابعة المباراة ›', snap:'صوّر واحفظ',
    newMatch:'مباراة جديدة', deleteEvent:'تحذف هذا الحدث؟',
    needMorePlayers:'عدد اللاعبين غير كافٍ لهذا العدد.',
    goalFor:'هدف لـ',
    fullTime:'نهاية المباراة', matchEnded:'هاي إحصائيات المباراة',
    topScorer:'الهدّاف', totalGoals:'مجموع الأهداف',
    photosCount:'الصور', matchTime:'وقت المباراة',
    allGoals:'كل الأهداف', downloadVideo:'تحميل الفيديو',
    copySummary:'نسخ الملخص', copied:'✓ تم النسخ',
    motm:'رجل المباراة', charts:'الرسوم البيانية',
    shareCard:'بطاقة المشاركة', downloadCard:'⬇ البطاقة',
    showQR:'📱 QR',
    historyTitle:'سجل المباريات', leaderboardTitle:'لوحة الهدافين',
    noHistory:'ما في مباريات بعد.', noLeaderboard:'ما في أهداف بعد.',
    yellowCard:'صفراء', redCard:'حمراء',
    confirm:'تأكيد', cardFor:'بطاقة لـ',
    exportSuccess:'تم تصدير البيانات.', importSuccess:'تم استيراد البيانات.',
    importError:'ملف غير صالح.',
    motmPlaceholder:'— اختر لاعب —',
    unknownPlayer:'لاعب مجهول',
    endMatchConfirm:'تنهي المباراة الحين؟',
    newMatchConfirm:'تبدأ مباراة جديدة؟ البيانات الحالية رح تنحذف.',
    unknown: 'مجهول'
  }
};

let lang = localStorage.getItem('pp_lang') || 'en';
const t = k => (I18N[lang] && I18N[lang][k]) ?? k;

/* ================= HELPERS ================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtTime = s => { s = Math.max(0, Math.floor(s)); return String(Math.floor(s/60)).padStart(2,'0') + ':' + String(s%60).padStart(2,'0'); };
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'id' + Date.now() + Math.random().toString(36).slice(2));
const parsePlayers = v => (v||'').split(/[,،]/).map(s=>s.trim()).filter(Boolean);

/* ================= STORAGE KEYS ================= */
const LSK = {
  state:   'pp_state_v1',
  history: 'pp_history_v1',
  roster:  'pp_roster_v1',
  theme:   'pp_theme',
  lang:    'pp_lang'
};

/* ================= STATE ================= */
const state = {
  started:false, ended:false, period:1, clock:0, totalDuration:600, running:false,
  teams:[{name:'Team A',score:0,players:[]},{name:'Team B',score:0,players:[]}],
  events:[]
};

let photos = [];
let camStream = null;
let soundOn = true;
let pendingTeam = 0;
let pendingType = 'regularGoal';
let pendingCardType = 'yellow';
let lastTick = performance.now();

/* Video recording */
let mediaRecorder = null;
let recStream = null;
let recChunks = [];
let recMimeType = '';
let recordedVideoBlob = null;
let recordedVideoURL = null;
let isRecording = false;

/* Charts */
let goalsChartInstance = null;

/* Wheel */
let formatSize = 1;
let spinResultData = null;

/* ================= SAVE / LOAD ================= */
function save(){
  try {
    const snap = { ...state, running:false };
    localStorage.setItem(LSK.state, JSON.stringify(snap));
  } catch(e) {}
}
function loadSaved(){
  try {
    const raw = localStorage.getItem(LSK.state);
    if(!raw) return null;
    const d = JSON.parse(raw);
    if(!d || !d.started) return null;
    return d;
  } catch(e) { return null; }
}
function getHistory(){
  try { return JSON.parse(localStorage.getItem(LSK.history) || '[]'); }
  catch(e) { return []; }
}
function saveHistory(h){ localStorage.setItem(LSK.history, JSON.stringify(h)); }
function addToHistory(match){
  const h = getHistory();
  h.unshift(match);
  if(h.length > 50) h.length = 50;
  saveHistory(h);
}

/* ================= LANGUAGE ================= */
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const set = (id, key) => { const el = document.getElementById(id); if(el) el.textContent = t(key); };

  set('termsTitle','termsTitle');
  set('termsSub','termsSub');
  set('termsAgreeText','termsAgreeText');
  set('termsContinueText','termsContinue');

  set('heroTitle','heroTitle');
  set('heroSub','heroSub');
  set('brandName','brandTitle') ;
  $('#brandName').textContent = SITE_NAME;

  set('lblTeamA','teamA');
  set('lblTeamB','teamB');
  set('lblTeamNameA','teamName');
  set('lblTeamNameB','teamName');
  set('lblPlayersA','players');
  set('lblPlayersB','players');

  set('lblDuration','matchDuration');
  set('lblDurationDesc','matchDurationDesc');
  set('lblMin','min');
  set('lblRecordVideo','recordVideo');
  set('lblRecordVideoDesc','recordVideoDesc');
  set('lblSaveRoster','saveRoster');
  set('lblSaveRosterDesc','saveRosterDesc');

  set('lblRandomTeams','randomTeams');
  set('lblStartMatch','startMatch');
  set('lblExport','exportData');
  set('lblImport','importData');

  set('lblRandomTitle','randomTitle');
  set('lblRandomHint','randomHint');
  set('lblFormat','format');
  set('lblAllPlayers','allPlayers');
  set('lblWheelEmpty','wheelEmpty');
  set('lblSpin','spin');
  set('lblSpinAgain','spinAgain');
  set('lblApply','applyTeams');
  set('lblCancel','cancel');
  set('lblResultA','teamA');
  set('lblResultB','teamB');

  set('goalBtnA','goalBtn');
  set('goalBtnB','goalBtn');
  set('lblMatchFeed','matchFeed');
  set('lblPhotos','celebrationPhotos');
  set('lblYellow','yellowCard');
  set('lblRed','redCard');

  set('lblPlayer','player');
  set('lblAssist','assist');
  set('lblGoalType','goalType');
  set('lblRegular','regularGoal');
  set('lblPenalty','penalty');
  set('lblFreeKick','freeKick');
  set('lblHeader','header');
  set('lblBicycle','bicycle');
  set('lblRegisterGoal','registerGoal');
  set('lblCancelGoal','cancel');

  set('lblCardPlayer','player');
  set('lblCancelCard','cancel');
  set('lblConfirm','confirm');

  set('lblSnap','snap');
  set('lblContinueMatch','continueMatch');

  set('lblFullTime','fullTime');
  set('lblMatchEnded','matchEnded');
  set('lblTopScorer','topScorer');
  set('lblTotalGoals','totalGoals');
  set('lblPhotosStat','photosCount');
  set('lblMatchTime','matchTime');
  set('lblMotm','motm');
  set('lblCharts','charts');
  set('lblAllGoals','allGoals');
  set('lblShareCard','shareCard');
  set('lblDownloadCard','downloadCard');
  set('lblShowQR','showQR');
  set('lblDownloadVideo','downloadVideo');
  set('lblCopySummary','copySummary');
  set('lblNewMatch','newMatch');

  set('lblHistoryTitle','historyTitle');
  set('lblLeaderboardTitle','leaderboardTitle');

  const g = document.getElementById('goalText'); if(g) g.textContent = t('goal');
  const cg = document.getElementById('celGoalText'); if(cg) cg.textContent = t('goal');

  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.textContent = lang === 'en' ? 'عربي' : 'English';

  renderTerms();
  if(state.started) renderAll();
}

/* ================= TERMS ================= */
function renderTerms(){
  const body = document.getElementById('termsBody');
  if(!body) return;
  if(lang === 'ar'){
    body.innerHTML = `
      <h3>إخلاء المسؤولية</h3>
      <p>هذا الموقع عبارة عن معرض شخصي للمشاريع البرمجية مفتوحة المصدر الخاصة بـ Taimdev9 وفريق TRL TEAM FOR DEVELOPMENT. يتم توفير جميع الأكواد والمشاريع "كما هي" دون أي ضمانات من أي نوع، صريحة أو ضمنية. أنا غير مسؤول عن أي استخدام غير قانوني أو ضار أو غير مصرح به لأي من الأكواد أو المشاريع المعروضة هنا. أي شخص يستخدم هذه المشاريع يتحمل المسؤولية الكاملة عن أفعاله وعواقبها.</p>
      <ul>
        <li>لا يُسمح بإساءة استخدام الموقع أو محاولة اختراقه أو تعطيله.</li>
        <li>جميع المشاريع مفتوحة المصدر تخضع لشروط الترخيص المذكورة في مستودع كل مشروع على حدة.</li>
        <li>الروابط الخارجية (مثل GitHub) لا نتحكم في محتواها ولا نتحمل مسؤوليتها.</li>
        <li>المحتوى مقدم لأغراض معلوماتية وتعليمية فقط.</li>
      </ul>
      <p>باستخدامك هذا الموقع، فإنك توافق على هذه الشروط. إذا كنت لا توافق، يرجى عدم استخدام الموقع.</p>
      <p style="font-size:11px;color:var(--fg3);margin-top:14px">رابط الشروط: <a href="https://taimdev9.github.io/Terms-of-Use-and-Conditions/" target="_blank" rel="noopener" style="color:var(--fg2)">اضغط هنا</a></p>
    `;
  } else {
    body.innerHTML = `
      <h3>Disclaimer</h3>
      <p>This website is a personal showcase of open-source software projects by Taimdev9 and TRL TEAM FOR DEVELOPMENT. All code and projects are provided "as is", without warranty of any kind, express or implied. I am not responsible for any illegal, harmful, or unauthorized use of any code or project displayed here. Any person who uses these projects assumes full responsibility for their actions and consequences.</p>
      <ul>
        <li>Abuse of this site, attempts to hack it, or disrupt it are strictly prohibited.</li>
        <li>All open-source projects are governed by the license terms stated in their respective repositories on GitHub.</li>
        <li>External links (e.g., GitHub) are not under our control, and we assume no responsibility for their content.</li>
        <li>Content is provided for informational and educational purposes only.</li>
      </ul>
      <p>By using this site, you agree to these terms. If you do not agree, please do not use the site.</p>
      <p style="font-size:11px;color:var(--fg3);margin-top:14px">Official Terms: <a href="https://taimdev9.github.io/Terms-of-Use-and-Conditions/" target="_blank" rel="noopener" style="color:var(--fg2)">click here</a></p>
    `;
  }
}

/* ================= THEME ================= */
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LSK.theme, theme);
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}

/* ================= SCREENS ================= */
function showScreen(id){
  ['setupScreen','matchScreen','statsScreen','historyScreen','leaderboardScreen']
    .forEach(s => { const el = document.getElementById(s); if(el) el.classList.add('hidden'); });
  const el = document.getElementById(id);
  if(el) el.classList.remove('hidden');
}
function showSetup(){ showScreen('setupScreen'); }
function showMatch(){ showScreen('matchScreen'); renderAll(); }
function showStats(){ showScreen('statsScreen'); renderStats(); }
function showHistory(){ showScreen('historyScreen'); renderHistory(); }
function showLeaderboard(){ showScreen('leaderboardScreen'); renderLeaderboard(); }

/* ================= START MATCH ================= */
async function startMatch(){
  const nameA = $('#nameA'), playersA = $('#playersA');
  const nameB = $('#nameB'), playersB = $('#playersB');
  const dur = Math.max(1, parseInt($('#matchDuration').value) || 10);

  state.teams[0] = { name: (nameA.value || 'Team A').trim(), score:0, players: parsePlayers(playersA.value) };
  state.teams[1] = { name: (nameB.value || 'Team B').trim(), score:0, players: parsePlayers(playersB.value) };

  state.totalDuration = dur * 60;
  state.clock = state.totalDuration;
  state.started = true;
  state.ended = false;
  state.events = [];
  state.period = 1;
  state.running = true;
  photos = [];

  if($('#saveRoster').checked){
    try{
      localStorage.setItem(LSK.roster, JSON.stringify({
        nameA: state.teams[0].name, playersA: state.teams[0].players,
        nameB: state.teams[1].name, playersB: state.teams[1].players
      }));
    }catch(e){}
  }

  if($('#recordVideo').checked){
    await startVideoRecording();
  }

  lastTick = performance.now();
  save();
  showMatch();
}

/* ================= TIMER ================= */
setInterval(() => {
  if(!state.started || state.ended) return;
  const now = performance.now();
  const dt = (now - lastTick) / 1000;
  lastTick = now;
  if(state.running){
    state.clock -= dt;
    if(state.clock <= 0){ state.clock = 0; endMatch(); }
    renderClock();
    updateFullscreen();
  }
}, 250);

function renderClock(){
  const r = Math.max(0, state.clock);
  const el = $('#clock');
  if(!el) return;
  el.textContent = fmtTime(r);
  el.classList.toggle('low', r < 60 && r > 0);
}

/* ================= RENDER ================= */
function renderAll(){
  $('#tname0').textContent = state.teams[0].name;
  $('#tname1').textContent = state.teams[1].name;
  $('#score0').textContent = state.teams[0].score;
  $('#score1').textContent = state.teams[1].score;
  const pk = state.period === 1 ? 'period1' : state.period === 2 ? 'period2' : 'periodET';
  $('#periodTag').textContent = t(pk);
  $('#playBtn').textContent = state.running ? '⏸' : '▶';
  $('#playBtn').classList.toggle('live', state.running);
  renderClock();
  renderTimeline();
  renderGallery();
}

function renderTimeline(){
  const el = $('#timeline');
  if(!el) return;
  const evs = [...state.events].reverse();
  if(!evs.length){
    el.innerHTML = `<div class="empty">${esc(t('noEvents'))}</div>`;
    return;
  }
  el.innerHTML = evs.map(e => {
    if(e.kind === 'marker'){
      return `<div class="ev ev-marker">⏸ ${esc(e.text)} — ${e.minute}'</div>`;
    }
    if(e.kind === 'card'){
      const cls = e.cardType === 'yellow' ? 'yellow' : 'red';
      const icon = e.cardType === 'yellow' ? '🟨' : '🟥';
      return `<div class="ev ${cls}">
        <span class="ev-min">${e.minute}'</span>
        <div class="ev-body">
          <div class="ev-player">${icon} ${esc(e.player)}</div>
          <div class="ev-sub">${esc(state.teams[e.team].name)}</div>
        </div>
        <button class="ev-del" data-del="${e.id}">✕</button>
      </div>`;
    }
    const team = state.teams[e.team];
    const typeTxt = t(e.type);
    const sub = [team.name, typeTxt, e.assist ? `${t('assist').split('(')[0].trim()}: ${e.assist}` : '']
      .filter(Boolean).join(' · ');
    return `<div class="ev ${e.team === 0 ? 'team-a' : 'team-b'}">
      <span class="ev-min">${e.minute}'</span>
      <div class="ev-body">
        <div class="ev-player">⚽ ${esc(e.player)}</div>
        <div class="ev-sub">${esc(sub)}</div>
      </div>
      <button class="ev-del" data-del="${e.id}">✕</button>
    </div>`;
  }).join('');
}

function renderGallery(){
  const g = $('#gallery');
  if(!g) return;
  const sc = $('#shotCount');
  if(sc) sc.textContent = photos.length ? photos.length + (lang==='en'?' shots':' صورة') : '';
  if(!photos.length){
    g.innerHTML = `<div class="empty" style="grid-column:1/-1">${esc(t('noPhotos'))}</div>`;
    return;
  }
  g.innerHTML = photos.map((src, i) => `
    <div class="shot">
      <img src="${src}" alt="celebration ${i+1}">
      <button data-dl="${i}">${esc(t('download'))}</button>
    </div>`).join('');
}

/* ================= GOAL MODAL ================= */
function openGoalModal(teamIdx){
  if(!state.running && !state.ended){
    state.running = true;
    lastTick = performance.now();
    renderAll();
  }
  pendingTeam = teamIdx;
  pendingType = 'regularGoal';
  const team = state.teams[teamIdx];

  $('#modalTitle').textContent = `${t('goalFor')} ${team.name}`;
  $('#modalHint').textContent = `⏱ ${Math.floor((state.totalDuration - state.clock)/60) + 1}'`;

  populateSelect($('#scorerSelect'), team.players, true);
  populateSelect($('#assistSelect'), team.players, false);
  $('#scorerCustom').classList.add('hidden');
  $('#assistCustom').classList.add('hidden');
  $('#scorerCustom').value = '';
  $('#assistCustom').value = '';

  $$('#typeChips .chip').forEach(c => c.classList.toggle('on', c.dataset.type === 'regularGoal'));
  $('#goalModal').classList.remove('hidden');
}

function populateSelect(sel, players, isScorer){
  if(!sel) return;
  sel.innerHTML = '';
  if(!players.length){
    sel.innerHTML = `<option value="__other__">${lang==='en'?'Type name…':'اكتب اسم…'}</option>`;
    return;
  }
  const ph = isScorer
    ? (lang==='en'?'— Choose player —':'— اختر لاعب —')
    : (lang==='en'?'— No assist —':'— بدون صناعة —');
  sel.innerHTML = `<option value="">${ph}</option>`;
  players.forEach(p => { sel.innerHTML += `<option value="${esc(p)}">${esc(p)}</option>`; });
  sel.innerHTML += `<option value="__other__">${lang==='en'?'Other…':'اسم آخر…'}</option>`;
}

function handleSelectChange(sel, custom){
  if(sel.value === '__other__'){
    custom.classList.remove('hidden');
    custom.focus();
  } else {
    custom.classList.add('hidden');
  }
}

function resolveName(sel, custom){
  if(sel.value === '__other__') return custom.value.trim();
  return sel.value;
}

function confirmGoal(){
  const team = state.teams[pendingTeam];
  let player = resolveName($('#scorerSelect'), $('#scorerCustom'));
  if(!player) player = t('unknownPlayer');
  const assist = resolveName($('#assistSelect'), $('#assistCustom'));
  const minute = Math.floor((state.totalDuration - state.clock)/60) + 1;

  const ev = {
    id: uid(), kind:'goal', team: pendingTeam,
    player, assist, type: pendingType,
    minute, clock: Math.round(state.totalDuration - state.clock),
    ts: Date.now()
  };
  state.events.push(ev);
  team.score++;
  $('#goalModal').classList.add('hidden');

  const sc = $('#score' + pendingTeam);
  sc.classList.remove('bump');
  void sc.offsetWidth;
  sc.classList.add('bump');

  renderAll();
  save();
  celebrateGoal(ev);
}

/* ================= CARD MODAL ================= */
function openCardModal(cardType){
  if(state.ended) return;
  pendingCardType = cardType;
  $('#cardModalTitle').textContent = cardType === 'yellow'
    ? `🟨 ${t('yellowCard')}`
    : `🟥 ${t('redCard')}`;
  $('#cardModalHint').textContent = `⏱ ${Math.floor((state.totalDuration - state.clock)/60) + 1}'`;

  const allPlayers = [];
  state.teams.forEach((team, ti) => {
    team.players.forEach(p => allPlayers.push({ name: p, team: ti }));
  });

  const sel = $('#cardPlayerSelect');
  sel.innerHTML = '';
  if(!allPlayers.length){
    sel.innerHTML = `<option value="__other__">${lang==='en'?'Type name…':'اكتب اسم…'}</option>`;
  } else {
    sel.innerHTML = `<option value="">${lang==='en'?'— Choose player —':'— اختر لاعب —'}</option>`;
    allPlayers.forEach((p, i) => {
      sel.innerHTML += `<option value="${i}">${esc(p.name)} (${esc(state.teams[p.team].name)})</option>`;
    });
    sel.innerHTML += `<option value="__other__">${lang==='en'?'Other…':'اسم آخر…'}</option>`;
  }
  sel.dataset.players = JSON.stringify(allPlayers);
  $('#cardPlayerCustom').classList.add('hidden');
  $('#cardPlayerCustom').value = '';
  $('#cardModal').classList.remove('hidden');
}

function confirmCard(){
  const sel = $('#cardPlayerSelect');
  let playerName = '';
  let teamIdx = 0;

  if(sel.value === '__other__'){
    playerName = $('#cardPlayerCustom').value.trim();
    if(!playerName) playerName = t('unknownPlayer');
    teamIdx = 0;
  } else if(sel.value === ''){
    return;
  } else {
    const allPlayers = JSON.parse(sel.dataset.players || '[]');
    const p = allPlayers[+sel.value];
    playerName = p.name;
    teamIdx = p.team;
  }

  const minute = Math.floor((state.totalDuration - state.clock)/60) + 1;
  state.events.push({
    id: uid(), kind:'card', team: teamIdx,
    player: playerName, cardType: pendingCardType,
    minute, ts: Date.now()
  });

  $('#cardModal').classList.add('hidden');
  renderAll();
  save();
}

/* ================= CELEBRATION ================= */
function celebrateGoal(ev){
  const team = state.teams[ev.team];
  $('#celName').textContent = ev.player;
  const meta = [
    team.name,
    `⏱ ${ev.minute}'`,
    ev.assist ? `${t('assist').split('(')[0].trim()}: ${ev.assist}` : ''
  ].filter(Boolean).join(' · ');
  $('#celMeta').textContent = meta;

  $('#liveCount').classList.add('hidden');
  $('#liveCount').textContent = '0 📸';

  $('#celebrate').classList.remove('hidden');

  goalSound();
  startConfetti();

  if(recStream && isRecording){
    $('#camWrap').classList.add('on');
    const v = $('#cam');
    v.srcObject = recStream;
    v.play().catch(()=>{});
  } else {
    startCamera();
  }
}

function closeCelebration(){
  $('#celebrate').classList.add('hidden');
  stopConfetti();
  if(!isRecording) stopCamera();
}

async function startCamera(){
  const wrap = $('#camWrap');
  if(!wrap) return;
  wrap.classList.remove('on');
  try {
    if(!navigator.mediaDevices?.getUserMedia) throw new Error('no camera');
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } },
      audio: false
    });
    const v = $('#cam');
    v.srcObject = camStream;
    await v.play().catch(()=>{});
    wrap.classList.add('on');
  } catch(e) {
    wrap.classList.remove('on');
  }
}

function stopCamera(){
  if(camStream){
    camStream.getTracks().forEach(t => t.stop());
    camStream = null;
  }
  const v = $('#cam');
  if(v) v.srcObject = null;
  const wrap = $('#camWrap');
  if(wrap) wrap.classList.remove('on');
}

function takePhoto(){
  const v = $('#cam');
  if(!v || !v.videoWidth) return;
  const maxW = 1280;
  const s = Math.min(1, maxW / v.videoWidth);
  const c = document.createElement('canvas');
  c.width = Math.round(v.videoWidth * s);
  c.height = Math.round(v.videoHeight * s);
  c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
  const url = c.toDataURL('image/jpeg', 0.88);

  photos.push(url);
  renderGallery();

  const a = document.createElement('a');
  a.href = url;
  a.download = `celebration-${Date.now()}.jpg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  const f = document.createElement('div');
  f.className = 'flash';
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 420);

  const lc = $('#liveCount');
  lc.classList.remove('hidden');
  lc.textContent = photos.length + ' 📸';

  shutterSound();
}

/* ================= VIDEO RECORDING ================= */
async function startVideoRecording(){
  try {
    if(!window.MediaRecorder){
      alert(lang === 'en' ? 'Video recording not supported.' : 'تسجيل الفيديو غير مدعوم.');
      return false;
    }
    if(!navigator.mediaDevices?.getUserMedia){
      alert(lang === 'en' ? 'Camera not available.' : 'الكاميرا غير متوفرة.');
      return false;
    }
    recStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: true
    });
    const candidates = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
      'video/mp4'
    ];
    recMimeType = candidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
    const options = recMimeType ? { mimeType: recMimeType } : {};
    mediaRecorder = new MediaRecorder(recStream, options);
    recChunks = [];
    mediaRecorder.ondataavailable = e => {
      if(e.data && e.data.size > 0) recChunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      try {
        recordedVideoBlob = new Blob(recChunks, { type: recMimeType.split(';')[0] || 'video/webm' });
        recordedVideoURL = URL.createObjectURL(recordedVideoBlob);
      } catch(e) { console.warn('Blob error:', e); }
      if(recStream){
        recStream.getTracks().forEach(t => t.stop());
        recStream = null;
      }
      isRecording = false;
      $('#recPreview').classList.add('hidden');
    };
    mediaRecorder.start(2000);
    isRecording = true;

    const prev = $('#recPreview');
    const rv = $('#recVideo');
    rv.srcObject = recStream;
    rv.play().catch(()=>{});
    prev.classList.remove('hidden');
    return true;
  } catch(e) {
    console.error('Rec error:', e);
    alert(lang === 'en' ? 'Could not start recording.' : 'تعذّر بدء التسجيل.');
    return false;
  }
}

function stopVideoRecording(){
  if(mediaRecorder && mediaRecorder.state !== 'inactive'){
    try { mediaRecorder.stop(); } catch(e) {}
  }
}

/* ================= END + STATS ================= */
function endMatch(){
  if(state.ended) return;
  state.ended = true;
  state.running = false;
  state.clock = Math.max(0, state.clock);
  if(isRecording) stopVideoRecording();

  const a = state.teams[0], b = state.teams[1];
  const goals = state.events.filter(e => e.kind === 'goal');
  addToHistory({
    id: uid(),
    date: new Date().toISOString(),
    teams: [{ name: a.name, score: a.score }, { name: b.name, score: b.score }],
    goals: goals.map(g => ({
      player: g.player, assist: g.assist || '', minute: g.minute,
      type: g.type, team: g.team
    })),
    totalTime: state.totalDuration - state.clock
  });

  save();
  showStats();
}

function renderStats(){
  const a = state.teams[0], b = state.teams[1];
  $('#statsTeamA').textContent = a.name;
  $('#statsTeamB').textContent = b.name;
  $('#statsScoreA').textContent = a.score;
  $('#statsScoreB').textContent = b.score;
  $('#statTotalGoals').textContent = a.score + b.score;
  $('#statPhotos').textContent = photos.length;
  $('#statMatchTime').textContent = fmtTime(state.totalDuration - state.clock);

  const goals = state.events.filter(e => e.kind === 'goal');
  const tally = {};
  goals.forEach(g => { tally[g.player] = (tally[g.player] || 0) + 1; });
  const top = Object.entries(tally).sort((x, y) => y[1] - x[1])[0];
  $('#statTopScorer').textContent = top ? `${top[0]} (${top[1]})` : '—';

  const motmSel = $('#motmSelect');
  if(motmSel){
    motmSel.innerHTML = `<option value="">${t('motmPlaceholder')}</option>`;
    const allPlayers = [...new Set([...a.players, ...b.players])];
    allPlayers.forEach(p => {
      motmSel.innerHTML += `<option value="${esc(p)}">${esc(p)}</option>`;
    });
  }

  const sg = $('#statsGoals');
  if(!goals.length){
    sg.innerHTML = `<div class="empty">${esc(t('noEvents'))}</div>`;
  } else {
    sg.innerHTML = goals.map(e => {
      const team = state.teams[e.team];
      const typeTxt = t(e.type);
      const sub = [team.name, typeTxt, e.assist ? `${t('assist').split('(')[0].trim()}: ${e.assist}` : '']
        .filter(Boolean).join(' · ');
      return `<div class="ev ${e.team === 0 ? 'team-a' : 'team-b'}">
        <span class="ev-min">${e.minute}'</span>
        <div class="ev-body">
          <div class="ev-player">⚽ ${esc(e.player)}</div>
          <div class="ev-sub">${esc(sub)}</div>
        </div>
      </div>`;
    }).join('');
  }

  renderGoalsChart(goals);
  renderShareCard();

  $('#downloadVideoBtn').classList.toggle('hidden', !recordedVideoURL);
}

function renderGoalsChart(goals){
  const cvs = document.getElementById('goalsChart');
  if(!cvs || !window.Chart) return;
  if(goalsChartInstance) goalsChartInstance.destroy();

  const a = state.teams[0], b = state.teams[1];
  const aGoals = goals.filter(g => g.team === 0).length;
  const bGoals = goals.filter(g => g.team === 1).length;

  goalsChartInstance = new Chart(cvs, {
    type: 'doughnut',
    data: {
      labels: [a.name, b.name],
      datasets: [{
        data: [aGoals, bGoals],
        backgroundColor: ['#ffffff', '#737373'],
        borderColor: ['#333', '#333'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#a3a3a3', font: { size: 12 } }
        }
      }
    }
  });
}

function renderShareCard(){
  const canvas = document.getElementById('shareCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 600, H = 800;
  canvas.width = W; canvas.height = H;

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#0a0a0a');
  grad.addColorStop(1, '#181818');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#262626';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, W-40, H-40);

  ctx.fillStyle = '#737373';
  ctx.font = '600 16px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(SITE_NAME.toUpperCase(), W/2, 80);

  const a = state.teams[0], b = state.teams[1];
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 80px Inter, sans-serif';
  ctx.fillText(`${a.score} - ${b.score}`, W/2, 220);

  ctx.fillStyle = '#a3a3a3';
  ctx.font = '700 18px Inter, sans-serif';
  ctx.fillText(a.name, W/2 - 120, 270);
  ctx.fillText(b.name, W/2 + 120, 270);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#737373';
  ctx.font = '700 14px Inter, sans-serif';
  ctx.fillText(lang === 'en' ? 'GOALS' : 'الأهداف', 50, 340);

  const goals = state.events.filter(e => e.kind === 'goal');
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 16px Inter, sans-serif';
  let y = 380;
  goals.slice(0, 8).forEach(g => {
    const teamName = state.teams[g.team].name;
    ctx.fillText(`${g.minute}'  ${g.player} (${teamName})`, 50, y);
    y += 30;
  });
  if(goals.length > 8){
    ctx.fillStyle = '#737373';
    ctx.fillText(`+${goals.length - 8}...`, 50, y);
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#525252';
  ctx.font = '500 12px Inter, sans-serif';
  ctx.fillText('© 2025 Taimdev9 — TRL TEAM FOR DEVELOPMENT', W/2, H-40);
}

function downloadShareCard(){
  const canvas = document.getElementById('shareCanvas');
  if(!canvas) return;
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = `match-card-${Date.now()}.png`;
  a.click();
}

function showQR(){
  const container = document.getElementById('qrContainer');
  if(!container) return;
  if(container.classList.contains('hidden') || !container.innerHTML){
    container.classList.remove('hidden');
    container.innerHTML = '';
    if(typeof QRCode === 'undefined'){
      container.textContent = 'QR library not loaded.';
      return;
    }
    new QRCode(container, {
      text: window.location.href,
      width: 160, height: 160,
      colorDark: '#ffffff', colorLight: '#0a0a0a'
    });
  } else {
    container.classList.add('hidden');
  }
}

function downloadVideo(){
  if(!recordedVideoURL) return;
  const ext = (recordedVideoBlob?.type || '').includes('mp4') ? 'mp4' : 'webm';
  const a = document.createElement('a');
  a.href = recordedVideoURL;
  a.download = `match-${Date.now()}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function copySummary(){
  const a = state.teams[0], b = state.teams[1];
  let txt = `⚽ ${a.name} ${a.score} - ${b.score} ${b.name}\n\n`;
  const goals = state.events.filter(e => e.kind === 'goal');
  if(goals.length){
    txt += goals.map(e => {
      const team = state.teams[e.team];
      const parts = [`${e.minute}'`, `${team.name}: ${e.player}`];
      if(e.assist) parts.push(`${t('assist').split('(')[0].trim()} ${e.assist}`);
      if(e.type !== 'regularGoal') parts.push(t(e.type));
      return parts.join(' — ');
    }).join('\n');
  } else {
    txt += t('noEvents');
  }
  try {
    await navigator.clipboard.writeText(txt);
    const btn = document.querySelector('#downloadSummaryBtn span');
    if(btn){
      const orig = btn.textContent;
      btn.textContent = t('copied');
      setTimeout(() => btn.textContent = orig, 1600);
    }
  } catch(e) {
    prompt('Copy:', txt);
  }
}

/* ================= FULLSCREEN BOARD ================= */
function openFullscreen(){
  const fb = $('#fullscreenBoard');
  if(!fb) return;
  fb.classList.remove('hidden');
  updateFullscreen();
}
function closeFullscreen(){
  const fb = $('#fullscreenBoard');
  if(fb) fb.classList.add('hidden');
}
function updateFullscreen(){
  const fb = $('#fullscreenBoard');
  if(!fb || fb.classList.contains('hidden')) return;
  const a = state.teams[0], b = state.teams[1];
  $('#fsName0').textContent = a.name;
  $('#fsName1').textContent = b.name;
  $('#fsScore0').textContent = a.score;
  $('#fsScore1').textContent = b.score;
  $('#fsClock').textContent = fmtTime(state.clock);
  const pk = state.period === 1 ? 'period1' : state.period === 2 ? 'period2' : 'periodET';
  $('#fsPeriod').textContent = t(pk);
}

/* ================= HISTORY ================= */
function renderHistory(){
  const list = $('#historyList');
  if(!list) return;
  const h = getHistory();
  if(!h.length){
    list.innerHTML = `<div class="empty">${esc(t('noHistory'))}</div>`;
    return;
  }
  list.innerHTML = h.map(m => {
    const date = new Date(m.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB');
    const a = m.teams[0], b = m.teams[1];
    return `<div class="hist-item">
      <div class="hist-head">
        <div class="hist-score">${a.score} - ${b.score}</div>
        <div class="hist-date">${date}</div>
      </div>
      <div class="hist-teams">${esc(a.name)} vs ${esc(b.name)}</div>
      <div class="hist-teams">⚽ ${m.goals.length} ${lang==='en'?'goals':'هدف'} · ⏱ ${fmtTime(m.totalTime)}</div>
    </div>`;
  }).join('');
}

/* ================= LEADERBOARD ================= */
function renderLeaderboard(){
  const list = $('#leaderboardList');
  if(!list) return;
  const h = getHistory();
  const tally = {};
  h.forEach(m => {
    m.goals.forEach(g => {
      if(!tally[g.player]) tally[g.player] = { goals: 0, assists: 0 };
      tally[g.player].goals++;
      if(g.assist){
        if(!tally[g.assist]) tally[g.assist] = { goals: 0, assists: 0 };
        tally[g.assist].assists++;
      }
    });
  });
  const sorted = Object.entries(tally).sort((x, y) =>
    y[1].goals - x[1].goals || y[1].assists - x[1].assists
  );
  if(!sorted.length){
    list.innerHTML = `<div class="empty">${esc(t('noLeaderboard'))}</div>`;
    return;
  }
  list.innerHTML = sorted.map(([name, stats], i) => {
    const rank = i + 1;
    const cls = rank === 1 ? 'top1' : rank === 2 ? 'top2' : rank === 3 ? 'top3' : '';
    return `<div class="lb-item">
      <div class="lb-rank ${cls}">${rank}</div>
      <div class="lb-body">
        <div class="lb-name">${esc(name)}</div>
        <div class="lb-stats">⚽ ${stats.goals} · 🅰️ ${stats.assists}</div>
      </div>
    </div>`;
  }).join('');
}

/* ================= CONFETTI ================= */
const confCanvas = document.getElementById('confetti');
const confCtx = confCanvas ? confCanvas.getContext('2d') : null;
let particles = [], confRAF = null;

function resizeConf(){
  if(!confCanvas) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  confCanvas.width = innerWidth * dpr;
  confCanvas.height = innerHeight * dpr;
  confCanvas.style.width = innerWidth + 'px';
  confCanvas.style.height = innerHeight + 'px';
  confCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function startConfetti(){
  if(!confCtx) return;
  resizeConf();
  const palette = ['#ffffff','#e5e5e5','#a3a3a3','#737373','#404040','#f5f5f5'];
  particles = [];
  for(let i = 0; i < 100; i++){
    particles.push({
      x: Math.random() * innerWidth,
      y: -Math.random() * innerHeight * 0.6,
      vx: (Math.random() - 0.5) * 2.4,
      vy: 1.8 + Math.random() * 3.6,
      w: 5 + Math.random() * 7,
      h: 8 + Math.random() * 10,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.25,
      color: palette[(Math.random() * palette.length) | 0],
      shape: Math.random() < 0.25 ? 'circle' : 'rect'
    });
  }
  if(confRAF) cancelAnimationFrame(confRAF);
  loopConfetti();
}
function loopConfetti(){
  if(!confCtx) return;
  if(document.hidden){ confRAF = requestAnimationFrame(loopConfetti); return; }
  confCtx.clearRect(0, 0, innerWidth, innerHeight);
  let alive = 0;
  for(const p of particles){
    p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.vx *= 0.995; p.rot += p.vr;
    if(p.y < innerHeight + 40) alive++;
    confCtx.save();
    confCtx.translate(p.x, p.y);
    confCtx.rotate(p.rot);
    confCtx.fillStyle = p.color;
    confCtx.globalAlpha = 0.92;
    if(p.shape === 'circle'){
      confCtx.beginPath();
      confCtx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
      confCtx.fill();
    } else {
      confCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    confCtx.restore();
  }
  if(alive > 0) confRAF = requestAnimationFrame(loopConfetti);
  else { confCtx.clearRect(0, 0, innerWidth, innerHeight); confRAF = null; }
}
function stopConfetti(){
  if(confRAF) cancelAnimationFrame(confRAF);
  confRAF = null;
  particles = [];
  if(confCtx) confCtx.clearRect(0, 0, innerWidth, innerHeight);
}

/* ================= SOUND ================= */
let actx = null;
function ctx(){
  if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  if(actx.state === 'suspended') actx.resume();
  return actx;
}
function goalSound(){
  if(!soundOn) return;
  try {
    const ac = ctx(), t0 = ac.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(f, t0 + i * 0.07);
      g.gain.setValueAtTime(0.0001, t0 + i * 0.07);
      g.gain.exponentialRampToValueAtTime(0.16, t0 + i * 0.07 + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.07 + 1.3);
      o.connect(g).connect(ac.destination);
      o.start(t0 + i * 0.07);
      o.stop(t0 + i * 0.07 + 1.4);
    });
  } catch(e) {}
}
function shutterSound(){
  if(!soundOn) return;
  try {
    const ac = ctx(), t0 = ac.currentTime;
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(1400, t0);
    g.gain.setValueAtTime(0.09, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.07);
    o.connect(g).connect(ac.destination);
    o.start(t0);
    o.stop(t0 + 0.08);
  } catch(e) {}
}

/* ================= WHEEL ================= */
function openRandomModal(){
  $('#randomModal').classList.remove('hidden');
  $('#spinResult').classList.remove('show');
  $('#applyRow').classList.add('hidden');
  $('#spinBtn').style.display = '';
  const w = $('#wheel');
  w.style.transform = '';
  spinResultData = null;
  renderWheel();
}
function closeRandomModal(){
  $('#randomModal').classList.add('hidden');
}
function renderWheel(){
  const names = parsePlayers($('#allPlayers').value);
  const wheel = $('#wheel');
  if(!names.length){
    wheel.innerHTML = `<div class="wheel-empty">${esc(t('wheelEmpty'))}</div>`;
    return;
  }
  const n = names.length;
  const radius = 95;
  wheel.innerHTML = names.map((name, i) => {
    const angle = (360 / n) * i - 90;
    const d = name.length > 10 ? name.slice(0, 9) + '…' : name;
    return `<div class="wheel-name" style="transform:translate(-50%,-50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)">${esc(d)}</div>`;
  }).join('');
}
function shuffle(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function spinWheel(){
  const names = parsePlayers($('#allPlayers').value);
  const needed = formatSize * 2;
  if(names.length < needed){
    alert(t('needMorePlayers') + ` (${names.length}/${needed})`);
    return;
  }
  const pool = names.slice(0, needed);
  const shuffled = shuffle(pool);
  const teamA = shuffled.slice(0, formatSize);
  const teamB = shuffled.slice(formatSize);
  spinResultData = { teamA, teamB };

  $('#spinResult').classList.remove('show');
  $('#applyRow').classList.add('hidden');
  const wheel = $('#wheel');
  wheel.style.transform = `rotate(${360 * 4 + Math.random() * 360}deg)`;

  setTimeout(() => {
    $('#resultA').innerHTML = spinResultData.teamA.map(n => `<div class="name">${esc(n)}</div>`).join('');
    $('#resultB').innerHTML = spinResultData.teamB.map(n => `<div class="name">${esc(n)}</div>`).join('');
    $('#spinResult').classList.add('show');
    $('#spinBtn').style.display = 'none';
    $('#applyRow').classList.remove('hidden');
  }, 2900);
}
function applyRandomTeams(){
  if(!spinResultData) return;
  $('#playersA').value = spinResultData.teamA.join(', ');
  $('#playersB').value = spinResultData.teamB.join(', ');
  closeRandomModal();
}

/* ================= EXPORT / IMPORT ================= */
function exportData(){
  const data = {
    site: SITE_NAME,
    exportedAt: new Date().toISOString(),
    roster: JSON.parse(localStorage.getItem(LSK.roster) || '{}'),
    history: getHistory(),
    settings: { theme: localStorage.getItem(LSK.theme) || 'dark', lang }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `pitchpulse-backup-${Date.now()}.json`;
  a.click();
  alert(t('exportSuccess'));
}
function importData(file){
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if(data.roster) localStorage.setItem(LSK.roster, JSON.stringify(data.roster));
      if(data.history) saveHistory(data.history);
      if(data.settings){
        if(data.settings.theme) applyTheme(data.settings.theme);
        if(data.settings.lang){
          lang = data.settings.lang;
          localStorage.setItem(LSK.lang, lang);
          applyLang();
        }
      }
      alert(t('importSuccess'));
      loadRosterToSetup();
    } catch(err) {
      alert(t('importError'));
    }
  };
  reader.readAsText(file);
}
function loadRosterToSetup(){
  try {
    const r = JSON.parse(localStorage.getItem(LSK.roster) || 'null');
    if(!r) return;
    if(r.nameA) $('#nameA').value = r.nameA;
    if(r.playersA) $('#playersA').value = r.playersA.join(', ');
    if(r.nameB) $('#nameB').value = r.nameB;
    if(r.playersB) $('#playersB').value = r.playersB.join(', ');
  } catch(e) {}
}

/* ================= EVENT LISTENERS ================= */
function setupListeners(){
  // Terms
  const agree = $('#termsAgree');
  const cont = $('#termsContinue');
  if(agree && cont){
    agree.addEventListener('change', () => { cont.disabled = !agree.checked; });
    cont.addEventListener('click', () => {
      $('#termsScreen').classList.add('hidden');
      const loader = $('#loader');
      if(!loader) { $('#app').classList.add('ready'); return; }

      if(sessionStorage.getItem('pp_loader_seen')){
        loader.remove();
        $('#app').classList.add('ready');
      } else {
        loader.classList.remove('hidden');
        sessionStorage.setItem('pp_loader_seen', '1');
        setTimeout(() => {
          const btn = $('#loaderContinue');
          if(btn) btn.classList.add('show');
        }, 9500);
      }
    });
  }

  // Loader continue
  const lc = $('#loaderContinue');
  if(lc){
    lc.addEventListener('click', () => {
      const loader = $('#loader');
      const app = $('#app');
      if(loader){
        loader.classList.add('hide');
        setTimeout(() => {
          if(loader.parentNode) loader.parentNode.removeChild(loader);
          if(app) app.classList.add('ready');
        }, 500);
      } else if(app) {
        app.classList.add('ready');
      }
    });
  }

  // Language
  const lb = $('#langBtn');
  if(lb) lb.addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem(LSK.lang, lang);
    applyLang();
  });

  // Theme
  const tb = $('#themeBtn');
  if(tb) tb.addEventListener('click', toggleTheme);

  // Start
  $('#startBtn').addEventListener('click', startMatch);

  // Play / Pause
  $('#playBtn').addEventListener('click', () => {
    state.running = !state.running;
    lastTick = performance.now();
    renderAll();
    save();
  });

  // Half time
  $('#halfBtn').addEventListener('click', () => {
    state.running = false;
    state.events.push({
      id: 'm' + Date.now(), kind: 'marker',
      text: state.period === 1
        ? (lang === 'en' ? 'End of first half' : 'نهاية الشوط الأول')
        : (lang === 'en' ? 'End of second half' : 'نهاية الشوط الثاني'),
      minute: Math.floor((state.totalDuration - state.clock) / 60) + 1
    });
    state.period = Math.min(3, state.period + 1);
    lastTick = performance.now();
    renderAll();
    save();
  });

  // End
  $('#endBtn').addEventListener('click', () => {
    if(confirm(t('endMatchConfirm'))) endMatch();
  });

  // Fullscreen
  $('#fullscreenBtn').addEventListener('click', openFullscreen);
  $('#fsClose').addEventListener('click', closeFullscreen);

  // Sound
  $('#soundBtn').addEventListener('click', () => {
    soundOn = !soundOn;
    $('#soundBtn').textContent = soundOn ? '🔊' : '🔇';
  });

  // Goal buttons
  $$('[data-goal]').forEach(b => b.addEventListener('click', () => openGoalModal(+b.dataset.goal)));

  // Goal modal
  $('#cancelGoal').addEventListener('click', () => $('#goalModal').classList.add('hidden'));
  $('#confirmGoal').addEventListener('click', confirmGoal);
  $('#scorerSelect').addEventListener('change', () => handleSelectChange($('#scorerSelect'), $('#scorerCustom')));
  $('#assistSelect').addEventListener('change', () => handleSelectChange($('#assistSelect'), $('#assistCustom')));

  // Type chips
  $$('#typeChips .chip').forEach(c => c.addEventListener('click', () => {
    pendingType = c.dataset.type;
    $$('#typeChips .chip').forEach(x => x.classList.toggle('on', x === c));
  }));

  // Cards
  $('#yellowCardBtn').addEventListener('click', () => openCardModal('yellow'));
  $('#redCardBtn').addEventListener('click', () => openCardModal('red'));
  $('#cancelCard').addEventListener('click', () => $('#cardModal').classList.add('hidden'));
  $('#confirmCard').addEventListener('click', confirmCard);
  $('#cardPlayerSelect').addEventListener('change', () => {
    const s = $('#cardPlayerSelect');
    const c = $('#cardPlayerCustom');
    if(s.value === '__other__'){ c.classList.remove('hidden'); c.focus(); }
    else c.classList.add('hidden');
  });

  // Delete event
  $('#timeline').addEventListener('click', e => {
    const b = e.target.closest('[data-del]');
    if(!b) return;
    const id = b.dataset.del;
    const idx = state.events.findIndex(x => x.id === id);
    if(idx === -1) return;
    if(!confirm(t('deleteEvent'))) return;
    const ev = state.events[idx];
    if(ev.kind === 'goal'){
      state.teams[ev.team].score = Math.max(0, state.teams[ev.team].score - 1);
    }
    state.events.splice(idx, 1);
    renderAll();
    save();
  });

  // Gallery download
  $('#gallery').addEventListener('click', e => {
    const b = e.target.closest('[data-dl]');
    if(!b) return;
    const i = +b.dataset.dl;
    const a = document.createElement('a');
    a.href = photos[i];
    a.download = `celebration-${Date.now()}.jpg`;
    a.click();
  });

  // Celebration
  $('#celClose').addEventListener('click', closeCelebration);
  $('#snapBtn').addEventListener('click', takePhoto);

  // Random
  $('#randomBtn').addEventListener('click', openRandomModal);
  $('#cancelRandom').addEventListener('click', closeRandomModal);
  $('#spinBtn').addEventListener('click', spinWheel);
  $('#spinAgainBtn').addEventListener('click', () => {
    $('#spinBtn').style.display = '';
    $('#applyRow').classList.add('hidden');
    $('#spinResult').classList.remove('show');
    spinWheel();
  });
  $('#applyBtn').addEventListener('click', applyRandomTeams);
  $('#allPlayers').addEventListener('input', renderWheel);
  $$('#formatChips .chip').forEach(c => c.addEventListener('click', () => {
    formatSize = +c.dataset.fmt;
    $$('#formatChips .chip').forEach(x => x.classList.toggle('on', x === c));
  }));

  // Stats
  $('#downloadVideoBtn').addEventListener('click', downloadVideo);
  $('#downloadSummaryBtn').addEventListener('click', copySummary);
  $('#downloadShareBtn').addEventListener('click', downloadShareCard);
  $('#qrBtn').addEventListener('click', showQR);
  $('#statsNewMatchBtn').addEventListener('click', () => {
    if(!confirm(t('newMatchConfirm'))) return;
    localStorage.removeItem(LSK.state);
    state.started = false;
    state.ended = false;
    state.events = [];
    state.clock = 0;
    state.period = 1;
    state.running = false;
    state.teams.forEach(t => t.score = 0);
    photos = [];
    recordedVideoBlob = null;
    recordedVideoURL = null;
    showSetup();
  });

  // History / Leaderboard
  $('#historyBtn').addEventListener('click', showHistory);
  $('#leaderboardBtn').addEventListener('click', showLeaderboard);
  $('#historyClose').addEventListener('click', showSetup);
  $('#leaderboardClose').addEventListener('click', showSetup);

  // Export / Import
  $('#exportBtn').addEventListener('click', exportData);
  $('#importBtn').addEventListener('click', () => $('#importFile').click());
  $('#importFile').addEventListener('change', e => {
    const f = e.target.files[0];
    if(f) importData(f);
    e.target.value = '';
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if(e.target.matches('input, textarea, select')) return;
    if(e.code === 'Space' && state.started && !state.ended){
      e.preventDefault();
      const m = document.getElementById('matchScreen');
      if(m && !m.classList.contains('hidden')) $('#playBtn').click();
    }
    if(e.key === 'Escape'){
      $('#goalModal').classList.add('hidden');
      $('#cardModal').classList.add('hidden');
      $('#randomModal').classList.add('hidden');
      if(!$('#celebrate').classList.contains('hidden')) closeCelebration();
      if(!$('#fullscreenBoard').classList.contains('hidden')) closeFullscreen();
    }
  });

  window.addEventListener('resize', () => {
    if(!$('#celebrate').classList.contains('hidden')) resizeConf();
  });
}

/* ================= BOOT ================= */
(function init(){
  try {
    // Theme
    const savedTheme = localStorage.getItem(LSK.theme);
    if(savedTheme) applyTheme(savedTheme);

    // Loader skip if seen
    if(sessionStorage.getItem('pp_loader_seen')){
      const loader = document.getElementById('loader');
      if(loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }

    applyLang();
    setupListeners();
    renderGallery();
    renderWheel();
    loadRosterToSetup();
  } catch(e) {
    console.error('Init error:', e);
    const loader = document.getElementById('loader');
    const app = document.getElementById('app');
    if(loader && loader.parentNode) loader.parentNode.removeChild(loader);
    if(app) app.classList.add('ready');
  }
})();
