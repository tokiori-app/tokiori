const HIRAGANAS = [
  {
    title: '기본가나',
    columns: ['あ단', 'い단', 'う단', 'え단', 'お단'],
    rows: [
      {
        label: 'あ행',
        items: [
          { char: 'あ', ko: '아', en: 'a' },
          { char: 'い', ko: '이', en: 'i' },
          { char: 'う', ko: '우', en: 'u' },
          { char: 'え', ko: '에', en: 'e' },
          { char: 'お', ko: '오', en: 'o' },
        ],
      },
      {
        label: 'か행',
        items: [
          { char: 'か', ko: '카', en: 'ka' },
          { char: 'き', ko: '키', en: 'ki' },
          { char: 'く', ko: '쿠', en: 'ku' },
          { char: 'け', ko: '케', en: 'ke' },
          { char: 'こ', ko: '코', en: 'ko' },
        ],
      },
      {
        label: 'さ행',
        items: [
          { char: 'さ', ko: '사', en: 'sa' },
          { char: 'し', ko: '시', en: 'shi' },
          { char: 'す', ko: '스', en: 'su' },
          { char: 'せ', ko: '세', en: 'se' },
          { char: 'そ', ko: '소', en: 'so' },
        ],
      },
      {
        label: 'た행',
        items: [
          { char: 'た', ko: '타', en: 'ta' },
          { char: 'ち', ko: '치', en: 'chi' },
          { char: 'つ', ko: '츠', en: 'tsu' },
          { char: 'て', ko: '테', en: 'te' },
          { char: 'と', ko: '토', en: 'to' },
        ],
      },
      {
        label: 'な행',
        items: [
          { char: 'な', ko: '나', en: 'na' },
          { char: 'に', ko: '니', en: 'ni' },
          { char: 'ぬ', ko: '누', en: 'nu' },
          { char: 'ね', ko: '네', en: 'ne' },
          { char: 'の', ko: '노', en: 'no' },
        ],
      },
      {
        label: 'は행',
        items: [
          { char: 'は', ko: '하', en: 'ha' },
          { char: 'ひ', ko: '히', en: 'hi' },
          { char: 'ふ', ko: '후', en: 'fu' },
          { char: 'へ', ko: '헤', en: 'he' },
          { char: 'ほ', ko: '호', en: 'ho' },
        ],
      },
      {
        label: 'ま행',
        items: [
          { char: 'ま', ko: '마', en: 'ma' },
          { char: 'み', ko: '미', en: 'mi' },
          { char: 'む', ko: '무', en: 'mu' },
          { char: 'め', ko: '메', en: 'me' },
          { char: 'も', ko: '모', en: 'mo' },
        ],
      },
      {
        label: 'や행',
        items: [
          { char: 'や', ko: '야', en: 'ya' },
          null,
          { char: 'ゆ', ko: '유', en: 'yu' },
          null,
          { char: 'よ', ko: '요', en: 'yo' },
        ],
      },
      {
        label: 'ら행',
        items: [
          { char: 'ら', ko: '라', en: 'ra' },
          { char: 'り', ko: '리', en: 'ri' },
          { char: 'る', ko: '루', en: 'ru' },
          { char: 'れ', ko: '레', en: 're' },
          { char: 'ろ', ko: '로', en: 'ro' },
        ],
      },
      {
        label: 'わ행',
        items: [
          { char: 'わ', ko: '와', en: 'wa' },
          null,
          { char: 'を', ko: '오', en: 'wo' },
          null,
          { char: 'ん', ko: '응', en: 'n' },
        ],
      },
    ],
  },
  {
    title: '탁음',
    columns: ['あ단', 'い단', 'う단', 'え단', 'お단'],
    rows: [
      {
        label: 'が행',
        items: [
          { char: 'が', ko: '가', en: 'ga' },
          { char: 'ぎ', ko: '기', en: 'gi' },
          { char: 'ぐ', ko: '구', en: 'gu' },
          { char: 'げ', ko: '게', en: 'ge' },
          { char: 'ご', ko: '고', en: 'go' },
        ],
      },
      {
        label: 'ざ행',
        items: [
          { char: 'ざ', ko: '자', en: 'za' },
          { char: 'じ', ko: '지', en: 'ji' },
          { char: 'ず', ko: '즈', en: 'zu' },
          { char: 'ぜ', ko: '제', en: 'ze' },
          { char: 'ぞ', ko: '조', en: 'zo' },
        ],
      },
      {
        label: 'だ행',
        items: [
          { char: 'だ', ko: '다', en: 'da' },
          { char: 'ぢ', ko: '지', en: 'ji' },
          { char: 'づ', ko: '즈', en: 'zu' },
          { char: 'で', ko: '데', en: 'de' },
          { char: 'ど', ko: '도', en: 'do' },
        ],
      },
      {
        label: 'ば행',
        items: [
          { char: 'ば', ko: '바', en: 'ba' },
          { char: 'び', ko: '비', en: 'bi' },
          { char: 'ぶ', ko: '부', en: 'bu' },
          { char: 'べ', ko: '베', en: 'be' },
          { char: 'ぼ', ko: '보', en: 'bo' },
        ],
      },
      {
        label: 'ぱ행',
        items: [
          { char: 'ぱ', ko: '파', en: 'pa' },
          { char: 'ぴ', ko: '피', en: 'pi' },
          { char: 'ぷ', ko: '푸', en: 'pu' },
          { char: 'ぺ', ko: '페', en: 'pe' },
          { char: 'ぽ', ko: '포', en: 'po' },
        ],
      },
    ],
  },
  {
    title: '요음',
    columns: ['や단', null, 'ゆ단', null, 'よ단'],
    rows: [
      {
        label: 'きゃ행',
        items: [
          { char: 'きゃ', ko: '캬', en: 'kya' },
          null,
          { char: 'きゅ', ko: '큐', en: 'kyu' },
          null,
          { char: 'きょ', ko: '쿄', en: 'kyo' },
        ],
      },
      {
        label: 'しゃ행',
        items: [
          { char: 'しゃ', ko: '샤', en: 'sha' },
          null,
          { char: 'しゅ', ko: '슈', en: 'shu' },
          null,
          { char: 'しょ', ko: '쇼', en: 'sho' },
        ],
      },
      {
        label: 'ちゃ행',
        items: [
          { char: 'ちゃ', ko: '차', en: 'cha' },
          null,
          { char: 'ちゅ', ko: '추', en: 'chu' },
          null,
          { char: 'ちょ', ko: '초', en: 'cho' },
        ],
      },
      {
        label: 'にゃ행',
        items: [
          { char: 'にゃ', ko: '냐', en: 'nya' },
          null,
          { char: 'にゅ', ko: '뉴', en: 'nyu' },
          null,
          { char: 'にょ', ko: '뇨', en: 'nyo' },
        ],
      },
      {
        label: 'ひゃ행',
        items: [
          { char: 'ひゃ', ko: '햐', en: 'hya' },
          null,
          { char: 'ひゅ', ko: '휴', en: 'hyu' },
          null,
          { char: 'ひょ', ko: '효', en: 'hyo' },
        ],
      },
      {
        label: 'みゃ행',
        items: [
          { char: 'みゃ', ko: '먀', en: 'mya' },
          null,
          { char: 'みゅ', ko: '뮤', en: 'myu' },
          null,
          { char: 'みょ', ko: '뭐', en: 'myo' }, // 표기 취향에 따라 '묘'로도 가능
        ],
      },
      {
        label: 'りゃ행',
        items: [
          { char: 'りゃ', ko: '랴', en: 'rya' },
          null,
          { char: 'りゅ', ko: '류', en: 'ryu' },
          null,
          { char: 'りょ', ko: '료', en: 'ryo' },
        ],
      },
      {
        label: 'ぎゃ행',
        items: [
          { char: 'ぎゃ', ko: '갸', en: 'gya' },
          null,
          { char: 'ぎゅ', ko: '규', en: 'gyu' },
          null,
          { char: 'ぎょ', ko: '교', en: 'gyo' },
        ],
      },
      {
        label: 'じゃ행',
        items: [
          { char: 'じゃ', ko: '자', en: 'ja' },
          null,
          { char: 'じゅ', ko: '주', en: 'ju' },
          null,
          { char: 'じょ', ko: '조', en: 'jo' },
        ],
      },
      {
        label: 'びゃ행',
        items: [
          { char: 'びゃ', ko: '뱌', en: 'bya' },
          null,
          { char: 'びゅ', ko: '뷰', en: 'byu' },
          null,
          { char: 'びょ', ko: '뵤', en: 'byo' },
        ],
      },
      {
        label: 'ぴゃ행',
        items: [
          { char: 'ぴゃ', ko: '퍄', en: 'pya' },
          null,
          { char: 'ぴゅ', ko: '퓨', en: 'pyu' },
          null,
          { char: 'ぴょ', ko: '표', en: 'pyo' },
        ],
      },
    ],
  },
];

const KATAKANAS = [
  {
    title: '기본가나',
    columns: ['あ단', 'い단', 'う단', 'え단', 'お단'],
    rows: [
      {
        label: 'ア행',
        items: [
          { char: 'ア', ko: '아', en: 'a' },
          { char: 'イ', ko: '이', en: 'i' },
          { char: 'ウ', ko: '우', en: 'u' },
          { char: 'エ', ko: '에', en: 'e' },
          { char: 'オ', ko: '오', en: 'o' },
        ],
      },
      {
        label: 'カ행',
        items: [
          { char: 'カ', ko: '카', en: 'ka' },
          { char: 'キ', ko: '키', en: 'ki' },
          { char: 'ク', ko: '쿠', en: 'ku' },
          { char: 'ケ', ko: '케', en: 'ke' },
          { char: 'コ', ko: '코', en: 'ko' },
        ],
      },
      {
        label: 'サ행',
        items: [
          { char: 'サ', ko: '사', en: 'sa' },
          { char: 'シ', ko: '시', en: 'shi' },
          { char: 'ス', ko: '스', en: 'su' },
          { char: 'セ', ko: '세', en: 'se' },
          { char: 'ソ', ko: '소', en: 'so' },
        ],
      },
      {
        label: 'タ행',
        items: [
          { char: 'タ', ko: '타', en: 'ta' },
          { char: 'チ', ko: '치', en: 'chi' },
          { char: 'ツ', ko: '츠', en: 'tsu' },
          { char: 'テ', ko: '테', en: 'te' },
          { char: 'ト', ko: '토', en: 'to' },
        ],
      },
      {
        label: 'ナ행',
        items: [
          { char: 'ナ', ko: '나', en: 'na' },
          { char: 'ニ', ko: '니', en: 'ni' },
          { char: 'ヌ', ko: '누', en: 'nu' },
          { char: 'ネ', ko: '네', en: 'ne' },
          { char: 'ノ', ko: '노', en: 'no' },
        ],
      },
      {
        label: 'ハ행',
        items: [
          { char: 'ハ', ko: '하', en: 'ha' },
          { char: 'ヒ', ko: '히', en: 'hi' },
          { char: 'フ', ko: '후', en: 'fu' },
          { char: 'ヘ', ko: '헤', en: 'he' },
          { char: 'ホ', ko: '호', en: 'ho' },
        ],
      },
      {
        label: 'マ행',
        items: [
          { char: 'マ', ko: '마', en: 'ma' },
          { char: 'ミ', ko: '미', en: 'mi' },
          { char: 'ム', ko: '무', en: 'mu' },
          { char: 'メ', ko: '메', en: 'me' },
          { char: 'モ', ko: '모', en: 'mo' },
        ],
      },
      {
        label: 'ヤ행',
        items: [
          { char: 'ヤ', ko: '야', en: 'ya' },
          null,
          { char: 'ユ', ko: '유', en: 'yu' },
          null,
          { char: 'ヨ', ko: '요', en: 'yo' },
        ],
      },
      {
        label: 'ラ행',
        items: [
          { char: 'ラ', ko: '라', en: 'ra' },
          { char: 'リ', ko: '리', en: 'ri' },
          { char: 'ル', ko: '루', en: 'ru' },
          { char: 'レ', ko: '레', en: 're' },
          { char: 'ロ', ko: '로', en: 'ro' },
        ],
      },
      {
        label: 'ワ행',
        items: [
          { char: 'ワ', ko: '와', en: 'wa' },
          null,
          { char: 'ヲ', ko: '오', en: 'wo' },
          null,
          { char: 'ン', ko: '응', en: 'n' },
        ],
      },
    ],
  },
  {
    title: '탁음',
    columns: ['あ단', 'い단', 'う단', 'え단', 'お단'],
    rows: [
      {
        label: 'ガ행',
        items: [
          { char: 'ガ', ko: '가', en: 'ga' },
          { char: 'ギ', ko: '기', en: 'gi' },
          { char: 'グ', ko: '구', en: 'gu' },
          { char: 'ゲ', ko: '게', en: 'ge' },
          { char: 'ゴ', ko: '고', en: 'go' },
        ],
      },
      {
        label: 'ザ행',
        items: [
          { char: 'ザ', ko: '자', en: 'za' },
          { char: 'ジ', ko: '지', en: 'ji' },
          { char: 'ズ', ko: '즈', en: 'zu' },
          { char: 'ゼ', ko: '제', en: 'ze' },
          { char: 'ゾ', ko: '조', en: 'zo' },
        ],
      },
      {
        label: 'ダ행',
        items: [
          { char: 'ダ', ko: '다', en: 'da' },
          { char: 'ヂ', ko: '지', en: 'ji' },
          { char: 'ヅ', ko: '즈', en: 'zu' },
          { char: 'デ', ko: '데', en: 'de' },
          { char: 'ド', ko: '도', en: 'do' },
        ],
      },
      {
        label: 'バ행',
        items: [
          { char: 'バ', ko: '바', en: 'ba' },
          { char: 'ビ', ko: '비', en: 'bi' },
          { char: 'ブ', ko: '부', en: 'bu' },
          { char: 'ベ', ko: '베', en: 'be' },
          { char: 'ボ', ko: '보', en: 'bo' },
        ],
      },
      {
        label: 'パ행',
        items: [
          { char: 'パ', ko: '파', en: 'pa' },
          { char: 'ピ', ko: '피', en: 'pi' },
          { char: 'プ', ko: '푸', en: 'pu' },
          { char: 'ペ', ko: '페', en: 'pe' },
          { char: 'ポ', ko: '포', en: 'po' },
        ],
      },
    ],
  },
  {
    title: '요음',
    columns: ['や단', null, 'ゆ단', null, 'よ단'],
    rows: [
      {
        label: 'キャ행',
        items: [
          { char: 'キャ', ko: '캬', en: 'kya' },
          null,
          { char: 'キュ', ko: '큐', en: 'kyu' },
          null,
          { char: 'キョ', ko: '쿄', en: 'kyo' },
        ],
      },
      {
        label: 'シャ행',
        items: [
          { char: 'シャ', ko: '샤', en: 'sha' },
          null,
          { char: 'シュ', ko: '슈', en: 'shu' },
          null,
          { char: 'ショ', ko: '쇼', en: 'sho' },
        ],
      },
      {
        label: 'チャ행',
        items: [
          { char: 'チャ', ko: '차', en: 'cha' },
          null,
          { char: 'チュ', ko: '추', en: 'chu' },
          null,
          { char: 'チョ', ko: '초', en: 'cho' },
        ],
      },
      {
        label: 'ニャ행',
        items: [
          { char: 'ニャ', ko: '냐', en: 'nya' },
          null,
          { char: 'ニュ', ko: '뉴', en: 'nyu' },
          null,
          { char: 'ニョ', ko: '뇨', en: 'nyo' },
        ],
      },
      {
        label: 'ヒャ행',
        items: [
          { char: 'ヒャ', ko: '햐', en: 'hya' },
          null,
          { char: 'ヒュ', ko: '휴', en: 'hyu' },
          null,
          { char: 'ヒョ', ko: '효', en: 'hyo' },
        ],
      },
      {
        label: 'ミャ행',
        items: [
          { char: 'ミャ', ko: '먀', en: 'mya' },
          null,
          { char: 'ミュ', ko: '뮤', en: 'myu' },
          null,
          { char: 'ミョ', ko: '뭐', en: 'myo' }, // '묘'로도 가능
        ],
      },
      {
        label: 'リャ행',
        items: [
          { char: 'リャ', ko: '랴', en: 'rya' },
          null,
          { char: 'リュ', ko: '류', en: 'ryu' },
          null,
          { char: 'リョ', ko: '료', en: 'ryo' },
        ],
      },
      {
        label: 'ギャ행',
        items: [
          { char: 'ギャ', ko: '갸', en: 'gya' },
          null,
          { char: 'ギュ', ko: '규', en: 'gyu' },
          null,
          { char: 'ギョ', ko: '교', en: 'gyo' },
        ],
      },
      {
        label: 'ジャ행',
        items: [
          { char: 'ジャ', ko: '자', en: 'ja' },
          null,
          { char: 'ジュ', ko: '주', en: 'ju' },
          null,
          { char: 'ジョ', ko: '조', en: 'jo' },
        ],
      },
      {
        label: 'ビャ행',
        items: [
          { char: 'ビャ', ko: '뱌', en: 'bya' },
          null,
          { char: 'ビュ', ko: '뷰', en: 'byu' },
          null,
          { char: 'ビョ', ko: '뵤', en: 'byo' },
        ],
      },
      {
        label: 'ピャ행',
        items: [
          { char: 'ピャ', ko: '퍄', en: 'pya' },
          null,
          { char: 'ピュ', ko: '퓨', en: 'pyu' },
          null,
          { char: 'ピョ', ko: '표', en: 'pyo' },
        ],
      },
    ],
  },
];

export { HIRAGANAS, KATAKANAS };
