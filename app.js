const $ = (selector) => document.querySelector(selector);

const viewport = $('#viewport');
const coverScene = $('#coverScene');
const deskScene = $('#deskScene');
const endScene = $('#endScene');
const startButton = $('#startButton');
const returnButton = $('#returnButton');
const soundButton = $('#soundButton');
const subtitleBox = $('#subtitleBox');
const speaker = $('#speaker');
const subtitle = $('#subtitle');
const blackout = $('#blackout');
const stamp = $('#stamp');
const formCanvas = $('#formCanvas');
const paperTarget = $('#paperTarget');
const sealResult = $('#sealResult');
const wrongSeal = $('#wrongSeal');
const candidateStage = $('#candidateStage');
const candidateCounter = $('#candidateCounter');
const candidatePortrait = $('#candidatePortrait');
const candidateNumber = $('#candidateNumber');
const classifiedMark = $('#classifiedMark');
const candidateAlias = $('#candidateAlias');
const candidateReal = $('#candidateReal');
const candidateRoute = $('#candidateRoute');
const candidateSkillName = $('#candidateSkillName');
const candidateSkillText = $('#candidateSkillText');
const candidateWeakness = $('#candidateWeakness');
const candidateAlly = $('#candidateAlly');
const candidateAllyText = $('#candidateAllyText');
const candidateReel = $('#candidateReel');
const prevCandidate = $('#prevCandidate');
const nextCandidate = $('#nextCandidate');
const candidateChoice = $('#candidateChoice');
const candidateMotto = $('#candidateMotto');
const confirmCandidate = $('#confirmCandidate');
const matchScene = $('#matchScene');
const loadingScene = $('#loadingScene');
const matchPlayerPortrait = $('#matchPlayerPortrait');
const matchPlayerAlias = $('#matchPlayerAlias');
const difficultyButtons = $('#difficultyButtons');
const drawScreen = $('#drawScreen');
const drawPortrait = $('#drawPortrait');
const drawAlias = $('#drawAlias');
const drawMessage = $('#drawMessage');
const drawLever = $('#drawLever');
const opponentFile = $('#opponentFile');
const matchOpponentPortrait = $('#matchOpponentPortrait');
const matchOpponentAlias = $('#matchOpponentAlias');
const opponentWarning = $('#opponentWarning');
const backToCandidates = $('#backToCandidates');
const appealButton = $('#appealButton');
const acceptMatch = $('#acceptMatch');
const loadingPlayerPortrait = $('#loadingPlayerPortrait');
const loadingPlayerAlias = $('#loadingPlayerAlias');
const loadingOpponentPortrait = $('#loadingOpponentPortrait');
const loadingOpponentAlias = $('#loadingOpponentAlias');
const loadingChecklist = $('#loadingChecklist');
const tuningTrack = $('#tuningTrack');
const tuningKnob = $('#tuningKnob');
const signalSnow = $('#signalSnow');
const signalLabel = $('#signalLabel');
const signalScreen = $('#signalScreen');
const playerIntelButton = $('#playerIntelButton');
const opponentIntelButton = $('#opponentIntelButton');
const loadingHint = $('#loadingHint');
const connectLive = $('#connectLive');
const onAirLamp = $('#onAirLamp');
const broadcastReady = $('#broadcastReady');
const battleScene = $('#battleScene');
const tallyScene = $('#tallyScene');
const endingScene = $('#endingScene');
const roundLabel = $('#roundLabel');
const segmentLabel = $('#segmentLabel');
const topicLabel = $('#topicLabel');
const playerSupportText = $('#playerSupportText');
const opponentSupportText = $('#opponentSupportText');
const playerSupportFill = $('#playerSupportFill');
const battlePlayerPortrait = $('#battlePlayerPortrait');
const battlePlayerAlias = $('#battlePlayerAlias');
const battleOpponentPortrait = $('#battleOpponentPortrait');
const battleOpponentAlias = $('#battleOpponentAlias');
const playerActor = $('#playerActor');
const opponentActor = $('#opponentActor');
const playerFloat = $('#playerFloat');
const opponentFloat = $('#opponentFloat');
const playerRisk = $('#playerRisk');
const opponentRisk = $('#opponentRisk');
const hostLine = $('#hostLine');
const playerPlayedCard = $('#playerPlayedCard');
const opponentPlayedCard = $('#opponentPlayedCard');
const regionMonitor = $('#regionMonitor');
const hand = $('#hand');
const intentHint = $('#intentHint');
const momentumText = $('#momentumText');
const tacticPreview = $('#tacticPreview');
const endTurnButton = $('#endTurnButton');
const reactionOverlay = $('#reactionOverlay');
const reactionTitle = $('#reactionTitle');
const reactionText = $('#reactionText');
const reactionCards = $('#reactionCards');
const takeHitButton = $('#takeHitButton');
const strategyButtons = $('#strategyButtons');
const draftOverlay = $('#draftOverlay');
const draftTitle = $('#draftTitle');
const draftCards = $('#draftCards');
const skillButton = $('#skillButton');
const skillButtonName = $('#skillButtonName');
const passiveText = $('#passiveText');
const allyButton = $('#allyButton');
const allyButtonName = $('#allyButtonName');
const tutorialChoice = $('#tutorialChoice');
const startTutorial = $('#startTutorial');
const skipTutorial = $('#skipTutorial');
const tutorialGuide = $('#tutorialGuide');
const tutorialTitle = $('#tutorialTitle');
const tutorialText = $('#tutorialText');
const crisisOverlay = $('#crisisOverlay');
const crisisTitle = $('#crisisTitle');
const crisisText = $('#crisisText');
const crisisApologize = $('#crisisApologize');
const crisisDeny = $('#crisisDeny');
const crisisDistract = $('#crisisDistract');
const roundResolution = $('#roundResolution');
const resolutionStamp = $('#resolutionStamp');
const resolutionDelta = $('#resolutionDelta');
const resolutionRound = $('#resolutionRound');
const resolutionTitle = $('#resolutionTitle');
const resolutionDetail = $('#resolutionDetail');
const resolutionRegion = $('#resolutionRegion');
const nextRoundButton = $('#nextRoundButton');
const tallyCount = $('#tallyCount');
const tallyPlayerPortrait = $('#tallyPlayerPortrait');
const tallyPlayerAlias = $('#tallyPlayerAlias');
const tallyPlayerScore = $('#tallyPlayerScore');
const tallyOpponentPortrait = $('#tallyOpponentPortrait');
const tallyOpponentAlias = $('#tallyOpponentAlias');
const tallyOpponentScore = $('#tallyOpponentScore');
const tallyHostLine = $('#tallyHostLine');
const regionEnvelopes = $('#regionEnvelopes');
const finalResultButton = $('#finalResultButton');
const endingHeader = $('#endingHeader');
const endingScore = $('#endingScore');
const victoryEnding = $('#victoryEnding');
const defeatEnding = $('#defeatEnding');
const endingWinnerPortrait = $('#endingWinnerPortrait');
const endingWinnerAlias = $('#endingWinnerAlias');
const speechOutput = $('#speechOutput');
const speechChoices = $('#speechChoices');
const victoryFader = $('#victoryFader');
const printNewspaper = $('#printNewspaper');
const endingLoserPortrait = $('#endingLoserPortrait');
const endingLoserAlias = $('#endingLoserAlias');
const newspaper = $('#newspaper');
const newspaperHeadline = $('#newspaperHeadline');
const newspaperBody = $('#newspaperBody');
const newspaperKicker = $('#newspaperKicker');
const newspaperVerdict = $('#newspaperVerdict');
const newspaperPortrait = $('#newspaperPortrait');
const newspaperCaption = $('#newspaperCaption');
const rematchButton = $('#rematchButton');
const changeCandidateButton = $('#changeCandidateButton');

const CANDIDATES = [
  { id: 'math', alias: '大数学家', route: '计票操控／手牌优势', skillName: '重新计票', skillText: '本局一次：立即摸三张牌。', weakness: '账本很厚，最后一页却总是缺角。', ally: '暂无可靠盟友', allyText: '他的朋友通常只负责数票。', image: 'candidate-math-v1.jpg' },
  { id: 'takagi', alias: '高木卡卡', route: '经济建设／地区爆发', skillName: '汉江奇迹', skillText: '本局一次：获得 6% 支持，并强力影响当前地区。', weakness: '庆功宴上，座位最好别离门太远。', ally: '大公主', allyText: '可触发“继承汉江”。', image: 'candidate-takagi-v1.jpg' },
  { id: 'caretaker', alias: '无能的大人', route: '拖延／借力／复制', skillName: '代理印章', skillText: '本局一次：复制对手上一张牌到手中；无牌则摸二。', weakness: '印章还在桌上，握章的人未必是他。', ally: '暂无可靠盟友', allyText: '每个人都说会替他决定。', image: 'candidate-caretaker-v1.jpg' },
  { id: 'general', alias: '光小将', route: '控制强占／直接压制', skillName: '运输队接管', skillText: '本局一次：对手信誉 -1，并强夺当前地区民意。', weakness: '运输队开得越快，沿路留下的编号越清楚。', ally: '白马王子', allyText: '可触发“普通人接班”。', image: 'candidate-general-v1.jpg' },
  { id: 'prince', alias: '白马王子', route: '妥协转向／续航整合', skillName: '三党合并', skillText: '本局一次：恢复 1 点信誉并摸一张牌。', weakness: '白马能过河，缰绳却常在别人手里。', ally: '光小将', allyText: '可触发“普通人接班”。', image: 'candidate-prince-v1.jpg' },
  { id: 'cleaner', alias: '文民清洁工', route: '肃清／防守补牌', skillName: '金融实名', skillText: '本局一次：获得一次自动防守并摸两张牌。', weakness: '扫帚伸进旧柜子时，灰尘从不认主人。', ally: '暂无可靠盟友', allyText: '清洁工作通常不适合组队。', image: 'candidate-cleaner-v1.jpg' },
  { id: 'mic', alias: '逆风麦克风', route: '网络动员／逆境翻盘', skillName: '逆风而行', skillText: '本局一次：落后时获得 8% 支持，否则获得 4%。', weakness: '风向一转，麦克风可能比听众先安静。', ally: '律师', allyText: '可触发“请求律师”。', image: 'candidate-mic-v1.jpg' },
  { id: 'ceo', alias: '打工皇帝', route: '资金爆发／行动扩张', skillName: '六点会议', skillText: '本局一次：摸两张牌并获得 1 个额外行动点。', weakness: '工程图画得越长，终点旁的账本越厚。', ally: '暂无可靠盟友', allyText: '下属很多，朋友不详。', image: 'candidate-ceo-v1.jpg' },
  { id: 'princess', alias: '大公主', route: '防守手册／顾问体系', skillName: '蓝色笔记', skillText: '本局一次：预先抵消接下来两次对手攻势。', weakness: '笔记本合上以后，房间里是谁在下命令？', ally: '高木卡卡', allyText: '可触发“继承汉江”。', image: 'candidate-princess-v1.jpg' },
  { id: 'lawyer', alias: '律师', route: '民意防守／信誉恢复', skillName: '人权辩护', skillText: '本局一次：恢复 1 点信誉并获得一次自动防守。', weakness: '程序从不迟到，只是选举有时等不起。', ally: '逆风麦克风', allyText: '可触发“请求律师”。', image: 'candidate-lawyer-v1.jpg' },
  { id: 'romance', alias: '半岛第一深情', route: '检察控制／手牌破坏', skillName: '否决权', skillText: '本局一次：随机弃掉对手两张牌并获得 3% 支持。', weakness: '花束与搜查令，常被装进同一只公文包。', ally: '暂无可靠盟友', allyText: '搜查令与花束不能算两个人。', image: 'candidate-romance-v1.jpg' },
  { id: 'hungry', alias: '耐饿王', route: '信誉换牌／行动爆发', skillName: '绝食一天', skillText: '本局一次：失去 1 点信誉，摸三张并获得 2 个行动点。', weakness: '桌上的盒饭会凉，广场上的掌声也会。', ally: '暂无可靠盟友', allyText: '盒饭仍在等待签收。', image: 'candidate-hungry-v1.jpg' }
];

const HIDDEN_CANDIDATE = {
  id: 'north-foodie', alias: '北方美食家', route: '████／████',
  skillName: '今晚都别选了', skillText: '一旦他进入直播间，本届选举可能失去继续举行的必要。',
  weakness: '████████████', ally: '档案来源不明', allyText: '本委员会否认保存过此人资料。',
  image: 'candidate-north-foodie-v1.jpg', hidden: true
};

const OPPONENT_NOTES = {
  math: ['“每一张票，最终都会找到正确的位置。”', '危险提示：计票室申请了三倍数量的橡皮。'],
  takagi: ['“先把桥修好，其他问题以后再说。”', '危险提示：庆功宴的座位表尚未公开。'],
  caretaker: ['“请稍候，真正的决定正在路上。”', '危险提示：他的印章可能出现在任何桌上。'],
  general: ['“道路畅通，车辆已经出发。”', '危险提示：电视台附近出现未登记运输车辆。'],
  prince: ['“我们都是普通人，只是队伍稍微大一点。”', '危险提示：已有三个组织共用一根缰绳。'],
  cleaner: ['“今天只清理别人留下的灰尘。”', '危险提示：旧档案柜正在连夜搬空。'],
  mic: ['“风越大，麦克风越要打开。”', '危险提示：落后可能使他更加兴奋。'],
  ceo: ['“会议六点开始，国家七点开工。”', '危险提示：大型工程的预算页数异常充足。'],
  princess: ['“所有安排，都已经写在蓝色封面里。”', '危险提示：现场顾问人数无法确认。'],
  lawyer: ['“请先坐下，我们按程序慢慢谈。”', '危险提示：任何攻击都可能收到一份回执。'],
  romance: ['“我的决定很坚定，理由以后补交。”', '危险提示：搜查令与花束来自同一只公文包。'],
  hungry: ['“饭可以不吃，话必须说完。”', '危险提示：空腹状态下请勿与其争夺麦克风。']
};

const DIFFICULTIES = {
  low: { label: '低｜地方台试播', note: '对手偶尔会提前暴露行动。' },
  mid: { label: '中｜全国直播', note: '对手会保留关键手段并正常反击。' },
  high: { label: '高｜紧急特别节目', note: '对手会主动寻找候选人的薄弱处。' }
};

const LOADING_RESULTS = [
  ['双方档案已经调取。', 'done'],
  ['电视台席位分配完成。', 'done'],
  ['民意计数器校准完成。', 'done'],
  ['未申报运输车辆：数量过多。', 'warn'],
  ['国民已开始犹豫。', 'done']
];

const ROUND_SEGMENTS = [
  ['开场陈述', '候选人印象'], ['政策辩论', '经济与住房'], ['相互质询', '候选人诚信'],
  ['地方连线', '地区建设'], ['紧急特别节目', '未经同意的议题'], ['最终陈述', '国民最后一次犹豫']
];
const REGIONS = ['首都圈', '江南', '忠清', '岭南', '济州'];
const TYPE_LABELS = { speech: '演讲', expose: '爆料', response: '回应' };
const TYPE_TEXT = { speech: '稳步争取支持', expose: '打断对手并制造危机', response: '拦截爆料并反击' };
const BEATS = { speech: 'response', expose: 'speech', response: 'expose' };
const CARD_LIBRARY = {
  speech: [
    { name:'经济承诺', power:4, topics:['经济与住房','地区建设'], text:'经济、建设议题 +2', risk:0 },
    { name:'街头演说', power:3, topics:['候选人印象','国民最后一次犹豫'], text:'开场、终局议题 +2', risk:0 },
    { name:'含泪保证', power:5, topics:['候选人诚信'], text:'高强度；自身风险 +1', risk:1 }
  ],
  expose: [
    { name:'匿名录音', power:5, topics:['未经同意的议题'], text:'特别节目 +2；风险 +2', risk:2 },
    { name:'旧日档案', power:4, topics:['候选人诚信'], text:'诚信议题 +2；风险 +1', risk:1 },
    { name:'公开质询', power:3, topics:['经济与住房','地区建设'], text:'政策、地方议题 +2', risk:0 }
  ],
  response: [
    { name:'强硬否认', power:5, topics:['未经同意的议题'], text:'特别节目 +2；风险 +1', risk:1 },
    { name:'转移话题', power:3, topics:['候选人印象','国民最后一次犹豫'], text:'开场、终局议题 +2', risk:0 },
    { name:'反问记者', power:4, topics:['候选人诚信'], text:'诚信议题 +2', risk:0 }
  ]
};
const REGION_WEIGHTS = { '首都圈':34, '江南':18, '忠清':15, '岭南':25, '济州':8 };
const CRISIS_TITLES = {
  math:'最后一页去哪了',takagi:'庆功宴临时换座',caretaker:'请在这里签字',general:'车辆编号被拍到了',prince:'缰绳的另一端',cleaner:'扫帚碰到自家柜子',mic:'旧友寄来的账本',ceo:'抽屉里的旧公司名片',princess:'蓝色封面是谁写的',lawyer:'程序仍在办理',romance:'深夜特别命令',hungry:'冷盒饭与法院传票','north-foodie':'今晚的菜单是谁决定的'
};

const assetBase = window.location.pathname.replace(/\\/g, '/').includes('/dist/v2/') ? '../assets/' : './assets/';

let audio = null;
let master = null;
let musicBus = null;
let musicTimer = null;
let alarmTimer = null;
let alarmMode = false;
let muted = false;
let dragging = false;
let resolved = false;
let dragOffset = { x: 0, y: 0 };
let stampOffset = { x: 0, y: 0 };
let typeTimer = null;
let selectedCandidate = null;
let candidateIndex = 0;
let hiddenTurns = 0;
let hiddenRevealed = false;
let wheelLocked = false;
let playerCandidate = null;
let opponentCandidate = null;
let chosenDifficulty = null;
let drawTimer = null;
let loadingTimer = null;
let checklistReady = false;
let tuningValue = 16;
let tuningDragging = false;
let battleRound = 1;
let playerSupport = 50;
let playerRiskLevel = 0;
let opponentRiskLevel = 0;
let playerHand = [];
let playerDeck = [];
let opponentQueuedCard = null;
let skillUsed = false;
let allyUsed = false;
let skillArmed = false;
let allyArmed = false;
let regionOwners = {};
let tutorialMode = false;
let tutorialStep = 0;
let tallyOpened = 0;
let chosenSpeech = '';
let draggedCardIndex = -1;
let momentum = 0;
let playerElectoralScore = 0;
let opponentElectoralScore = 0;
let duelDay = 1;
let playerAP = 2;
let opponentAP = 2;
let playerCredibility = 6;
let opponentCredibility = 6;
let playerDiscard = [];
let opponentDeck = [];
let opponentHand = [];
let opponentDiscard = [];
let currentPhase = 'idle';
let regionInfluence = {};
let playerGuardTokens = 0;
let opponentGuardTokens = 0;
let opponentActionsRemaining = 0;
let pendingEnemyCard = null;
let playerAttackPlayed = false;
let opponentAttackPlayed = false;
let lastOpponentCard = null;
let opponentSkillUsed = false;
let playerPlayedHistory = [];
let opponentPlayedHistory = [];
let dailyStrategy = null;
let lastPlayerCardKind = null;
let passiveTriggeredThisDay = false;

function ensureAudio() {
  if (!audio) {
    audio = new (window.AudioContext || window.webkitAudioContext)();
    master = audio.createGain();
    master.gain.value = muted ? 0 : .82;
    master.connect(audio.destination);
    musicBus = audio.createGain();
    musicBus.gain.value = 1;
    musicBus.connect(master);
  }
  if (audio.state === 'suspended') audio.resume();
  if (!musicTimer) startMusic();
}

function tone(freq, start, duration, volume = 0.035, type = 'square', destination = master) {
  if (!audio) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function noiseBurst(start, duration = .06, volume = .025, cutoff = 900, destination = master) {
  if (!audio) return;
  const size = Math.max(1, Math.floor(audio.sampleRate * duration));
  const buffer = audio.createBuffer(1, size, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / size);
  const source = audio.createBufferSource();
  const filter = audio.createBiquadFilter();
  const gain = audio.createGain();
  source.buffer = buffer;
  filter.type = 'lowpass';
  filter.frequency.value = cutoff;
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  source.connect(filter).connect(gain).connect(destination);
  source.start(start);
}

function brass(freq, start, duration, volume = .04, destination = master) {
  if (!audio) return;
  const saw = audio.createOscillator();
  const square = audio.createOscillator();
  const filter = audio.createBiquadFilter();
  const gain = audio.createGain();
  saw.type = 'sawtooth';
  square.type = 'square';
  saw.frequency.value = freq;
  square.frequency.value = freq;
  square.detune.value = -7;
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(720, start);
  filter.frequency.exponentialRampToValueAtTime(420, start + duration);
  gain.gain.setValueAtTime(.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + .025);
  gain.gain.setValueAtTime(volume * .72, start + Math.min(.12, duration * .4));
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  saw.connect(filter);
  square.connect(filter);
  filter.connect(gain).connect(destination);
  saw.start(start);
  square.start(start);
  saw.stop(start + duration + .03);
  square.stop(start + duration + .03);
}

function kick(start, destination = master) {
  if (!audio) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(92, start);
  osc.frequency.exponentialRampToValueAtTime(42, start + .13);
  gain.gain.setValueAtTime(.12, start);
  gain.gain.exponentialRampToValueAtTime(.0001, start + .16);
  osc.connect(gain).connect(destination);
  osc.start(start);
  osc.stop(start + .18);
}

function startMusic() {
  const phrase = () => {
    if (!audio) return;
    const now = audio.currentTime + .06;
    const halfBeat = .3;
    const roots = [73.42, 58.27, 65.41, 55];
    const fifths = [110, 87.31, 98, 82.41];
    const melody = [
      293.66, null, 349.23, 440, 392, null, 349.23, null,
      329.63, null, 392, 466.16, 440, null, 329.63, null,
      293.66, 349.23, 440, null, 523.25, 466.16, 440, null,
      392, 349.23, 329.63, null, 277.18, null, 293.66, null
    ];
    for (let beat = 0; beat < 16; beat += 1) {
      const at = now + beat * halfBeat * 2;
      const bar = Math.floor(beat / 4);
      const root = roots[bar];
      const bass = beat % 2 === 0 ? root : fifths[bar];
      tone(bass, at, .42, .055, 'triangle', musicBus);
      if (beat % 4 === 0) {
        brass(root * 2, at, .22, .025, musicBus);
        brass(fifths[bar] * 2, at, .22, .017, musicBus);
      }
      if (beat % 4 === 0 || beat % 4 === 2) kick(at, musicBus);
      if (beat % 4 === 1 || beat % 4 === 3) {
        noiseBurst(at, .14, .052, 2400, musicBus);
        tone(164, at, .07, .023, 'square', musicBus);
      }
      noiseBurst(at + halfBeat, .035, .014, 4200, musicBus);
    }
    melody.forEach((note, slot) => {
      if (!note) return;
      const nextIsRest = melody[slot + 1] == null;
      brass(note, now + slot * halfBeat, nextIsRest ? .5 : .24, .034, musicBus);
    });
  };
  phrase();
  musicTimer = window.setInterval(phrase, 9600);
}

function playEndingTheme(won) {
  if(!audio||muted)return;
  if(musicTimer)window.clearInterval(musicTimer);musicTimer=null;
  const now=audio.currentTime+.08;
  if(musicBus)musicBus.gain.setTargetAtTime(0,now,.04);
  const endingBus=audio.createGain();endingBus.gain.value=won?1.08:.78;endingBus.connect(master);
  const notes=won?[261.63,329.63,392,523.25,659.25,783.99]:[293.66,261.63,220,196,164.81,146.83];
  notes.forEach((note,i)=>{
    const at=now+i*(won?.22:.38);
    brass(note,at,won?.42:.7,won?.06:.04,endingBus);
    if(won&&i%2===0)kick(at,endingBus);
    if(!won)tone(note/2,at,.75,.045,'triangle',endingBus);
  });
  if(won){noiseBurst(now+.9,.5,.055,3200,endingBus);noiseBurst(now+1.25,.65,.045,4200,endingBus);}
  else{noiseBurst(now+1.5,.9,.025,520,endingBus);}
}

function startAlarm() {
  if (!audio || alarmMode) return;
  alarmMode = true;
  if (musicBus) musicBus.gain.setTargetAtTime(0, audio.currentTime, .025);
  const pulse = () => {
    if (!audio || !alarmMode) return;
    const now = audio.currentTime + .02;
    brass(622, now, .38, .075);
    brass(466, now + .43, .42, .08);
    noiseBurst(now, .1, .028, 1200);
    noiseBurst(now + .43, .12, .032, 1000);
  };
  pulse();
  alarmTimer = window.setInterval(pulse, 1050);
}

function stopAlarm() {
  if (alarmTimer) window.clearInterval(alarmTimer);
  alarmTimer = null;
  alarmMode = false;
  if (audio && musicBus) musicBus.gain.setTargetAtTime(1, audio.currentTime, .08);
}

function babble(kind = 'host', intensity = 1) {
  if (!audio || muted) return;
  const bases = kind === 'clerk' ? [88, 102, 94, 116] : [132, 148, 124, 157];
  const now = audio.currentTime + .02;
  const count = intensity > 1 ? 12 : 8;
  for (let i = 0; i < count; i += 1) {
    const base = bases[(i * 3 + count) % bases.length];
    tone(base + (i % 3) * 7, now + i * .085, .065, .025 * intensity, i % 2 ? 'square' : 'triangle');
  }
}

function thud(double = false) {
  if (!audio || muted) return;
  const now = audio.currentTime;
  tone(46, now, .18, .14, 'square');
  tone(31, now + .025, .22, .08, 'triangle');
  if (double) {
    tone(43, now + .22, .16, .13, 'square');
    tone(29, now + .245, .2, .07, 'triangle');
  }
}

function tick() {
  if (!audio || muted) return;
  tone(210, audio.currentTime, .045, .025, 'square');
}

function drawFormCopy() {
  const scale = 2;
  formCanvas.width = 270 * scale;
  formCanvas.height = 132 * scale;
  const ctx = formCanvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.fillStyle = '#30342f';
  ctx.textBaseline = 'top';
  const paragraphs = [
    ['本游戏为虚构讽刺作品。', true],
    ['人物、称号、对白、事件及结局均经过架空、夸张与喜剧化处理，不构成对现实人物或历史事件的事实陈述。'],
    ['请勿将本游戏作为历史资料、新闻来源或选举指南。'],
    ['参选期间如遭遇黑料、失言、停电、背叛、运输队或其他不可抗力，本委员会概不负责。'],
    ['本人已阅读上述内容，并自愿承担败选后果。']
  ];
  let y = 1;
  paragraphs.forEach(([text, bold]) => {
    ctx.font = `${bold ? 'bold ' : ''}9px SimSun, serif`;
    const maxWidth = 260;
    let line = '';
    [...text].forEach((char, index) => {
      const test = line + char;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, 5, y);
        line = char;
        y += 12;
      } else line = test;
      if (index === text.length - 1 && line) {
        ctx.fillText(line, 5, y);
        y += 12;
      }
    });
    y += 3;
  });
  for (let x = 7; x < 266; x += 17) {
    ctx.fillStyle = 'rgba(238,232,207,.12)';
    ctx.fillRect(x, (x * 7) % 124, 1, 1);
  }
}

function showSubtitle(name, text, kind = 'host', intensity = 1) {
  window.clearInterval(typeTimer);
  speaker.textContent = name;
  subtitle.textContent = '';
  subtitleBox.hidden = false;
  babble(kind, intensity);
  let i = 0;
  typeTimer = window.setInterval(() => {
    subtitle.textContent = text.slice(0, i += 1);
    if (i >= text.length) window.clearInterval(typeTimer);
  }, 32);
}

function setScene(next) {
  [coverScene, deskScene, endScene, matchScene, loadingScene, battleScene, tallyScene, endingScene].forEach(scene => scene.classList.toggle('is-active', scene === next));
}

function renderReel() {
  candidateReel.innerHTML = '';
  CANDIDATES.forEach((candidate, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.candidateIndex = String(index);
    button.textContent = `${String(index + 1).padStart(2, '0')} ${candidate.alias}`;
    button.addEventListener('mouseenter', tick);
    button.addEventListener('click', () => {
      ensureAudio();
      tick();
      candidateIndex = index;
      hiddenTurns = 0;
      hiddenRevealed = false;
      renderCandidate(candidate);
    });
    candidateReel.append(button);
  });
}

function renderCandidate(candidate = CANDIDATES[candidateIndex]) {
  selectedCandidate = candidate;
  const hidden = Boolean(candidate.hidden);
  if (hidden) startAlarm();
  else stopAlarm();
  endScene.classList.toggle('is-classified', hidden);
  candidatePortrait.src = `${assetBase}${candidate.image}`;
  candidatePortrait.alt = hidden ? '无法识别的候选人剪影与银色餐盘' : `${candidate.alias}像素档案照`;
  candidateCounter.textContent = hidden ? '档案 ?? / 12' : `档案 ${String(candidateIndex + 1).padStart(2, '0')} / 12`;
  candidateNumber.textContent = hidden ? '??' : String(candidateIndex + 1).padStart(2, '0');
  classifiedMark.hidden = !hidden;
  candidateAlias.textContent = hidden ? '身份不明' : candidate.alias;
  candidateReal.textContent = hidden ? '████████' : `登记代号 K-${String(candidateIndex + 1).padStart(2, '0')}`;
  candidateRoute.textContent = candidate.route;
  candidateSkillName.textContent = candidate.skillName;
  candidateSkillText.textContent = candidate.skillText;
  candidateWeakness.textContent = candidate.weakness;
  candidateAlly.textContent = candidate.ally;
  candidateAllyText.textContent = candidate.allyText;
  candidateChoice.querySelector('b').textContent = hidden ? '未登记档案' : candidate.alias;
  candidateChoice.querySelector('span').textContent = hidden ? '名单中不存在此人' : `${candidate.skillName} · ${candidate.route}`;
  candidateMotto.textContent = hidden ? '“本委员会从未批准此人的参选申请。”' : OPPONENT_NOTES[candidate.id][0];
  confirmCandidate.textContent = hidden ? '仍要打开档案？' : '选择此人';
  confirmCandidate.disabled = false;
  [...candidateReel.children].forEach((button, index) => button.classList.toggle('is-active', !hidden && index === candidateIndex));
}

function jamReel(step) {
  endScene.classList.remove('reel-jam');
  void endScene.offsetWidth;
  endScene.classList.add('reel-jam');
  candidateCounter.textContent = `卷轴空转 ${step} / 3`;
  noiseBurst(audio ? audio.currentTime : 0, .09, .035, 650);
  window.setTimeout(() => {
    endScene.classList.remove('reel-jam');
    if (!hiddenRevealed) candidateCounter.textContent = '档案 12 / 12';
  }, 190);
}

function shiftCandidate(direction) {
  ensureAudio();
  tick();
  if (hiddenRevealed) {
    if (direction < 0) {
      hiddenRevealed = false;
      hiddenTurns = 0;
      candidateIndex = CANDIDATES.length - 1;
      renderCandidate();
    } else {
      jamReel(3);
    }
    return;
  }
  if (direction > 0 && candidateIndex === CANDIDATES.length - 1) {
    hiddenTurns += 1;
    if (hiddenTurns < 3) jamReel(hiddenTurns);
    else {
      hiddenRevealed = true;
      viewport.classList.add('shake');
      noiseBurst(audio.currentTime, .24, .085, 430);
      window.setTimeout(() => viewport.classList.remove('shake'), 260);
      renderCandidate(HIDDEN_CANDIDATE);
    }
    return;
  }
  hiddenTurns = 0;
  candidateIndex = (candidateIndex + direction + CANDIDATES.length) % CANDIDATES.length;
  renderCandidate();
}

function enterMatchScene() {
  stopAlarm();
  subtitleBox.hidden = true;
  playerCandidate = selectedCandidate;
  opponentCandidate = null;
  chosenDifficulty = null;
  matchPlayerPortrait.src = `${assetBase}${playerCandidate.image}`;
  matchPlayerPortrait.alt = `${playerCandidate.alias}档案照`;
  matchPlayerAlias.textContent = playerCandidate.alias;
  [...difficultyButtons.children].forEach(button => button.classList.remove('is-active'));
  drawLever.disabled = true;
  drawPortrait.hidden = true;
  drawPortrait.removeAttribute('src');
  drawAlias.textContent = '对手待分配';
  drawMessage.textContent = '先选择难度，再启动摇号机。';
  opponentFile.classList.add('is-unknown');
  matchOpponentPortrait.removeAttribute('src');
  matchOpponentAlias.textContent = '██████';
  opponentWarning.textContent = '档案尚未送达';
  appealButton.disabled = true;
  appealButton.textContent = '提交异议';
  acceptMatch.disabled = true;
  setScene(matchScene);
}

function chooseDifficulty(key) {
  ensureAudio();
  tick();
  chosenDifficulty = key;
  [...difficultyButtons.children].forEach(button => button.classList.toggle('is-active', button.dataset.difficulty === key));
  drawLever.disabled = false;
  drawMessage.textContent = `${DIFFICULTIES[key].label}：${DIFFICULTIES[key].note}`;
}

function showDrawCandidate(candidate, final = false) {
  drawPortrait.src = `${assetBase}${candidate.image}`;
  drawPortrait.hidden = false;
  drawAlias.textContent = final ? candidate.alias : `档案 ${String(CANDIDATES.indexOf(candidate) + 1).padStart(2, '0')}`;
  if (!final) return;
  const [slogan, warning] = OPPONENT_NOTES[candidate.id];
  drawMessage.textContent = slogan;
  matchOpponentPortrait.src = `${assetBase}${candidate.image}`;
  matchOpponentPortrait.alt = `${candidate.alias}档案照`;
  matchOpponentAlias.textContent = candidate.alias;
  opponentWarning.textContent = warning;
  opponentFile.classList.remove('is-unknown');
  appealButton.disabled = false;
  acceptMatch.disabled = false;
}

function runOpponentDraw() {
  if (!chosenDifficulty || drawTimer) return;
  ensureAudio();
  thud();
  drawLever.disabled = true;
  appealButton.disabled = true;
  acceptMatch.disabled = true;
  opponentFile.classList.add('is-unknown');
  matchOpponentAlias.textContent = '分配中…';
  opponentWarning.textContent = '正在核验档案';
  const pool = CANDIDATES.filter(candidate => candidate.id !== playerCandidate.id);
  let turns = 0;
  const totalTurns = 17;
  drawTimer = window.setInterval(() => {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    showDrawCandidate(candidate);
    tick();
    turns += 1;
    if (turns < totalTurns) return;
    window.clearInterval(drawTimer);
    drawTimer = null;
    opponentCandidate = pool[Math.floor(Math.random() * pool.length)];
    noiseBurst(audio.currentTime, .18, .06, 720);
    thud();
    showDrawCandidate(opponentCandidate, true);
  }, 82);
}

function updateTuning(value) {
  tuningValue = Math.max(0, Math.min(100, value));
  const tuned = tuningValue >= 65 && tuningValue <= 80;
  const distance = tuned ? 0 : Math.min(1, Math.abs(tuningValue - 72.5) / 45);
  tuningKnob.style.left = `${tuningValue}%`;
  tuningKnob.style.transform = `translate(-50%, -50%) rotate(${-120 + tuningValue * 2.4}deg)`;
  tuningKnob.setAttribute('aria-valuenow', String(Math.round(tuningValue)));
  signalSnow.style.opacity = String(tuned ? .08 : .28 + distance * .62);
  signalScreen.classList.toggle('is-tuned', tuned);
  signalLabel.textContent = tuned ? '信号锁定' : distance < .42 ? '信号不稳' : '无信号';
  connectLive.disabled = !(tuned && checklistReady);
  if (tuned && checklistReady) loadingHint.textContent = '信号已经锁定。可以接通直播。';
  else if (tuned) loadingHint.textContent = '信号已经锁定，等待设备自检。';
  else if (checklistReady) loadingHint.textContent = '设备自检完成，请把信号调进红色区域。';
}

function setTuningFromPointer(event) {
  const rect = tuningTrack.getBoundingClientRect();
  updateTuning(((event.clientX - rect.left) / rect.width) * 100);
  if (audio && !muted) tone(150 + tuningValue * 2.2, audio.currentTime, .035, .012, 'square');
}

function enterLoadingScene() {
  subtitleBox.hidden = true;
  loadingPlayerPortrait.src = `${assetBase}${playerCandidate.image}`;
  loadingPlayerPortrait.alt = `${playerCandidate.alias}档案照`;
  loadingPlayerAlias.textContent = playerCandidate.alias;
  loadingOpponentPortrait.src = `${assetBase}${opponentCandidate.image}`;
  loadingOpponentPortrait.alt = `${opponentCandidate.alias}档案照`;
  loadingOpponentAlias.textContent = opponentCandidate.alias;
  [...loadingChecklist.children].forEach((item, index) => {
    item.className = '';
    item.textContent = ['正在调取双方档案……', '正在分配电视台席位……', '正在校准民意计数器……', '正在登记未申报运输车辆……', '正在通知国民开始犹豫……'][index];
  });
  checklistReady = false;
  broadcastReady.hidden = true;
  onAirLamp.textContent = '● OFF AIR';
  onAirLamp.classList.remove('is-on');
  loadingHint.textContent = '设备自检中，请同时校准电视信号。';
  updateTuning(16);
  setScene(loadingScene);
  let step = 0;
  window.clearInterval(loadingTimer);
  loadingTimer = window.setInterval(() => {
    const item = loadingChecklist.children[step];
    const [text, status] = LOADING_RESULTS[step];
    item.textContent = text;
    item.classList.add(status);
    tick();
    step += 1;
    if (step < LOADING_RESULTS.length) return;
    window.clearInterval(loadingTimer);
    loadingTimer = null;
    checklistReady = true;
    updateTuning(tuningValue);
  }, 560);
}

function makeDeck(candidate) {
  const deck = [];
  Object.entries(CARD_LIBRARY).forEach(([type, cards]) => cards.forEach((card, i) => deck.push({ ...card, type, id:`${type}-${i}` })));
  const specialType = ['takagi','mic','hungry','ceo'].includes(candidate.id) ? 'speech' : ['lawyer','princess','cleaner'].includes(candidate.id) ? 'response' : 'expose';
  deck.push({ type:specialType, name:candidate.skillName, id:'special', special:true, power:5, risk:1, topics:[], text:'人物专属牌：胜出时额外扩大优势' });
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function drawToThree() {
  while (playerHand.length < 3) {
    if (!playerDeck.length) playerDeck = makeDeck(playerCandidate);
    playerHand.push(playerDeck.shift());
  }
}

function updateSupport() {
  playerSupport = Math.max(20, Math.min(80, playerSupport));
  playerSupportFill.style.width = `${playerSupport}%`;
  playerSupportText.textContent = `${playerSupport}%`;
  opponentSupportText.textContent = `${100 - playerSupport}%`;
  playerRisk.classList.toggle('hot', playerRiskLevel >= 2);
  opponentRisk.classList.toggle('hot', opponentRiskLevel >= 2);
  playerRisk.textContent = `风险 ${playerRiskLevel}/4`;
  opponentRisk.textContent = `风险 ${opponentRiskLevel}/4`;
  momentumText.textContent = `声势 ${momentum}/3`;
}

function topicBonus(card) {
  return card.topics && card.topics.includes(ROUND_SEGMENTS[battleRound - 1][1]) ? 2 : 0;
}

function forecast(card) {
  const topic = topicBonus(card);
  const risk = card.risk ? ` · 风险 +${card.risk}` : '';
  if (chosenDifficulty === 'low' && opponentQueuedCard) {
    const relation = card.type === opponentQueuedCard.type ? '同类比强度' : BEATS[card.type] === opponentQueuedCard.type ? '克制对手' : '会被克制';
    return `${relation} · 强度 ${card.power}${topic ? '+2议题' : ''}${risk}`;
  }
  return `强度 ${card.power}${topic ? ' + 议题2' : ''}${risk}`;
}

function renderHand(requiredType = null) {
  hand.innerHTML = '';
  playerHand.forEach((card, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `game-card ${card.type}`;
    button.disabled = Boolean(requiredType && card.type !== requiredType);
    button.innerHTML = `<b>${card.name}</b><span>${card.text || TYPE_TEXT[card.type]}</span><small>${TYPE_LABELS[card.type]} · 强度 ${card.power}${card.special ? ' · 人物专属' : ''}</small>`;
    button.addEventListener('mouseenter', () => { tick(); tacticPreview.textContent = forecast(card); });
    button.addEventListener('mouseleave', () => { tacticPreview.textContent = '演讲＞回应＞爆料＞演讲'; });
    button.addEventListener('focus', () => { tacticPreview.textContent = forecast(card); });
    button.addEventListener('click', () => playCard(index));
    button.draggable = !button.disabled;
    button.addEventListener('dragstart', event => { draggedCardIndex=index; event.dataTransfer.effectAllowed='move'; playerPlayedCard.classList.add('drag-ready'); });
    button.addEventListener('dragend', () => playerPlayedCard.classList.remove('drag-ready'));
    hand.append(button);
  });
}

function queueOpponent(forcedType = null) {
  const types = ['speech','expose','response'];
  let type = forcedType;
  if (!type && chosenDifficulty === 'high' && playerHand.length && Math.random() < .22) {
    const tempting = [...playerHand].sort((a,b) => (b.power + topicBonus(b)) - (a.power + topicBonus(a)))[0];
    type = { speech:'expose', expose:'response', response:'speech' }[tempting.type];
  }
  type ||= types[Math.floor(Math.random() * types.length)];
  const options = CARD_LIBRARY[type];
  const sortedOptions = [...options].sort((a,b) => topicBonus(b) - topicBonus(a) || b.power - a.power);
  const optionIndex = chosenDifficulty === 'low' ? Math.floor(Math.random()*options.length) : chosenDifficulty === 'high' ? Math.floor(Math.random()*2) : 0;
  const card = sortedOptions[optionIndex];
  const broadcastNames = { speech:'全国电视演说', expose:'密封爆料档案', response:'紧急澄清声明' };
  opponentQueuedCard = { ...card, type, name:broadcastNames[type], power: card.power - (chosenDifficulty === 'low' ? 1 : 0) };
  if (chosenDifficulty === 'low') intentHint.textContent = `地方台泄密：对手将用${TYPE_LABELS[type]}（强度 ${opponentQueuedCard.power}）。`;
  else if (chosenDifficulty === 'mid') {
    const hintedType = !tutorialMode && Math.random() < .25 ? types.filter(item => item !== type)[Math.floor(Math.random()*2)] : type;
    intentHint.textContent = `${hintedType === type ? '现场迹象' : '走廊传闻'}：${hintedType === 'expose' ? '工作人员搬来了一箱没有标签的文件。' : hintedType === 'response' ? '对手正在反复练习同一句否认。' : '对手要求重新调高讲台麦克风。'}`;
  }
  else intentHint.textContent = '紧急特别节目：对手会针对你手中最强的路线。';
  tacticPreview.textContent = '演讲＞回应＞爆料＞演讲';
}

function setRoundDisplay() {
  const [segment, topic] = ROUND_SEGMENTS[battleRound - 1];
  roundLabel.textContent = `第 ${String(battleRound).padStart(2,'0')} / 06 回合`;
  segmentLabel.textContent = segment;
  topicLabel.textContent = topic;
  [...regionMonitor.children].forEach((button, i) => button.classList.toggle('focus', i === (battleRound - 1) % REGIONS.length));
}

function beginRound() {
  roundResolution.hidden = true;
  playerPlayedCard.className = 'played-card';
  opponentPlayedCard.className = 'played-card';
  playerPlayedCard.textContent = '等待出牌';
  opponentPlayedCard.textContent = '对手已经锁定';
  hostLine.textContent = battleRound === 6 ? '这是国民最后一次犹豫。' : '双方候选人，请提交本轮行动。';
  setRoundDisplay();
  drawToThree();
  queueOpponent();
  renderHand();
  skillButton.disabled = skillUsed;
  allyButton.disabled = allyUsed || playerCandidate.ally === '暂无可靠盟友';
  if (!tutorialMode && (battleRound === 5 || playerRiskLevel >= 4)) window.setTimeout(showCrisis, 380);
}

function setupBattle() {
  setScene(battleScene);
  if(audio&&musicBus){musicBus.gain.setTargetAtTime(1,audio.currentTime,.1);if(!musicTimer)startMusic();}
  battlePlayerPortrait.src = `${assetBase}${playerCandidate.image}`;
  battlePlayerAlias.textContent = playerCandidate.alias;
  battleOpponentPortrait.src = `${assetBase}${opponentCandidate.image}`;
  battleOpponentAlias.textContent = opponentCandidate.alias;
  skillButtonName.textContent = playerCandidate.skillName;
  allyButtonName.textContent = playerCandidate.ally === '暂无可靠盟友' ? '无人接听' : playerCandidate.ally;
  skillButton.classList.remove('armed'); allyButton.classList.remove('armed');
  playerSupport = 50; playerRiskLevel = 0; opponentRiskLevel = 0; battleRound = 1; momentum = 0;
  playerDeck = makeDeck(playerCandidate); playerHand = []; skillUsed = false; allyUsed = false; skillArmed = false; allyArmed = false; regionOwners = {};
  [...regionMonitor.children].forEach(button => button.className = '');
  updateSupport();
}

function startFormalBattle() {
  tutorialMode = false;
  tutorialGuide.hidden = true;
  tutorialChoice.hidden = true;
  setupBattle();
  beginRound();
}

function startTraining() {
  tutorialMode = true; tutorialStep = 0;
  tutorialChoice.hidden = true; tutorialGuide.hidden = false;
  setupBattle();
  beginTutorialStep();
}

function beginTutorialStep() {
  roundResolution.hidden = true;
  const required = ['speech','response','expose','skill'][tutorialStep];
  tutorialTitle.textContent = `培训 ${tutorialStep + 1} / 4`;
  const instructions = ['把一张“演讲”牌送上讲台。','对手准备爆料，请使用“回应”。','对手正在演讲，请使用“爆料”。','按下讲台旁边的人物技能按钮。'];
  tutorialText.textContent = instructions[tutorialStep];
  hostLine.textContent = '本培训暂不接受创造性发挥。';
  playerHand = [
    {type:'speech',name:'练习演讲',power:3,risk:0,topics:[],text:'培训用牌'},
    {type:'response',name:'练习回应',power:3,risk:0,topics:[],text:'培训用牌'},
    {type:'expose',name:'练习爆料',power:3,risk:0,topics:[],text:'培训用牌'}
  ];
  const counters = ['response','expose','speech',null];
  queueOpponent(counters[tutorialStep]);
  renderHand(required === 'skill' ? 'none' : required);
  skillButton.disabled = required !== 'skill';
  allyButton.disabled = true;
}

function playCard(index) {
  if (!roundResolution.hidden) return;
  ensureAudio(); thud();
  const card = playerHand.splice(index, 1)[0];
  playerRiskLevel += card.risk || 0;
  opponentRiskLevel += opponentQueuedCard.risk || 0;
  let delta = 0; let title = '';
  const playerStrength = card.power + topicBonus(card);
  const opponentStrength = opponentQueuedCard.power + topicBonus(opponentQueuedCard);
  const strengthEdge = Math.max(-2, Math.min(3, playerStrength - opponentStrength));
  if (card.type === opponentQueuedCard.type) {
    delta = playerStrength - opponentStrength;
    title = delta > 0 ? `${card.name}抢到同类行动优势` : delta < 0 ? `对手的${TYPE_LABELS[card.type]}更有力` : '双方行动互相抵消';
  } else if (BEATS[card.type] === opponentQueuedCard.type) { delta = 5 + strengthEdge; title = `${TYPE_LABELS[card.type]}压制${TYPE_LABELS[opponentQueuedCard.type]}`; }
  else { delta = -(5 - strengthEdge); title = `${TYPE_LABELS[opponentQueuedCard.type]}压制${TYPE_LABELS[card.type]}`; }
  if (delta > 0) delta += Math.min(momentum, 2);
  if (skillArmed) {
    const skillResult = applyCandidateSkill(delta, card);
    delta = skillResult.delta; title += ` · ${skillResult.note}`;
    skillArmed = false; skillButton.classList.remove('armed'); skillButtonName.textContent=playerCandidate.skillName;
  }
  if (allyArmed) { delta += 3; allyArmed = false; allyButton.classList.remove('armed'); allyButtonName.textContent=playerCandidate.ally; }
  if (opponentRiskLevel >= 4) { delta += 3; opponentRiskLevel = 0; title += ' · 对手档案泄露'; }
  if (chosenDifficulty === 'high' && delta < 0) delta -= 1;
  momentum = delta > 0 ? Math.min(3, momentum + 1) : delta < 0 ? 0 : momentum;
  resolveRound(card, opponentQueuedCard, delta, title);
}

function applyCandidateSkill(delta, card) {
  const id = playerCandidate.id;
  if (id === 'math') return { delta: delta < 0 ? 2 : delta + 2, note:'重新计票扭转结果' };
  if (id === 'takagi') return { delta: delta + (topicBonus(card) ? 6 : 4), note:'汉江项目加速' };
  if (id === 'caretaker') return { delta: delta < 0 ? Math.ceil(delta / 2) : delta + 2, note:'代理复制半数效果' };
  if (id === 'general') return { delta: Math.max(4, delta + 6), note:'运输队强占镜头' };
  if (id === 'prince') return { delta: delta + (playerSupport < 50 ? 6 : 3), note:'临时联盟并入' };
  if (id === 'cleaner') { playerRiskLevel = Math.max(0, playerRiskLevel - 3); return { delta: delta + 3, note:'档案与风险被清理' }; }
  if (id === 'mic') return { delta: playerSupport < 50 && delta > 0 ? delta * 2 : delta + 3, note:'逆风民意放大' };
  if (id === 'ceo') { if (playerHand.length) playerHand.splice(0,1); return { delta: delta + 7, note:'牺牲一牌提前开工' }; }
  if (id === 'princess') return { delta: delta < 0 ? 0 : delta + 2, note:'蓝色笔记预判成功' };
  if (id === 'lawyer') return { delta: delta < 0 ? 0 : delta + 2, note:'程序冻结伤害' };
  if (id === 'romance') { opponentRiskLevel += 2; return { delta: Math.max(4, delta + 4), note:'否决对手并追加调查' }; }
  if (id === 'hungry') return { delta: delta > 0 ? delta * 2 : -2, note:'绝食蓄力孤注一掷' };
  return { delta: delta + 3, note:'人物技能发动' };
}

function resolveRound(playerCard, opponentCard, delta, title) {
  [...hand.children].forEach(button => button.disabled = true);
  playerPlayedCard.textContent = playerCard.name; playerPlayedCard.className = `played-card ${playerCard.type}`;
  opponentPlayedCard.textContent = opponentCard.name; opponentPlayedCard.className = `played-card ${opponentCard.type}`;
  const playerWon = delta > 0; const targetActor = playerWon ? opponentActor : playerActor; const float = playerWon ? opponentFloat : playerFloat;
  const region = battleRound <= REGIONS.length ? REGIONS[battleRound - 1] : null;
  if (delta !== 0) {
    targetActor.classList.add('hit'); float.textContent = `-${Math.abs(delta)}%`; float.classList.add('show');
    if (region) {
      regionOwners[region] = playerWon ? 'player' : 'opponent';
      const regionButton = [...regionMonitor.children].find(button => button.dataset.region === region);
      regionButton.classList.remove('player','opponent'); regionButton.classList.add(regionOwners[region]);
    }
  }
  window.setTimeout(() => { playerSupport += delta; updateSupport(); }, 330);
  window.setTimeout(() => { targetActor.classList.remove('hit'); float.classList.remove('show'); }, 1500);
  hostLine.textContent = playerWon ? `${playerCandidate.alias}取得了本轮直播优势。` : delta < 0 ? `${opponentCandidate.alias}控制了本轮话题。` : '主持人决定立即切入广告。';
  window.setTimeout(() => showResolution(playerCard, opponentCard, delta, title, region), 1150);
}

function showResolution(playerCard, opponentCard, delta, title, region) {
  resolutionStamp.textContent = delta > 0 ? '行动命中' : delta < 0 ? '对手反击' : '局面僵持';
  resolutionDelta.textContent = delta > 0 ? `+${delta}%` : `${delta}%`;
  resolutionRound.textContent = tutorialMode ? `临时培训 ${tutorialStep + 1} / 4` : `第 ${String(battleRound).padStart(2,'0')} 回合结算`;
  resolutionTitle.textContent = title;
  resolutionDetail.textContent = `${playerCandidate.alias}：${playerCard.name}　／　${opponentCandidate.alias}：${opponentCard.name}`;
  resolutionRegion.textContent = region ? (delta === 0 ? `${region}保持观望。` : `${region}（${REGION_WEIGHTS[region]}席）转向${delta > 0 ? playerCandidate.alias : opponentCandidate.alias}。`) : `全国最终陈述让声势达到 ${momentum}/3。`;
  nextRoundButton.textContent = tutorialMode && tutorialStep === 3 ? '完成培训，进入正式直播' : '确认结果，进入下一回合';
  roundResolution.hidden = false;
}

function activateSkill() {
  if (skillUsed) return;
  ensureAudio(); thud(true); skillUsed = true; skillButton.disabled = true;
  if (tutorialMode) {
    const delta = 5; playerSupport += delta; updateSupport();
    showResolution({name:playerCandidate.skillName,type:'speech'},{name:'培训记录',type:'response'},delta,'人物技能成功发动',REGIONS[0]);
    return;
  }
  skillArmed = playerCandidate.id; playerRiskLevel += ['general','math','takagi','romance'].includes(playerCandidate.id) ? 2 : 1; updateSupport();
  skillButton.classList.add('armed'); skillButtonName.textContent='已启动';
  hostLine.textContent = `${playerCandidate.alias}启动“${playerCandidate.skillName}”，效果将在下一张牌结算。`;
  tacticPreview.textContent = playerCandidate.skillText;
}

function activateAlly() {
  if (allyUsed || playerCandidate.ally === '暂无可靠盟友') return;
  ensureAudio(); tone(620,audio.currentTime,.12,.06,'square'); tone(720,audio.currentTime+.18,.12,.06,'square');
  allyUsed = true; allyArmed = true; allyButton.disabled = true; playerRiskLevel += 1; updateSupport();
  allyButton.classList.add('armed'); allyButtonName.textContent='连线成功';
  hostLine.textContent = `${playerCandidate.ally}接通电视连线，下一张牌获得援护。`;
}

function showCrisis() {
  crisisTitle.textContent = CRISIS_TITLES[playerCandidate.id];
  crisisText.textContent = playerCandidate.weakness;
  crisisDeny.disabled = !playerHand.some(card => card.type === 'response');
  crisisDistract.disabled = skillUsed && (allyUsed || playerCandidate.ally === '暂无可靠盟友');
  const pressure = Math.max(2, playerRiskLevel);
  crisisApologize.textContent = `公开道歉（-${pressure + 1}%）`;
  crisisDeny.textContent = `强硬否认（弃回应，-${Math.ceil(pressure / 2)}%）`;
  crisisDistract.textContent = '制造更大新闻（牺牲技能/援护及济州）';
  crisisOverlay.hidden = false;
}

function resolveCrisis(kind) {
  let loss = 0;
  const pressure = Math.max(2, playerRiskLevel);
  if (kind === 'apologize') loss = pressure + 1;
  if (kind === 'deny') { loss = Math.ceil(pressure / 2); const i = playerHand.findIndex(card => card.type === 'response'); if (i >= 0) playerHand.splice(i,1); }
  if (kind === 'distract') { if (!skillUsed) skillUsed = true; else allyUsed = true; regionOwners[REGIONS[4]] = 'opponent'; }
  playerSupport -= loss; playerRiskLevel = 0; updateSupport(); crisisOverlay.hidden = true;
  hostLine.textContent = loss ? `危机暂时结束，支持率下降 ${loss}%。` : '更大的新闻成功覆盖了原来的新闻。';
  renderHand();
}

function advanceBattle() {
  if (tutorialMode) {
    tutorialStep += 1;
    if (tutorialStep >= 4) { startFormalBattle(); return; }
    beginTutorialStep(); return;
  }
  if (battleRound >= 6) { startTally(); return; }
  battleRound += 1; beginRound();
}

function startTally() {
  setScene(tallyScene); tallyOpened = 0;
  playerElectoralScore = 0; opponentElectoralScore = 0;
  tallyPlayerPortrait.src = `${assetBase}${playerCandidate.image}`; tallyPlayerAlias.textContent = playerCandidate.alias;
  tallyOpponentPortrait.src = `${assetBase}${opponentCandidate.image}`; tallyOpponentAlias.textContent = opponentCandidate.alias;
  tallyPlayerScore.textContent = '等待开票'; tallyOpponentScore.textContent = '等待开票'; tallyCount.textContent = '已开票 0 / 5';
  finalResultButton.hidden = true; regionEnvelopes.innerHTML = '';
  REGIONS.forEach(region => { const button=document.createElement('button'); button.dataset.region=region; button.innerHTML=`<b>${region}</b><small>${REGION_WEIGHTS[region]} 席 · 点击开票</small>`; button.addEventListener('click',()=>openEnvelope(button,region)); regionEnvelopes.append(button); });
}

function openEnvelope(button, region) {
  if (button.classList.contains('revealed')) return;
  ensureAudio(); thud();
  const owner = regionOwners[region] || (Math.random()*100 < playerSupport ? 'player' : 'opponent');
  button.classList.add('revealed'); if(owner==='opponent') button.classList.add('opponent-win');
  button.innerHTML = `<b>${region}</b><small>${REGION_WEIGHTS[region]} 席</small><strong>${owner==='player' ? playerCandidate.alias : opponentCandidate.alias}</strong>`;
  if (owner === 'player') playerElectoralScore += REGION_WEIGHTS[region];
  else opponentElectoralScore += REGION_WEIGHTS[region];
  tallyOpened += 1; tallyCount.textContent = `已开票 ${tallyOpened} / 5`; tallyHostLine.textContent = `${region}已经完成开票。`;
  tallyPlayerScore.textContent = `${playerElectoralScore} 席`;
  tallyOpponentScore.textContent = `${opponentElectoralScore} 席`;
  if(tallyOpened===5) finalResultButton.hidden=false;
}

function showEnding() {
  setScene(endingScene); newspaper.hidden=true; endingScore.textContent=`席位 ${playerElectoralScore}:${opponentElectoralScore} · 民意 ${playerSupport}%`;
  const win = playerElectoralScore === opponentElectoralScore ? playerSupport >= 51 : playerElectoralScore > opponentElectoralScore;
  playEndingTheme(win);
  endingHeader.textContent = win ? (playerElectoralScore>=70?'国民突然决定':'国民勉强决定') : (playerElectoralScore===opponentElectoralScore?'国民依然尚未决定':'国民决定再看看别人');
  victoryEnding.hidden=!win; defeatEnding.hidden=win;
  if(win) setupVictory(); else setupDefeat();
}

function setupVictory() {
  endingWinnerPortrait.src=`${assetBase}${playerCandidate.image}`; endingWinnerAlias.textContent=playerCandidate.alias; speechOutput.textContent='请选择胜选演说。'; chosenSpeech=''; victoryFader.value=0; victoryFader.disabled=true; printNewspaper.disabled=true;
  const lines=[`感谢每一位仍未决定的国民。`,`${playerCandidate.alias}的时代，现在开始办理。`,`关于今天的结果，请不要继续提问。`];
  speechChoices.innerHTML=''; lines.forEach(line=>{const button=document.createElement('button');button.textContent=line;button.addEventListener('click',()=>{chosenSpeech=line;[...speechChoices.children].forEach(b=>b.classList.toggle('selected',b===button));speechOutput.textContent=line;victoryFader.disabled=false;babble('host',1.1);});speechChoices.append(button);});
}

function setupDefeat() { endingLoserPortrait.src=`${assetBase}${playerCandidate.image}`; endingLoserAlias.textContent=playerCandidate.alias; }

function showNewspaper(headline, body) {
  victoryEnding.hidden=true;defeatEnding.hidden=true;
  const win=playerElectoralScore===opponentElectoralScore?playerSupport>=51:playerElectoralScore>opponentElectoralScore;
  newspaper.classList.toggle('is-defeat',!win);newspaper.classList.toggle('is-victory',win);
  newspaperKicker.textContent=win?'全国大选胜选特报':'全国大选败选特报';newspaperHeadline.textContent=headline;newspaperBody.textContent=body;
  newspaperVerdict.textContent=win?'竞选成功':'竞选失败';newspaperPortrait.src=`${assetBase}${playerCandidate.image}`;newspaperPortrait.alt=`${playerCandidate.alias}${win?'胜选':'败选'}新闻照片`;
  newspaperCaption.textContent=win?`${playerCandidate.alias}在竞选总部向支持者致意`:`${playerCandidate.alias}在直播结束后离开演播室`;
  newspaper.hidden=false;thud(true);
}

/* 可玩性强化第二版：双人回合制竞选牌局。保留原流程，重做直播对战核心。 */
const DUEL_TOPICS = ['候选人印象','经济与住房','候选人诚信','地区建设','社会福利','媒体公信力','青年就业','外交安全','地方预算','选举公平','最后冲刺','国民最后一次犹豫'];
const PASSIVES = {
  math:'数据模型：每天第一张谋略牌返还 1 行动点',takagi:'建设主义：地方组织额外获得 1% 支持',caretaker:'临时代理：手牌上限提高到 10 张',general:'强势接管：每回合第一张攻势额外获得 1% 支持',prince:'组织整合：恢复信誉时同时获得 2% 支持',cleaner:'档案清理：反问记者额外夺回 1% 支持',mic:'逆风动员：落后时主动牌额外获得 1% 支持',ceo:'效率会议：每逢第 3 日额外获得 1 行动点',princess:'蓝色预案：开局自带 1 次护盾',lawyer:'程序援护：打出响应后摸 1 张牌',romance:'检察攻势：锦囊牌额外获得 1% 支持',hungry:'绝食蓄力：信誉不高于 3 时每日多摸 1 张'
};
const REWARD_CARDS = [
  {kind:'attack',name:'黄金时段',text:'稀有攻势；命中后信誉 -1、支持率 +6',damage:1,support:6,rare:true},
  {kind:'expose',name:'深夜录音',text:'稀有锦囊；命中后信誉 -2，但民意收益较低',damage:2,support:2,rare:true},
  {kind:'response',name:'法律团队',text:'稀有响应；抵消伤害并夺回 4% 支持',counter:true,counterSupport:4,rare:true},
  {kind:'recover',name:'后援专车',text:'稀有恢复；一次恢复 2 点信誉',heal:2,rare:true},
  {kind:'scheme',name:'志愿者网络',text:'稀有谋略；支持率 +5，当前地区额外影响 +3',effect:'campaign',support:5,region:3,rare:true},
  {kind:'scheme',name:'内部民调',text:'稀有谋略；摸三张牌',effect:'draw',draw:3,rare:true}
];

function makeDuelDeck(candidate) {
  const cards = [];
  const add = (count, card) => { for (let i=0;i<count;i+=1) cards.push({ ...card, id:`${card.kind}-${cards.length}-${Math.random()}` }); };
  add(4,{kind:'attack',name:'全国演说',text:'竞选攻势；命中后对手信誉 -1，支持率 +3',damage:1,support:3});
  add(3,{kind:'attack',name:'街头造势',text:'竞选攻势；命中后对手信誉 -1，本地区影响更强',damage:1,support:2,region:2});
  add(3,{kind:'expose',name:'密封黑料',text:'锦囊攻势；可被回应，命中后信誉 -1、支持率 +4',damage:1,support:4});
  add(2,{kind:'expose',name:'公开质询',text:'锦囊攻势；命中后信誉 -1，并削弱对手手牌',damage:1,support:2,discard:true});
  add(5,{kind:'response',name:'紧急回应',text:'只能在对手攻势时打出，抵消信誉伤害'});
  add(2,{kind:'response',name:'反问记者',text:'只能在响应时打出；抵消伤害并夺回 2% 支持',counter:true});
  add(3,{kind:'recover',name:'行程休整',text:'恢复 1 点信誉；信誉已满时改为支持率 +3'});
  add(3,{kind:'scheme',name:'民意调查',text:'消耗 1 行动点，再摸两张牌',effect:'draw'});
  add(3,{kind:'scheme',name:'地方组织',text:'支持率 +3，并额外影响当前地区',effect:'campaign',support:3,region:2});
  add(1,{kind:'scheme',name:candidate.skillName,text:'人物档案专属牌：摸一张牌并获得 3% 支持',effect:'signature',support:3,special:true});
  return shuffleDuel(cards);
}

function shuffleDuel(cards) {
  for (let i=cards.length-1;i>0;i-=1) { const j=Math.floor(Math.random()*(i+1)); [cards[i],cards[j]]=[cards[j],cards[i]]; }
  return cards;
}

function currentRegion() { return duelDay <= 10 ? REGIONS[Math.floor((duelDay-1)/2)] : null; }

function drawDuelCards(side, count) {
  const isPlayer = side === 'player';
  let deck = isPlayer ? playerDeck : opponentDeck;
  const handCards = isPlayer ? playerHand : opponentHand;
  let discard = isPlayer ? playerDiscard : opponentDiscard;
  for (let i=0;i<count;i+=1) {
    if (!deck.length && discard.length) { deck.push(...shuffleDuel(discard.splice(0))); }
    if (!deck.length) break;
    handCards.push(deck.shift());
  }
  updateDuelUI();
}

function discardCard(side, card) { (side === 'player' ? playerDiscard : opponentDiscard).push(card); }

function trimHand(side) {
  const cards = side === 'player' ? playerHand : opponentHand;
  const limit=side==='player'&&playerCandidate.id==='caretaker'?10:8;
  while (cards.length > limit) discardCard(side, cards.shift());
}

function updateSupport() {
  playerSupport = Math.max(15,Math.min(85,playerSupport));
  playerSupportFill.style.width=`${playerSupport}%`;
  playerSupportText.textContent=`${playerSupport}%`;
  opponentSupportText.textContent=`${100-playerSupport}%`;
  playerRisk.textContent=`信誉 ${playerCredibility}/6${playerGuardTokens ? ` · 护盾${playerGuardTokens}` : ''}`;
  opponentRisk.textContent=`信誉 ${opponentCredibility}/6${opponentGuardTokens ? ` · 护盾${opponentGuardTokens}` : ''}`;
  playerRisk.classList.toggle('hot',playerCredibility<=2);
  opponentRisk.classList.toggle('hot',opponentCredibility<=2);
}

function updateDuelUI() {
  updateSupport();
  momentumText.textContent = currentPhase === 'player' ? `行动点 ${playerAP}` : currentPhase === 'strategy' ? '先选择本日策略' : currentPhase === 'opponent' ? '对手行动中' : '等待直播';
  tacticPreview.textContent=`牌堆 ${playerDeck.length} · 弃牌 ${playerDiscard.length} · 手牌 ${playerHand.length}/${playerCandidate&&playerCandidate.id==='caretaker'?10:8}`;
  endTurnButton.disabled=currentPhase!=='player';
  skillButton.disabled=skillUsed||currentPhase!=='player';
  allyButton.disabled=allyUsed||currentPhase!=='player'||playerCandidate.ally==='暂无可靠盟友';
  [...strategyButtons.children].forEach(button=>{button.disabled=currentPhase!=='strategy';button.classList.toggle('selected',button.dataset.strategy===dailyStrategy);});
}

function setRoundDisplay() {
  const region=currentRegion();
  roundLabel.textContent=`竞选日 ${String(duelDay).padStart(2,'0')} / 12`;
  segmentLabel.textContent=currentPhase==='opponent'?'对手行动阶段':currentPhase==='strategy'?'制定本日策略':'你的行动阶段';
  topicLabel.textContent=DUEL_TOPICS[duelDay-1]||'全国开票';
  [...regionMonitor.children].forEach(button=>button.classList.toggle('focus',button.dataset.region===region));
}

function describeOpponentIntent(){
  if(opponentCredibility<=2&&opponentHand.some(c=>c.kind==='recover'))return '情报预测：对手很可能优先恢复信誉。';
  const attacks=opponentHand.filter(c=>c.kind==='attack'||c.kind==='expose').length;
  const schemes=opponentHand.filter(c=>c.kind==='scheme').length;
  if(attacks>=2)return `情报预测：对手手中攻势充足，本日大概率连续施压。`;
  if(schemes>=2)return '情报预测：对手倾向补牌或经营地区。';
  return '情报预测：对手路线不明，至少保留一张响应更稳妥。';
}

function selectStrategy(kind){
  if(currentPhase!=='strategy')return;dailyStrategy=kind;
  if(kind==='guard')playerGuardTokens+=1;
  if(kind==='organize')drawDuelCards('player',1);
  currentPhase='player';setRoundDisplay();
  hostLine.textContent=kind==='attack'?'本日采取强攻：所有命中的主动攻势额外获得 2% 支持。':kind==='guard'?'本日采取稳守：已建立一次临时护盾。':'本日发动基层组织：额外摸一张牌。';
  intentHint.textContent='现在使用手牌；留意牌面上的连携提示。';renderHand();
}

function addPlayedCard(side, card) {
  const history = side === 'player' ? playerPlayedHistory : opponentPlayedHistory;
  history.push(card); if(history.length>4)history.shift();
  const zone = side === 'player' ? playerPlayedCard : opponentPlayedCard;
  zone.className='played-card';zone.innerHTML=`<small>${side==='player'?'己方':'对手'}竞选公示 · 最近 ${history.length} 张</small>`;
  history.forEach(item=>{
    const chip=document.createElement('span');chip.className=`table-card ${item.kind||'scheme'}`;chip.innerHTML=`<i></i><b>${item.name}</b>`;zone.append(chip);
  });
}

function getCombo(card){
  if(lastPlayerCardKind==='scheme'&&(card.kind==='attack'||card.kind==='expose'))return{support:2,draw:0,damage:0,label:'数据精准投放 +2%'};
  if(lastPlayerCardKind==='expose'&&card.kind==='attack')return{support:0,draw:0,damage:1,label:'舆论追击：伤害 +1'};
  if(lastPlayerCardKind==='recover'&&card.kind==='attack')return{support:1,draw:0,damage:0,label:'重整旗鼓 +1%'};
  if(lastPlayerCardKind==='attack'&&card.kind==='scheme')return{support:0,draw:1,damage:0,label:'乘胜部署：摸一张'};
  return{support:0,draw:0,damage:0,label:''};
}

function renderHand() {
  hand.innerHTML='';
  playerHand.forEach((card,index)=>{
    const button=document.createElement('button');
    button.type='button'; button.className=`game-card ${card.kind}`;
    button.disabled=currentPhase!=='player'||playerAP<=0||card.kind==='response'||(card.kind==='attack'&&playerAttackPlayed);
    const combo=getCombo(card);
    button.innerHTML=`<i class="card-cover" aria-hidden="true"></i><b>${card.name}</b><span>${card.text}</span><small>${card.kind==='attack'?'攻势':card.kind==='expose'?'锦囊':card.kind==='response'?'响应':card.kind==='recover'?'恢复':'谋略'} · 1行动点${combo.label?` · 连携：${combo.label}`:''}</small>`;
    button.addEventListener('mouseenter',()=>{tick();intentHint.textContent=card.kind==='response'?'留在手里，等对手进攻时使用。':card.text;});
    button.addEventListener('mouseleave',()=>{intentHint.textContent=playerAP?`你还可以使用 ${playerAP} 张牌，或主动结束行动。`:'行动点已用完，请结束行动。';});
    button.addEventListener('click',()=>playCard(index));
    button.draggable=!button.disabled;
    button.addEventListener('dragstart',event=>{draggedCardIndex=index;event.dataTransfer.effectAllowed='move';playerPlayedCard.classList.add('drag-ready');});
    button.addEventListener('dragend',()=>playerPlayedCard.classList.remove('drag-ready'));
    hand.append(button);
  });
  updateDuelUI();
}

function beginRound(skipDraw=false) {
  if (duelDay>12) { finishDuel(); return; }
  currentPhase='strategy';playerAP=2;playerAttackPlayed=false;dailyStrategy=null;lastPlayerCardKind=null;passiveTriggeredThisDay=false;
  let drawCount=skipDraw?0:2;if(playerCandidate.id==='hungry'&&playerCredibility<=3)drawCount+=1;if(drawCount)drawDuelCards('player',drawCount);
  if(playerCandidate.id==='ceo'&&duelDay%3===0)playerAP+=1;
  setRoundDisplay();
  hostLine.textContent=`第 ${duelDay} 个竞选日：先决定今天要强攻、稳守，还是组织基层。`;
  intentHint.textContent=describeOpponentIntent();
  renderHand();
}

function setupBattle() {
  setScene(battleScene);
  if(audio&&musicBus){musicBus.gain.setTargetAtTime(1,audio.currentTime,.1);if(!musicTimer)startMusic();}
  battlePlayerPortrait.src=`${assetBase}${playerCandidate.image}`;battlePlayerAlias.textContent=playerCandidate.alias;
  battleOpponentPortrait.src=`${assetBase}${opponentCandidate.image}`;battleOpponentAlias.textContent=opponentCandidate.alias;
  skillButtonName.textContent=playerCandidate.skillName;allyButtonName.textContent=playerCandidate.ally==='暂无可靠盟友'?'无人接听':playerCandidate.ally;
  passiveText.textContent=`被动：${PASSIVES[playerCandidate.id]||'身份效果尚未公开'}`;
  playerSupport=50;duelDay=1;playerCredibility=6;opponentCredibility=6;playerGuardTokens=0;opponentGuardTokens=0;
  playerDeck=makeDuelDeck(playerCandidate);opponentDeck=makeDuelDeck(opponentCandidate);playerHand=[];opponentHand=[];playerDiscard=[];opponentDiscard=[];
  skillUsed=false;allyUsed=false;opponentSkillUsed=false;regionOwners={};regionInfluence={};REGIONS.forEach(r=>regionInfluence[r]=0);lastOpponentCard=null;playerPlayedHistory=[];opponentPlayedHistory=[];draftOverlay.hidden=true;
  if(playerCandidate.id==='princess')playerGuardTokens=1;
  playerPlayedCard.innerHTML='<small>己方竞选公示 · 尚未出牌</small>';opponentPlayedCard.innerHTML='<small>对手竞选公示 · 尚未出牌</small>';
  [...regionMonitor.children].forEach(button=>button.className='');
  drawDuelCards('player',5);drawDuelCards('opponent',5);updateDuelUI();
}

function startFormalBattle(){tutorialMode=false;tutorialGuide.hidden=true;tutorialChoice.hidden=true;setupBattle();beginRound(true);}

function startTraining(){
  tutorialMode=true;tutorialChoice.hidden=true;setupBattle();
  tutorialTitle.textContent='培训：双人竞选牌局';
  tutorialText.textContent='每天先选强攻、稳守或组织，再使用手牌。留意卡牌连携；夺下地区后还能选择稀有牌加入本局牌组。';
  tutorialGuide.hidden=false;beginRound(true);
}

function beginTutorialStep(){startTraining();}

function changeSupport(delta,extraRegion=0){
  playerSupport+=delta;
  const region=currentRegion();if(region)regionInfluence[region]+=delta+Math.sign(delta)*extraRegion;
  updateSupport();
}

function flashActor(actor,float,text){actor.classList.add('hit');float.textContent=text;float.classList.add('show');window.setTimeout(()=>{actor.classList.remove('hit');float.classList.remove('show');},900);}

function playCard(index){
  if(currentPhase!=='player'||playerAP<=0)return;
  const card=playerHand[index];if(!card||card.kind==='response'||(card.kind==='attack'&&playerAttackPlayed))return;
  ensureAudio();thud();if(tutorialMode)tutorialGuide.hidden=true;
  const combo=getCombo(card);const firstAttack=!playerAttackPlayed;
  playerHand.splice(index,1);discardCard('player',card);playerAP-=1;
  addPlayedCard('player',card);
  let passiveSupport=0;
  if(playerCandidate.id==='general'&&card.kind==='attack'&&firstAttack)passiveSupport+=1;
  if(playerCandidate.id==='takagi'&&card.effect==='campaign')passiveSupport+=1;
  if(playerCandidate.id==='mic'&&playerSupport<50&&card.kind!=='response')passiveSupport+=1;
  if(playerCandidate.id==='romance'&&card.kind==='expose')passiveSupport+=1;
  if(card.kind==='attack'){playerAttackPlayed=true;resolvePlayerAttack(card,{...combo,support:combo.support+passiveSupport});}
  else if(card.kind==='expose')resolvePlayerAttack(card,{...combo,support:combo.support+passiveSupport});
  else if(card.kind==='recover'){
    const healed=Math.min(card.heal||1,6-playerCredibility);
    if(healed>0){playerCredibility+=healed;hostLine.textContent=`${playerCandidate.alias}休整行程，恢复 ${healed} 点信誉。`;if(playerCandidate.id==='prince')changeSupport(2);}
    else{changeSupport(3);hostLine.textContent='信誉已满，休整改为争取 3% 支持。';}
  } else if(card.effect==='draw'){drawDuelCards('player',(card.draw||2)+combo.draw);hostLine.textContent=`民调送达：摸取 ${card.draw||2} 张牌。`;}
  else {changeSupport((card.support||3)+passiveSupport,card.region||0);drawDuelCards('player',(card.effect==='signature'?1:0)+combo.draw);hostLine.textContent=`${card.name}完成，当前地区组织开始运转。`;}
  if(playerCandidate.id==='math'&&card.kind==='scheme'&&!passiveTriggeredThisDay){playerAP+=1;passiveTriggeredThisDay=true;hostLine.textContent+=' 数据模型返还了 1 行动点。';}
  if(combo.label)hostLine.textContent+=` 连携发动：${combo.label}。`;
  lastPlayerCardKind=card.kind;
  if(checkCollapse())return;
  renderHand();
  intentHint.textContent=playerAP?`你还可以使用 ${playerAP} 张牌，或结束行动。`:'行动点已用完，请结束行动。';
}

function resolvePlayerAttack(card,combo={support:0,damage:0}){
  let blocked=false;
  if(opponentGuardTokens>0){opponentGuardTokens-=1;blocked=true;}
  else{
    const responseIndex=opponentHand.findIndex(c=>c.kind==='response');
    const chance=chosenDifficulty==='low'?.5:chosenDifficulty==='high'?1:.8;
    if(responseIndex>=0&&Math.random()<chance){const response=opponentHand.splice(responseIndex,1)[0];discardCard('opponent',response);blocked=true;addPlayedCard('opponent',response);if(response.counter)changeSupport(-2);}
  }
  if(blocked){hostLine.textContent=`${opponentCandidate.alias}打出回应，抵消了“${card.name}”。`;}
  else{
    const damage=(card.damage||1)+(combo.damage||0);const support=(card.support||2)+(combo.support||0)+(dailyStrategy==='attack'?2:0);
    opponentCredibility=Math.max(0,opponentCredibility-damage);changeSupport(support,card.region||0);
    if(card.discard&&opponentHand.length)discardCard('opponent',opponentHand.splice(Math.floor(Math.random()*opponentHand.length),1)[0]);
    hostLine.textContent=`“${card.name}”命中！对手失去 ${damage} 点信誉，民意上升 ${support}%。`;flashActor(opponentActor,opponentFloat,`信誉 -${damage}`);
  }
  updateDuelUI();
}

function activateSkill(){
  if(skillUsed||currentPhase!=='player')return;ensureAudio();thud(true);skillUsed=true;
  const id=playerCandidate.id;let line=playerCandidate.skillName;
  if(id==='math')drawDuelCards('player',3);
  else if(id==='takagi'){changeSupport(6,3);}
  else if(id==='caretaker'){lastOpponentCard?playerHand.push({...lastOpponentCard,id:`copy-${Math.random()}`}):drawDuelCards('player',2);}
  else if(id==='general'){opponentCredibility=Math.max(0,opponentCredibility-1);changeSupport(4,3);flashActor(opponentActor,opponentFloat,'信誉 -1');}
  else if(id==='prince'){playerCredibility=Math.min(6,playerCredibility+1);drawDuelCards('player',1);}
  else if(id==='cleaner'){playerGuardTokens+=1;drawDuelCards('player',2);}
  else if(id==='mic')changeSupport(playerSupport<50?8:4,3);
  else if(id==='ceo'){playerAP+=1;drawDuelCards('player',2);}
  else if(id==='princess')playerGuardTokens+=2;
  else if(id==='lawyer'){playerCredibility=Math.min(6,playerCredibility+1);playerGuardTokens+=1;}
  else if(id==='romance'){for(let i=0;i<2&&opponentHand.length;i+=1)discardCard('opponent',opponentHand.splice(Math.floor(Math.random()*opponentHand.length),1)[0]);changeSupport(3);}
  else if(id==='hungry'){playerCredibility=Math.max(1,playerCredibility-1);playerAP+=2;drawDuelCards('player',3);}
  else{opponentCredibility=0;line='本届选举失去继续举行的必要';}
  hostLine.textContent=`${playerCandidate.alias}发动“${line}”。`;skillButton.classList.add('armed');skillButtonName.textContent='本局已使用';
  renderHand();checkCollapse();
}

function activateAlly(){
  if(allyUsed||currentPhase!=='player'||playerCandidate.ally==='暂无可靠盟友')return;
  ensureAudio();thud();allyUsed=true;playerAP+=1;drawDuelCards('player',2);changeSupport(3,1);
  allyButton.classList.add('armed');allyButtonName.textContent='连线完成';hostLine.textContent=`${playerCandidate.ally}送来两张牌和一次额外行动。`;renderHand();
}

function endPlayerTurn(){
  if(currentPhase!=='player')return;trimHand('player');currentPhase='opponent';opponentAP=2;opponentAttackPlayed=false;
  setRoundDisplay();renderHand();hostLine.textContent=`${opponentCandidate.alias}开始行动……`;intentHint.textContent='对手正在整理手牌；若遭到攻势，你可以打出响应。';
  drawDuelCards('opponent',2);window.setTimeout(performOpponentAction,520);
}

function chooseOpponentCard(){
  const active=opponentHand.filter(c=>c.kind!=='response'&&!(c.kind==='attack'&&opponentAttackPlayed));
  if(!active.length)return null;
  if(opponentCredibility<=2){const heal=active.find(c=>c.kind==='recover');if(heal)return heal;}
  if(chosenDifficulty==='low')return active[Math.floor(Math.random()*active.length)];
  const attack=active.find(c=>c.kind==='expose')||active.find(c=>c.kind==='attack');
  const utility=active.find(c=>c.effect==='draw');
  if(chosenDifficulty==='high')return opponentHand.length<4&&utility?utility:attack||active[0];
  return Math.random()<.72&&attack?attack:(utility||active[0]);
}

function performOpponentAction(){
  if(currentPhase!=='opponent')return;
  if(!opponentSkillUsed&&duelDay>=2){
    opponentSkillUsed=true;drawDuelCards('opponent',2);opponentGuardTokens+=chosenDifficulty==='high'?2:1;changeSupport(chosenDifficulty==='low'?-2:chosenDifficulty==='high'?-5:-3,1);
    hostLine.textContent=`${opponentCandidate.alias}发动人物技能，补充手牌并建立防守。`;
  }
  if(opponentAP<=0){finishOpponentTurn();return;}
  const card=chooseOpponentCard();if(!card){finishOpponentTurn();return;}
  opponentHand.splice(opponentHand.indexOf(card),1);discardCard('opponent',card);opponentAP-=1;lastOpponentCard=card;
  addPlayedCard('opponent',card);
  if(card.kind==='attack'){opponentAttackPlayed=true;beginEnemyAttack(card);return;}
  if(card.kind==='expose'){beginEnemyAttack(card);return;}
  if(card.kind==='recover'){
    if(opponentCredibility<6)opponentCredibility=Math.min(6,opponentCredibility+(card.heal||1));else changeSupport(-3);
    hostLine.textContent=`${opponentCandidate.alias}使用行程休整。`;
  }else if(card.effect==='draw'){drawDuelCards('opponent',2);hostLine.textContent='对手取得一份新民调，补充两张手牌。';}
  else{changeSupport(-(card.support||3),card.region||0);drawDuelCards('opponent',card.effect==='signature'?1:0);hostLine.textContent=`对手发动“${card.name}”，争夺当前地区。`;}
  updateDuelUI();if(checkCollapse())return;window.setTimeout(performOpponentAction,650);
}

function beginEnemyAttack(card){
  if(playerGuardTokens>0){playerGuardTokens-=1;hostLine.textContent='预先准备的防守档案抵消了对手攻势。';updateDuelUI();window.setTimeout(performOpponentAction,650);return;}
  const responses=playerHand.map((c,i)=>({c,i})).filter(x=>x.c.kind==='response');
  if(!responses.length){applyEnemyHit(card);return;}
  pendingEnemyCard=card;reactionTitle.textContent=`对手打出“${card.name}”`;
  reactionText.textContent=`若不回应，你将失去 ${card.damage||1} 点信誉，对手还会夺走民意。响应牌不会消耗下回合行动点。`;
  reactionCards.innerHTML='';responses.forEach(({c,i})=>{const b=document.createElement('button');b.textContent=`${c.name}${c.counter?' · 反夺2%':''}`;b.addEventListener('click',()=>resolvePlayerReaction(i));reactionCards.append(b);});
  reactionOverlay.hidden=false;
}

function resolvePlayerReaction(index){
  const response=playerHand[index];if(!response||response.kind!=='response')return;
  playerHand.splice(index,1);discardCard('player',response);reactionOverlay.hidden=true;
  addPlayedCard('player',response);
  if(response.counter)changeSupport((response.counterSupport||2)+(playerCandidate.id==='cleaner'?1:0));
  if(playerCandidate.id==='lawyer')drawDuelCards('player',1);
  hostLine.textContent=`${playerCandidate.alias}用“${response.name}”抵消了攻势。`;pendingEnemyCard=null;renderHand();window.setTimeout(performOpponentAction,620);
}

function applyEnemyHit(card=pendingEnemyCard){
  reactionOverlay.hidden=true;pendingEnemyCard=null;playerCredibility=Math.max(0,playerCredibility-(card.damage||1));changeSupport(-(card.support||2),card.region||0);
  if(card.discard&&playerHand.length)discardCard('player',playerHand.splice(Math.floor(Math.random()*playerHand.length),1)[0]);
  hostLine.textContent=`对手的“${card.name}”命中，你失去 ${card.damage||1} 点信誉。`;flashActor(playerActor,playerFloat,`信誉 -${card.damage||1}`);renderHand();
  if(checkCollapse())return;window.setTimeout(performOpponentAction,650);
}

function claimCurrentRegion(){
  const region=currentRegion();if(!region)return;
  const influence=regionInfluence[region];const owner=influence===0?(playerSupport>=50?'player':'opponent'):(influence>0?'player':'opponent');regionOwners[region]=owner;
  const button=[...regionMonitor.children].find(b=>b.dataset.region===region);if(button){button.classList.remove('player','opponent','focus');button.classList.add(owner);}
  hostLine.textContent=`${region}两日争夺结束，归入${owner==='player'?playerCandidate.alias:opponentCandidate.alias}阵营。`;
  return owner;
}

function showDraft(region){
  currentPhase='draft';draftTitle.textContent=`${region}办公室：选择一张稀有牌`;draftCards.innerHTML='';
  const pool=shuffleDuel(REWARD_CARDS.map(card=>({...card}))).slice(0,3);
  pool.forEach(card=>{
    const button=document.createElement('button');button.className=`game-card ${card.kind} rare`;button.innerHTML=`<i class="card-cover"></i><b>${card.name}</b><span>${card.text}</span><small>地区奖励 · 加入本局牌组</small>`;
    button.addEventListener('click',()=>{playerHand.push({...card,id:`reward-${Date.now()}-${Math.random()}`});draftOverlay.hidden=true;hostLine.textContent=`${region}办公室送来“${card.name}”，已直接加入手牌。`;continueAfterRegion();});draftCards.append(button);
  });
  draftOverlay.hidden=false;updateDuelUI();
}

function continueAfterRegion(){
  if(duelDay>12){finishDuel();return;}currentPhase='between';window.setTimeout(()=>beginRound(false),650);
}

function finishOpponentTurn(){
  currentPhase='between';trimHand('opponent');let wonRegion=null;const finishedRegion=currentRegion();
  if(duelDay<=10&&duelDay%2===0)wonRegion=claimCurrentRegion();duelDay+=1;
  if(wonRegion==='player'){showDraft(finishedRegion);return;}continueAfterRegion();
}

function checkCollapse(){
  if(playerCredibility>0&&opponentCredibility>0)return false;
  finishDuel(playerCredibility<=0?'opponent':'player');return true;
}

function finishDuel(collapseWinner=null){
  currentPhase='ended';reactionOverlay.hidden=true;
  REGIONS.forEach(region=>{if(!regionOwners[region])regionOwners[region]=collapseWinner||(playerSupport>=50?'player':'opponent');});
  if(collapseWinner==='player')playerSupport=Math.max(60,playerSupport);if(collapseWinner==='opponent')playerSupport=Math.min(40,playerSupport);
  window.setTimeout(startTally,500);
}

function showCrisis(){return;}
function resolveCrisis(){crisisOverlay.hidden=true;}
function advanceBattle(){endPlayerTurn();}
function resolveRound(){hostLine.textContent='新版已改为双人回合制牌局。';}

function flashBlack(callback) {
  blackout.classList.remove('show');
  void blackout.offsetWidth;
  blackout.classList.add('show');
  window.setTimeout(callback, 440);
}

function enterDesk() {
  setScene(deskScene);
  resetDesk();
  window.setTimeout(() => showSubtitle('办事员', '请阅读文件，并在确认书上盖章。', 'clerk'), 260);
}

function resetDesk() {
  resolved = false;
  dragging = false;
  stampOffset = { x: 0, y: 0 };
  stamp.style.transform = '';
  stamp.classList.remove('is-held', 'is-locked');
  sealResult.classList.remove('show');
  sealResult.style.left = '';
  sealResult.style.top = '';
  wrongSeal.classList.remove('show');
  wrongSeal.style.left = '';
  wrongSeal.style.top = '';
}

function beginStamp(event) {
  if (resolved) return;
  ensureAudio();
  dragging = true;
  tick();
  stamp.classList.add('is-held');
  stamp.setPointerCapture(event.pointerId);
  dragOffset.x = event.clientX - stampOffset.x;
  dragOffset.y = event.clientY - stampOffset.y;
}

function moveStamp(event) {
  if (!dragging || resolved) return;
  stampOffset.x = event.clientX - dragOffset.x;
  stampOffset.y = event.clientY - dragOffset.y;
  stamp.style.transform = `translate(${stampOffset.x}px, ${stampOffset.y}px)`;
}

function finishStamp(event) {
  if (!dragging || resolved) return;
  dragging = false;
  stamp.classList.remove('is-held');
  const rect = paperTarget.getBoundingClientRect();
  const nx = (event.clientX - rect.left) / rect.width;
  const ny = (event.clientY - rect.top) / rect.height;
  const sideInset = Math.max(0, .08 * (1 - ny));
  const correct = ny >= 0 && ny <= 1 && nx >= sideInset && nx <= 1 - sideInset;
  if (correct) approveForm(event.clientX, event.clientY);
  else rejectForm(event.clientX, event.clientY);
}

function approveForm(clientX, clientY) {
  resolved = true;
  stamp.classList.add('is-locked');
  const view = viewport.getBoundingClientRect();
  const left = Math.max(27.5, Math.min(51.5, ((clientX - view.left) / view.width) * 100 - 6));
  const top = Math.max(35.5, Math.min(71.5, ((clientY - view.top) / view.height) * 100 - 4.5));
  sealResult.style.left = `${left}%`;
  sealResult.style.top = `${top}%`;
  thud();
  viewport.classList.add('shake');
  sealResult.classList.add('show');
  window.setTimeout(() => viewport.classList.remove('shake'), 250);
  window.setTimeout(() => showSubtitle('办事员', '登记完成。后果自负。', 'clerk'), 270);
  window.setTimeout(() => flashBlack(() => {
    subtitleBox.hidden = true;
    setScene(endScene);
  }), 1900);
}

function rejectForm(clientX, clientY) {
  resolved = true;
  const view = viewport.getBoundingClientRect();
  const left = Math.max(2, Math.min(84, ((clientX - view.left) / view.width) * 100 - 6));
  const top = Math.max(5, Math.min(78, ((clientY - view.top) / view.height) * 100 - 4));
  wrongSeal.style.left = `${left}%`;
  wrongSeal.style.top = `${top}%`;
  wrongSeal.classList.add('show');
  showSubtitle('办事员', '位置错误。重新填写。', 'clerk', 1.25);
  window.setTimeout(() => flashBlack(() => {
    resetDesk();
    showSubtitle('办事员', '这次，盖在确认书上。', 'clerk');
  }), 1350);
}

startButton.addEventListener('mouseenter', tick);
startButton.addEventListener('focus', tick);
startButton.addEventListener('click', () => {
  ensureAudio();
  startButton.disabled = true;
  showSubtitle('主持人', '候选人已经到场。国民仍未决定。', 'host');
  window.setTimeout(() => flashBlack(enterDesk), 1500);
});

soundButton.addEventListener('click', () => {
  ensureAudio();
  muted = !muted;
  if (master) master.gain.setTargetAtTime(muted ? 0 : .82, audio.currentTime, .015);
  soundButton.textContent = muted ? '声音：关' : '声音：开';
  soundButton.setAttribute('aria-pressed', String(muted));
  if (!muted) tick();
});

returnButton.addEventListener('click', () => {
  tick();
  stopAlarm();
  subtitleBox.hidden = true;
  startButton.disabled = false;
  flashBlack(() => setScene(coverScene));
});

prevCandidate.addEventListener('mouseenter', tick);
nextCandidate.addEventListener('mouseenter', tick);
prevCandidate.addEventListener('click', () => shiftCandidate(-1));
nextCandidate.addEventListener('click', () => shiftCandidate(1));

candidateStage.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (wheelLocked || Math.abs(event.deltaY) < 8) return;
  wheelLocked = true;
  shiftCandidate(event.deltaY > 0 ? 1 : -1);
  window.setTimeout(() => { wheelLocked = false; }, 260);
}, { passive: false });

confirmCandidate.addEventListener('mouseenter', tick);
confirmCandidate.addEventListener('click', () => {
  ensureAudio();
  thud();
  if (selectedCandidate.hidden) {
    viewport.classList.add('shake');
    showSubtitle('档案员', '这份档案不在名单里。请立即关闭。', 'clerk', 1.35);
    window.setTimeout(() => viewport.classList.remove('shake'), 260);
    window.setTimeout(() => flashBlack(() => subtitleBox.hidden = true), 1250);
    return;
  }
  confirmCandidate.disabled = true;
  confirmCandidate.textContent = '已登记';
  showSubtitle('档案员', `${selectedCandidate.alias}，登记完成。对手将由委员会分配。`, 'clerk');
  window.setTimeout(() => flashBlack(() => {
    confirmCandidate.disabled = false;
    confirmCandidate.textContent = '选择此人';
    enterMatchScene();
  }), 1200);
});

[...difficultyButtons.children].forEach(button => {
  button.addEventListener('mouseenter', tick);
  button.addEventListener('click', () => chooseDifficulty(button.dataset.difficulty));
});

drawLever.addEventListener('mouseenter', tick);
drawLever.addEventListener('click', runOpponentDraw);

backToCandidates.addEventListener('click', () => {
  tick();
  window.clearInterval(drawTimer);
  drawTimer = null;
  flashBlack(() => setScene(endScene));
});

appealButton.addEventListener('click', () => {
  ensureAudio();
  thud();
  appealButton.disabled = true;
  appealButton.textContent = '异议已驳回';
  showSubtitle('编排员', '异议已收到。安排不变。', 'clerk');
  window.setTimeout(() => { subtitleBox.hidden = true; }, 1300);
});

acceptMatch.addEventListener('mouseenter', tick);
acceptMatch.addEventListener('click', () => {
  if (!opponentCandidate) return;
  ensureAudio();
  thud();
  acceptMatch.disabled = true;
  flashBlack(enterLoadingScene);
});

tuningKnob.addEventListener('pointerdown', event => {
  ensureAudio();
  tuningDragging = true;
  tuningKnob.setPointerCapture(event.pointerId);
  setTuningFromPointer(event);
});
tuningKnob.addEventListener('pointermove', event => {
  if (tuningDragging) setTuningFromPointer(event);
});
tuningKnob.addEventListener('pointerup', () => { tuningDragging = false; });
tuningKnob.addEventListener('pointercancel', () => { tuningDragging = false; });
tuningKnob.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  ensureAudio();
  updateTuning(tuningValue + (event.key === 'ArrowRight' ? 4 : -4));
  tick();
});
tuningTrack.addEventListener('pointerdown', event => {
  if (event.target === tuningKnob) return;
  ensureAudio();
  setTuningFromPointer(event);
});

playerIntelButton.addEventListener('click', () => {
  ensureAudio(); tick();
  loadingHint.textContent = `己方策略：${playerCandidate.route}。人物技能“${playerCandidate.skillName}”：${playerCandidate.skillText}`;
});
opponentIntelButton.addEventListener('click', () => {
  ensureAudio(); tick();
  const note = OPPONENT_NOTES[opponentCandidate.id];
  loadingHint.textContent = `对手公开档案：${opponentCandidate.route}。${note ? note[1] : '其余资料已被封存。'}`;
});

connectLive.addEventListener('mouseenter', tick);
connectLive.addEventListener('click', () => {
  if (connectLive.disabled) return;
  ensureAudio();
  thud(true);
  onAirLamp.textContent = '● ON AIR';
  onAirLamp.classList.add('is-on');
  broadcastReady.hidden = false;
  showSubtitle('主持人', '直播信号已经接通。双方不得离席。', 'host');
  window.setTimeout(() => {
    subtitleBox.hidden = true;
    setupBattle();
    tutorialChoice.hidden = false;
  }, 1500);
});

startTutorial.addEventListener('click', startTraining);
skipTutorial.addEventListener('click', startFormalBattle);
skillButton.addEventListener('mouseenter', tick);
skillButton.addEventListener('click', activateSkill);
allyButton.addEventListener('mouseenter', tick);
allyButton.addEventListener('click', activateAlly);
[...strategyButtons.children].forEach(button=>{
  button.addEventListener('mouseenter',tick);
  button.addEventListener('click',()=>selectStrategy(button.dataset.strategy));
});
endTurnButton.addEventListener('mouseenter', tick);
endTurnButton.addEventListener('click', endPlayerTurn);
takeHitButton.addEventListener('click', () => { if (pendingEnemyCard) applyEnemyHit(pendingEnemyCard); });
nextRoundButton.addEventListener('click', advanceBattle);
playerPlayedCard.addEventListener('dragover', event => { event.preventDefault(); event.dataTransfer.dropEffect='move'; });
playerPlayedCard.addEventListener('drop', event => { event.preventDefault(); playerPlayedCard.classList.remove('drag-ready'); if(draggedCardIndex>=0){const index=draggedCardIndex;draggedCardIndex=-1;playCard(index);} });
crisisApologize.addEventListener('click', () => resolveCrisis('apologize'));
crisisDeny.addEventListener('click', () => resolveCrisis('deny'));
crisisDistract.addEventListener('click', () => resolveCrisis('distract'));
finalResultButton.addEventListener('click', () => { ensureAudio(); thud(true); flashBlack(showEnding); });

victoryFader.addEventListener('input', () => {
  if (Number(victoryFader.value) >= 96) {
    victoryFader.value = 100;
    printNewspaper.disabled = false;
    endingWinnerAlias.textContent = `${playerCandidate.alias}　当选人`;
    hostLine.textContent = chosenSpeech;
    thud();
  }
});
printNewspaper.addEventListener('click', () => showNewspaper(endingHeader.textContent, `${playerCandidate.alias}以 ${playerElectoralScore} 席、${playerSupport}% 的全国支持率完成竞选。胜选演说：“${chosenSpeech}” 最后转向的地区已经被装入机密档案。`));
[...document.querySelectorAll('[data-defeat]')].forEach(button => button.addEventListener('click', () => {
  const action=button.dataset.defeat;
  const headline=action==='拒绝离开演播室'?'国民已经决定，候选人本人尚未决定':action==='要求重新计票'?'计票机再次开始工作':'候选人从侧门离场';
  showNewspaper(headline, `${playerCandidate.alias}以 ${playerElectoralScore} 席、${playerSupport}% 的支持率结束竞选，并选择“${action}”。电视台已关闭其麦克风。`);
}));
rematchButton.addEventListener('click', () => { newspaper.hidden=true; flashBlack(enterMatchScene); });
changeCandidateButton.addEventListener('click', () => { newspaper.hidden=true; flashBlack(() => setScene(endScene)); });

stamp.addEventListener('pointerdown', beginStamp);
stamp.addEventListener('pointermove', moveStamp);
stamp.addEventListener('pointerup', finishStamp);
stamp.addEventListener('pointercancel', finishStamp);
stamp.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && !resolved) {
    event.preventDefault();
    ensureAudio();
    stampOffset = { x: -viewport.clientWidth * .17, y: viewport.clientHeight * .31 };
    stamp.style.transform = `translate(${stampOffset.x}px, ${stampOffset.y}px)`;
    const rect = paperTarget.getBoundingClientRect();
    approveForm(rect.left + rect.width * .68, rect.top + rect.height * .72);
  }
});

document.addEventListener('visibilitychange', () => {
  if (!audio) return;
  if (document.hidden) audio.suspend();
  else if (!muted) audio.resume();
});

drawFormCopy();
renderReel();
renderCandidate();

if (window.location.hash === '#desk-preview') {
  setScene(deskScene);
  resetDesk();
}

if (window.location.hash === '#select-preview') setScene(endScene);
if (window.location.hash === '#hidden-preview') {
  setScene(endScene);
  hiddenRevealed = true;
  renderCandidate(HIDDEN_CANDIDATE);
}

if (window.location.hash === '#match-preview') {
  selectedCandidate = CANDIDATES[0];
  enterMatchScene();
  chooseDifficulty('mid');
  opponentCandidate = CANDIDATES[3];
  showDrawCandidate(opponentCandidate, true);
}

if (window.location.hash === '#loading-preview') {
  playerCandidate = CANDIDATES[0];
  opponentCandidate = CANDIDATES[3];
  chosenDifficulty = 'mid';
  enterLoadingScene();
}

if (window.location.hash === '#battle-preview') {
  playerCandidate=CANDIDATES[0]; opponentCandidate=CANDIDATES[3]; chosenDifficulty='mid'; startFormalBattle();
}

if (window.location.hash === '#tally-preview') {
  playerCandidate=CANDIDATES[0]; opponentCandidate=CANDIDATES[3]; playerSupport=57; regionOwners={'首都圈':'player','江南':'opponent','忠清':'player'}; startTally();
}

if (window.location.hash === '#ending-preview') {
  playerCandidate=CANDIDATES[0]; opponentCandidate=CANDIDATES[3]; playerSupport=57; showEnding();
}

if (window.location.hash === '#resolution-preview') {
  playerCandidate=CANDIDATES[0]; opponentCandidate=CANDIDATES[3]; chosenDifficulty='mid'; startFormalBattle();
  resolveRound({type:'expose',name:'匿名录音'},{type:'speech',name:'全国电视演说'},7,'爆料打断演讲','首都圈');
}
