import { Audio } from 'expo-av';

type DefaultType = string;

type HiraganaDataType = { [key: string]: number };

Audio.setAudioModeAsync({
  playsInSilentModeIOS: true, // 무음 모드에서도 재생되도록 설정
});

class Hiragana {
  private static instance: Hiragana;
  hiraganaData: HiraganaDataType;
  private constructor() {
    this.hiraganaData = {
      あ: require('../assets/voice/a-voice.mp3'),
      い: require('../assets/voice/i-voice.mp3'),
    };
  }

  static getInstatce() {
    if (!Hiragana.instance) {
      Hiragana.instance = new Hiragana();
    }
    return Hiragana.instance;
  }

  async playSound(hiragana: DefaultType) {
    const soundFile = this.hiraganaData[hiragana];
    try {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      await sound.playAsync();
    } catch (e) {
      console.log(e);
    }
  }
}

const hiraganaHandler = Hiragana.getInstatce();
export default hiraganaHandler;
