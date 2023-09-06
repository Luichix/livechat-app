import AsyncStorage from '@react-native-async-storage/async-storage'
import { TStorage } from '../../models/storage'

export const loadFromStorage = async (key: string): Promise<TStorage> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.warn(e)
    return null
  }
}
export const saveToStorage = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.warn(e)
  }
}

export const removeToStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.warn(e)
  }
}
