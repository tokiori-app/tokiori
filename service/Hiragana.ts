import { Platform } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

const soundObject = new Audio.Sound();

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
      if (Platform.OS === 'ios') {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });
        if (!soundObject._loaded) {
          await soundObject.loadAsync(require('../assets/soundFile.mp3'));
        }
        await soundObject.playAsync();
      }

      setTimeout(() => {
        Speech.speak(hiragana, {
          language: 'ja-JP',
          rate: 0.5,
          pitch: 1,
        });
      }, 100);
    } catch (e) {
      console.log(e);
    }
  }
}

const hiraganaHandler = Hiragana.getInstatce();
export default hiraganaHandler;
