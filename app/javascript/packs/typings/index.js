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
    let isKeyCode = 0;
    let startTime;
    let isPlaying = false;
    let count = 0;
    let missCount = 0;
    let countdown;
    let isPlayEnd = false;

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
      if (isPlayEnd === true) {
        return;
      }

      if (e.keyCode === 27) {
        location.reload(false);
        return;
      }
      //ローマ字の問題の中に配列のもののみに適用
      if (Array.isArray(word.en)) {
          //z,jだけの特例処理
          if((e.key == "z") && (word.en[0][loc]=="j")) {
            isKeyCode = 1;
            loc++;
            count++;
            targetEn.textContent = '_'.repeat(loc) + word.en[1].substring(loc);
            }
          else if((e.key == "j") && (word.en[1][loc]=="z")) {
            isKeyCode = 2;
            loc++;
            count++;
            targetEn.textContent = '_'.repeat(loc) + word.en[0].substring(loc)
            }
          else if(((isKeyCode === 2 || isKeyCode === 0) && e.key !== word.en[0][loc]) || (isKeyCode === 1 && e.key !== word.en[1][loc])) {
            //エラー音入れたい
            sound.play();
            sound.currentTime = 0;
            missCount++;
            return;
          }
          else {
          loc++;
          count++;

          // 1: _urf
          // 2: __rf
          // 3: ---f
          // 4: ----
          let wordEn = [];
          if(isKeyCode === 1) {
            wordEn = word.en[1];
          } else if(isKeyCode === 2 || isKeyCode === 0) {
            wordEn = word.en[0];
          }
          targetEn.textContent = '_'.repeat(loc) + wordEn.substring(loc);
          }

          if(isKeyCode === 1) {
          if (loc === word.en[1].length) {
            isKeyCode = 0;
            setWord();
          }}
          else if(isKeyCode === 2) {
          if (loc === word.en[0].length) {
            isKeyCode = 0;
            setWord();
          }}
      } else {

          if(word.en == "" && word.jp == "") {
            return;
          }

          if (e.key !== word.en[loc]) {
            //エラー音入れたい
            sound.play();
            sound.currentTime = 0;
            missCount++;
            return;
          }

          loc++;
          count++;

          // 1: _urf
          // 2: __rf
          // 3: ---f
          // 4: ----
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
