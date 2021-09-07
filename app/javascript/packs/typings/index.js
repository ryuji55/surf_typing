  'use strict';

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

    const words = [
      {
        jp: '今日1日を楽しく生きてみる',
        en: 'kyouitinitiwotanosikuikitemiru'
      },
      {
        jp: '成長に夢中になる',
        en: 'seityounimutyuuninaru'
      },
      {
        jp: '好きな人と一緒にいなさい',
        en: 'sukinahitotoissyoniinasai'
      },
      {
        jp: '先を明るく見よう',
        en: 'sakiwoakarukumiyou'
      },
      {
        jp: '好きなことをやっていきなさい',
        en: 'sukinakotowoyatteikinasai'
      },
      {
        jp: '大切な人を大切に',
        en: 'taisetunahitowotaisetuni'
      },
      {
        jp: '疑うより信じてみよう',
        en: ['utagauyorisinnjitemiyou','utagauyorisinnzitemiyou']
      },
      {
        jp: 'もう過ぎたことは忘れよう',
        en: 'mousugitakotohawasureyou'
      },
      {
        jp: '幸せは当たり前の中にある',
        en: 'siawasehaatarimaenonakaniaru'
      },
      {
        jp: 'いい事は嫌な事の後にやってくる',
        en: 'iikotohaiyanakotonoatoniyattekuru'
      }, //10
      {
        jp: '感謝の気持ちを忘れない',
        en: 'kannsyanokimotiwowasurenai'
      }, //10
      {
        jp: 'いつも心に青空を',
        en: 'itumokokoroniaozorawo'
      },
      {
        jp: '今を生きる、今を大切にする',
        en: 'imawoikiru,imawotaisetunisuru'
      },
      {
        jp: '人は人、自分と向き合う事を優先する',
        en: ['hitohahito,jibunntomukiaukotowoyuusennsuru','hitohahito,zibunntomukiaukotowoyuusennsuru']
      },
      {
        jp: '自分の気持ちを大切に',
        en: ['jibunnnokimotiwotaisetuni','zibunnnokimotiwotaisetuni']
      },
      {
        jp: 'あなたの代わりはどこにもいない',
        en: 'anatanokawarihadokonimoinai'
      },
      {
        jp: '心に嘘はつけない',
        en: 'kokoroniusohatukenai'
      },
      {
        jp: 'いいじゃん！失敗しても死ぬわけでもないし',
        en: ['iijann!sippaisitemosinuwakedemonaisi','iizyann!sippaisitemosinuwakedemonaisi']
      },
      {
        jp: '暗い部屋でひとり悩むことはやめよう',
        en: 'kuraiheyadehitorinayamukotohayameyou'
      },
      {
        jp: '信じれば晴れる',
        en: ['sinnjirebahareru','sinnzirebahareru']
      },
      {
        jp: 'もっと笑ってみてもいいんじゃない？',
        en: ['mottowarattemitemoiinnjanai?','mottowarattemitemoiinnzyanai?']
      }, //20
      {
        jp: '晴れわたる日も雨の日も',
        en: 'harewataruhimoamenohimo'
      },
      {
        jp: 'もっと肩の力を抜くと全てうまくいく',
        en: 'mottokatanotikarawonukutosubeteumakuiku'
      },
      {
        jp: 'ありのままのあなたが素敵です',
        en: 'arinomamanoanatagasutekidesu'
      },
      {
        jp: '前を向いていないと波には乗れない',
        en: 'maewomuiteinaitonaminihanorenai'
      },
      {
        jp: '悲しくても大丈夫！悲しみが人を深くする',
        en: ['kanasikutemodaijoubu!kanasimigahitowohukakusuru','kanasikutemodaizyoubu!kanasimigahitowohukakusuru']
      },
      {
        jp: '雨が降るから虹もでる',
        en: ['amegahurukaranijimoderu','amegahurukaranizimoderu']
      },
      {
        jp: '自分を愛するから人を愛せる',
        en: ['jibunnwoaisurukarahitowoaiseru','zibunnwoaisurukarahitowoaiseru']
      },
      {
        jp: '迷ったら自分を好きでいられる方を選ぶ',
        en: ['mayottarajibunnwosukideirareruhouwoerabu','mayottarazibunnwosukideirareruhouwoerabu']
      },
      {
        jp: '結果をすぐに求めない後からついてくる物だから',
        en: 'kekkawosugunimotomenaiatokaratuitekurumonodakara'
      },
      {
        jp: 'うまくできなくてもいい！心を込める',
        en: 'umakudekinakutemoii!kokorowokomeru'
      }, //30
      {
        jp: '今死ぬとしたらこれまでの人生をどう思う？',
        en: ['imasinutositarakoremadenojinnseiwodouomou?','imasinutositarakoremadenozinnseiwodouomou?']
      },
      {
        jp: 'あなたと好きな人が幸せでいれますように',
        en: 'anatatosukinahitogasiawasedeiremasuyouni'
      },
      {
        jp: 'いつも今いる場所から前を向く',
        en: 'itumoimairubasyokaramaewomuku'
      },
      {
        jp: '今自分にできる事から始める',
        en: ['imajibunnnidekirukotokarahajimeru','imazibunnnidekirukotokarahazimeru']
      },
      {
        jp: 'もっと挑戦しよう',
        en: 'mottotyousennsiyou'
      },
      {
        jp: 'どうしても許せないときは許せない自分を許そう',
        en: ['dousitemoyurusenaitokihayurusenaijibunnwoyurusou','dousitemoyurusenaitokihayurusenaizibunnwoyurusou']
      },
      {
        jp: '過去ではなく未来と向き合う',
        en: 'kakodehanakumiraitomukiau'
      },
      {
        jp: '必要以上の悩みは紙に書き出して捨ててしまおう',
        en: ['hituyouijounonayamihakaminikakidasitesutetesimaou','hituyouizyounonayamihakaminikakidasitesutetesimaou']
      },
      {
        jp: '好きな人の幸せを願える私でいよう',
        en: 'sukinahitonosiawasewonegaeruwatasideiyou'
      },
      {
        jp: 'よく寝てよく学びよく食べてよく遊ぶ',
        en: 'yokuneteyokumanabiyokutabeteyokuasobu'
      },  //30
      {
        jp: '己の弱さと向き合う',
        en: 'onorenoyowasatomukiau'
      },
      {
        jp: '強い人はみな優しい',
        en: 'tuyoihitohaminayasasii'
      },
      {
        jp: 'あなたの事が大切で大好きです',
        en: 'anatanokotogataisetudedaisukidesu'
      },
      {
        jp: 'あなたは間違っていない',
        en: 'anatahamatigatteinai'
      },
      {
        jp: '悔しさをバネにして飛躍する',
        en: 'kuyasisawobanenisitehiyakusuru'
      },
      {
        jp: '失うから新しく得る事ができる',
        en: 'usinaukaraatarasikuerukotogadekiru'
      },
      {
        jp: 'たまにこけちゃうくらいに真っ直ぐなあなたが好き',
        en: 'tamanikoketyaukurainimassugunaanatagasuki'
      },
      {
        jp: '何があっても心身の健康を大切に',
        en: 'nanigaattemosinnsinnnokennkouwotaisetuni'
      },
      {
        jp: '不安な気持ちを味方にする',
        en: 'huannnakimotiwomikatanisuru'
      },
      {
        jp: '好きだから別れる事もある',
        en: 'sukidakarawakarerukotomoaru'
      }, //40
      {
        jp: '笑ってよ！せめて今だけでも',
        en: 'waratteyo!semeteimadakedemo'
      },
      {
        jp: '離れてもあなたの幸せを願う',
        en: 'hanaretemoanatanosiawasewonegau'
      },
      {
        jp: '僕だけをずっと見ていてくれてありがとう',
        en: 'bokudakewozuttomiteitekuretearigatou'
      },
      {
        jp: '君が笑ったときが好きだったから',
        en: 'kimigawarattatokigasukidattakara'
      },
      {
        jp: 'あたたかい優しさを心の中に持つ',
        en: 'atatakaiyasasisawokokorononakanimotu'
      },
      {
        jp: 'これからの人生で今日より若い日は1日もない',
        en: ['korekaranojinnseidekyouyoriwakaihihaitinitimonai','korekaranozinnseidekyouyoriwakaihihaitinitimonai']
      },
      {
        jp: '一度止まって振り返ると正しいという字になる',
        en: ['itidotomattehurikaerutotadasiitoiujininaru','itidotomattehurikaerutotadasiitoiuzininaru']
      },
      {
        jp: 'カッコつけないカッコ良さがある',
        en: 'kakkotukenaikakkoyosagaaru'
      },
      {
        jp: '心変わりを受け入れる度量を持つ',
        en: 'kokorogawariwoukeirerudoryouwomotu'
      },
      {
        jp: 'ビビっていたら波には乗れない',
        en: 'bibitteitaranaminihanorenai'
      }, //50
      {
        jp: '夢や目標を生きがいにする',
        en: 'yumeyamokuhyouwoikigainisuru'
      },
      {
        jp: 'シンプルに生きてみる',
        en: 'sinnpuruniikitemiru'
      },
      {
        jp: '不快感から目を背けず向き合う',
        en: 'hukaikannkaramewosomukezumukiau'
      },
      {
        jp: '朝は起きるにかぎる',
        en: 'asahaokirunikagiru'
      },
      {
        jp: '海のように心を広く大きくしていこう',
        en: 'uminoyounikokorowohirokuookikusiteikou'
      },
      {
        jp: '面白くしたいならノリと勢いを大切にする',
        en: 'omosirokusitainaranoritoikioiwotaisetunisuru'
      },
      {
        jp: '本音で話し合える仲間は宝物',
        en: 'honnnedehanasiaerunakamahatakaramono'
      },
      {
        jp: '今笑えてるのは一緒に泣いてくれた君がいたから',
        en: 'imawaraeterunohaissyoninaitekuretakimigaitakara'
      },
      {
        jp: '辛い経験をよかったと言えるような日々を過ごす',
        en: 'turaikeikennwoyokattatoieruyounahibiwosugosu'
      },
      {
        jp: 'それを素敵と思えるあなたが素敵',
        en: 'sorewosutekitoomoeruanatagasuteki'
      },
      {
        jp: '痛みから逃げずに受け入れると成長できる',
        en: 'itamikaranigezuniukeirerutoseityoudekiru'
      },  //60
      {
        jp: '否定される事に慣れないと成長は望めない',
        en: 'hiteisarerukotoninarenaitoseityouhanozomenai'
      },
      {
        jp: '日々努力、日々成長',
        en: 'hibidoryoku,hibiseityou'
      },
      {
        jp: '自信は表に出すのではなく内に秘めておく',
        en: ['jisinnhaomotenidasunodehanakuutinihimeteoku','zisinnhaomotenidasunodehanakuutinihimeteoku']
      },
      {
        jp: '信じるのでも疑うのでもなく確かめてみる',
        en: ['sinnjirunodemoutagaunodemonakutasikametemiru','sinnzirunodemoutagaunodemonakutasikametemiru']
      },
      {
        jp: 'あなたにとって私もそうでありたい',
        en: 'anatanitottewatasimosoudearitai'
      },
      {
        jp: '今は信じて続けろ',
        en: ['imahasinnjitetudukero','imahasinnzitetudukero']
      }
    ];

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

    const target = document.getElementById('targetEn');

    const targetJp = document.getElementById('targetJp');

    const result = document.getElementById('result');

    const base64 = "SUQzAgAAAAAfdlRTUwAAEgBHYXJhZ2VCYW5kIDEwLjQuM0NPTQAAaABlbmdpVHVuTk9STQAgMDAwMDAwNjggMDAwMDAwNjggMDAwMDAyMzQgMDAwMDAyMzQgMDAwMDAwQjYgMDAwMDAwQjYgMDAwMDJDRjEgMDAwMDJDRjEgMDAwMDAwQjYgMDAwMDAwQjYAQ09NAACCAGVuZ2lUdW5TTVBCACAwMDAwMDAwMCAwMDAwMDIxMCAwMDAwMDdGNSAwMDAwMDAwMDAwMDBGRjdCIDAwMDAwMDAwIDAwMDAyOUEyIDAwMDAwMDAwIDAwMDAwMDAwIDAwMDAwMDAwIDAwMDAwMDAwIDAwMDAwMDAwIDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA1YAAAAA3hwAAAAAABvDgAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UED/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UkD/gAAAADeAAAAAAAAG8AAAAAAAAN4AAAAAAAAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tSQP+AAAAAN4AAAAAAAAbwAAAAAAAA3gAAAAAAABvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1JA/4AAAAA3gAAAAAAABvAAAAAAAADeAAAAAAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

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
          target.innerHTML = '';

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
