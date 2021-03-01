import { init } from 'ityped';

init(`#element`, {
  // required - for now, only accepting texts
    typeSpeed: 45,
    //表示する時のスピード
    backSpeed: 30,
    //戻る時のスピード
    startDelay: 500,
    //スタート時の遅延時間
    backDelay: 500,
    //戻る時の遅延時間
    loop: false,
    //ループの有無
    showCursor: true,
    //カーソル表示の有無
    cursorChar: "|",
    //カーソルの形状
    onFinished: function(){}
});
