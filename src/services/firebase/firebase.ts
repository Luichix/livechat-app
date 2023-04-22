import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, initializeAuth } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Constants from 'expo-constants'

const FIREBASE_CONFIG = Constants.manifest.extra.firebaseConfig

const firebaseConfig = JSON.parse(FIREBASE_CONFIG)
let firebaseApp = {}
export let auth = {}

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig)
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  })
} else {
  firebaseApp = getApp()
  auth = getAuth()
}

export default firebaseApp
