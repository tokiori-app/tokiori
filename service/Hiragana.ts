import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

Audio.setAudioModeAsync({
  playsInSilentModeIOS: true,
});

type DefaultType = string;

class Hiragana {
  private static instance: Hiragana;
  private constructor() {}

  static getInstatce() {
    if (!Hiragana.instance) {
      Hiragana.instance = new Hiragana();
    }
    return Hiragana.instance;
  }

  async playSound(hiragana: DefaultType) {
    try {
      Speech.speak(hiragana, {
        language: 'ja-JP',
        rate: 0.5,
        pitch: 1,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

const hiraganaHandler = Hiragana.getInstatce();
export default hiraganaHandler;
