import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageService {
  static async setItem(key, value) {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async getItem(key) {
    const response = await AsyncStorage.getItem(key);
    return JSON.parse(response);
  }

  static async deleteItem(key, options) {
    return await AsyncStorage.removeItem(key, options);
  }
}
