  'use strict';
  import { words } from "./words.js";
  import { base64 } from "./base64.js";

  {
    //初期設定

    function setWord() {
      timer.textContent = 'Time:' + time;
      random = Math.floor(Math.random() * words.length);
      word = words.splice([random],1)[0];
      targetEn.textContent = (Array.isArray(word.en)) ? word.en[0] : word.en;
      targetJp.textContent = word.jp;
      loc = 0;
    }
    //終了処理の関数
    function finish() {
      clearInterval(countdown);
      timer.textContent = '正タイプ数' + count + '文字でした!';
      typeMiss.textContent = '誤タイプ数' + missCount + '文字でした!';
    }

    let time = 60;
    let word = { en: "", jp: "" };
    let wordJp;
    let random;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    let count = 0;
    let missCount = 0;
    let countdown;
    let isPlayEnd = false;
    let typed = "normal";

    const timer = document.getElementById('timer');
    const typeMiss = document.getElementById('typeMiss');
    const targetEn = document.getElementById('targetEn');
    const targetJp = document.getElementById('targetJp');
    const result = document.getElementById('result');
    const sound = new Audio("data:audio/mp3;base64," + base64);

    result.textContent = 'キーボードをタイプで開始!! プレイ中ESCキーでリトライ!!';

    //ゲームスタート
    document.addEventListener('keyup', () => {
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      result.textContent = ''
      setInterval(() => {
        timer.textContent = 'Time:' + --time;
        if(time <= 0) finish();
      },1000);
      startTime = Date.now();
      setWord();
    });

    //escでリトライ
    document.addEventListener('keyup', e => {
      if (isPlayEnd === true) {
        return;
      }

      if (e.keyCode === 27) {
        location.reload(false);
      return;
      }
    });

    //タイピングゲーム中
    document.addEventListener('keypress', e => {
    let changeWordEn = [];
    const issueJ = word.en[0];
    const issueZ = word.en[1];
      if (isPlayEnd === true) {
        return;
      }

      if (e.keyCode === 27) {
        location.reload(false);
        return;
      }
      //ローマ字の問題の中に配列のもののみに適用
      if (Array.isArray(word.en)) {
        // zをタイプ
          if((e.key === "z") && (issueJ[loc] === "j")) {
            typed = "z";
            loc++;
            count++;
            targetEn.textContent = '_'.repeat(loc) + issueZ.substring(loc);
            }
        // jをタイプ
          else if((e.key === "j") && (issueZ[loc] === "z")) {
            typed = "j";
            loc++;
            count++;
            targetEn.textContent = '_'.repeat(loc) + issueJ.substring(loc)
            }
        // j,z含む問題でのタイプミス
          else if(((typed === "j" || typed === "normal") && e.key !== issueJ[loc]) || (typed === "z" && e.key !== issueZ[loc])) {
            sound.play();
            sound.currentTime = 0;
            missCount++;
            return;
          }
          else {
          // j,z含む正タイプ時の処理
          loc++;
          count++;

          // zをタイプした後はzの問題を反映させる
          if(typed === "z") {
            changeWordEn = issueZ;
          // 一度zをタイプしzの問題が反映された後にjもしくは通常タイプ後はjの問題を反映させる
          } else if(typed === "j" || typed === "normal") {
            changeWordEn = issueJ;
          }
          targetEn.textContent = '_'.repeat(loc) + changeWordEn.substring(loc);
          }

         // zでタイプ後に問題を終えたらtypedを初期化して次の問題を表示
          if(typed === "z") {
          if (loc === issueZ.length) {
            typed = "normal";
            setWord();
          }}
         // jでタイプ後に問題を終えたらtypedを初期化して次の問題を表示 
          else if(typed === "j") {
          if (loc === issueJ.length) {
            typed = "normal";
            setWord();
          }}
      } else {
          // j,zのない問題の処理
          if(word.en === "" && word.jp === "") {
            return;
          }

          if (e.key !== word.en[loc]) {
            sound.play();
            sound.currentTime = 0;
            missCount++;
            return;
          }

          loc++;
          count++;

          targetEn.textContent = '_'.repeat(loc) + word.en.substring(loc);

          if (loc === word.en.length) {
            setWord();
          }
      }
    });

    //結果表示
    document.addEventListener('keyup', () => {
      if (isPlayEnd === true) {
        return;
      }

        if (time <= 0) {

          isPlayEnd = true;

          const video = document.getElementById('video-area');
          video.innerHTML = '<video autoplay="autoplay" loop="loop" muted="muted" class="ending_video" src="/videos/ending.mov"></video>';
          targetJp.textContent = 'Nice!!Riding!!';
          targetEn.innerHTML = '';

          const link = document.querySelector('.twitter-share');
          const url = `https://twitter.com/share?&url=https://surf-typing.herokuapp.com/&text=60秒間で正タイプ${count}文字・誤タイプ${missCount}文字でした。あなたに贈る言葉『${word.jp}』&hashtags=海,タイピングゲーム,サーフィン,ギター,前向き,SurfTyping&lang=ja`;

          link.setAttribute('href', url);

          link.innerHTML = '<i class="fab fa-twitter share-button"></i>';

          const retry = document.querySelector('.retry');
          retry.innerText = 'Retry!!';

          return;
        }
      });
  }
