const ROUTES = {
  KANA: {
    HIRAGANA: '/kana/hiragana',
    KATAKANA: '/kana/katakana',
  },
  SETTING: '/setting',
  NOTICE: '/setting/notice',
  WORD: {
    INDEX: '/word',
    MINIGAME: {
      WORD: '/word/game/word',
      SOUND: '/word/game/sound',
      WRONG: '/word/wrong',
    },
  },
  QUITGAME: '/quitgame',
} as const;

export default ROUTES;
