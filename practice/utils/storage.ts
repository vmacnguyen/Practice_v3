import AsyncStorage from "@react-native-async-storage/async-storage";

export const secureStorage = {
  getItem: async (key: string) => {
    try {
      const result = await AsyncStorage.getItem(key);
      console.log(`[AsyncStorage] getItem ${key}:`, result ? "Found" : "Null");
      return result;
    } catch (error) {
      console.error(`[AsyncStorage] getItem error for ${key}:`, error);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`[AsyncStorage] setItem success for ${key}`);
    } catch (error) {
      console.error(`[AsyncStorage] setItem error for ${key}:`, error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`[AsyncStorage] removeItem success for ${key}`);
    } catch (error) {
      console.error(`[AsyncStorage] removeItem error for ${key}:`, error);
    }
  },
};
