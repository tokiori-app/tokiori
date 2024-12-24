const ROUTES = {
  KANA: {
    HIRAGANA: '/kana/hiragana',
    KATAKANA: '/kana/katakana',
  },
  SETTING: '/setting',
  NOTICE: '/setting/notice',
  WORD: {
    INDEX: '/word',
    BOOKMARK: '/word/bookmark',
    GAME: '/word/game',
  },
} as const;

export default ROUTES;
