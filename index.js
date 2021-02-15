const quiz = [
  {
    question: 'Q1　大学で所属している部活は？',
    answers: [ 'テニス', '軽音', 'アメリカンフットボール', 'アーチェリー'],
    correct: 'アメリカンフットボール'
  }, {
    question: 'Q2 バイト先は？',
    answers: [ 'ローソン', 'ほっかほっか亭', 'ドミノピザ', '餃子の王将'],
    correct: 'ほっかほっか亭'
  } ,{
    question: 'Q3 好きな季節は？',
    answers: [ '春', '夏', '秋', '冬'],
    correct: '秋'
  }, {
    question: 'Q4 好きなゲームは？',
    answers: [ 'スマブラ', 'モンスターハンター', 'メタルギア', 'ロックマンエグゼ'],
    correct: '全部！'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!  正解は「' + quiz[quizCount].correct + '」!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '結果発表！スコアは' + score + '/' + quizLen + 'です！';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
