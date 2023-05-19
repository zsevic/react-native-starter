import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }

    return value;
  } catch (error) {
    console.error(`Failed getting the item ${key}`, error);
    return null;
  }
}

export async function setItem(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed setting the item ${key}`, error);
  }
}
