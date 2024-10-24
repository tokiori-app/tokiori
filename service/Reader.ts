import { Platform } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

type DefaultType = string;

const soundObject = new Audio.Sound();

class Reader {
  private static instance: Reader;
  private constructor() {}

  static getInstatce() {
    if (!Reader.instance) Reader.instance = new Reader();
    return Reader.instance;
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
          rate: 0.6,
          pitch: 1.1,
        });
      }, 100);
    } catch (e) {
      console.log(e);
    }
  }
}

const readerHandler = Reader.getInstatce();
export default readerHandler;
