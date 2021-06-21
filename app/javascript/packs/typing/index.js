  'use strict';

  {
    function setWord() {
      random = Math.floor(Math.random() * words.length);
      word = words.splice([random],1)[0];
      wordJp = wordsJp.splice([random],1)[0];
      targetEn.textContent = word;
      targetJp.textContent = wordJp;
      loc = 0;
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
    let word;
    let wordJp;
    let random;
    let loc = 0;
    let startTime;
    let isPlaying = false;

    const target = document.getElementById('targetEn');


    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }

      isPlaying = true;
      startTime = Date.now();
      setWord();
    });

    document.addEventListener('keydown', e => {
      if (e.key !== word[loc]) {
        return;
      }

      loc++;

      // 1: _urf
      // 2: __rf
      // 3: ---f
      // 4: ----
      targetEn.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
        if (words.length === 0) {
          targetJp.textContent = 'Nice!!Riding!!';
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = `Finishd! ${elapsedTime} seconds!`;
          return;
        }

        setWord();

      }
  });
  }
