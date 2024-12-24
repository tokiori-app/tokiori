import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e: any) {
    console.log(e);
  }
};

export const getStorage = async (key: string) => {
  try {
    const get = await AsyncStorage.getItem(key);
    if (!get) {
      return null;
    }
    return JSON.parse(get);
  } catch (e: any) {
    console.log(e);
  }
};
