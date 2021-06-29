  'use strict';

  {
    //初期設定
    function setWord() {
      random = Math.floor(Math.random() * words.length);
      word = words.splice([random],1)[0];
      wordJp = wordsJp.splice([random],1)[0];
      targetEn.textContent = word;
      targetJp.textContent = wordJp;
      loc = 0;
    }
    //終了処理の関数
    function finish() {
      clearInterval(countdown);
      timer.textContent = '正解数は' + count + '個でした!';
      typeMiss.textContent = '不正解は' + missCount + '個でした!';
    }

    const words = [
      'surf',
      'guitar',
      'mugic'
    ];
    const wordsJp = [
      'サーフ',
      'ギター',
      'ミュージック'
    ];
    let time = 3;
    let word;
    let wordJp;
    let random;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    let count = 0;
    let missCount = 0;
    let countdown;

    const timer = document.getElementById('timer');

    const target = document.getElementById('targetEn');

    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      setInterval(() => {
        timer.textContent = '制限時間:' + --time + '秒';
        if(time <= 0) finish();
      },1000);
      startTime = Date.now();
      setWord();

    });

    document.addEventListener('keydown', e => {
      if (isPlaying === false) {
        return;
      }

      if (e.key !== word[loc]) {
        //エラー音入れたい
        missCount++;
        return;
      }

      loc++;

      // 1: _urf
      // 2: __rf
      // 3: ---f
      // 4: ----
      targetEn.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
        count++;
        setWord();
      }
    });
    document.addEventListener('keyup', () => {
      if (isPlaying === false) {
        return;
      }


        if (time <= 0) {

          isPlaying = false;
          targetJp.textContent = 'Nice!!Riding!!';
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = `Finishd! ${elapsedTime} seconds!`;
          return;
        }
      });
  }
