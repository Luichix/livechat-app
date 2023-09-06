import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, initializeAuth } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC01ajAyrvMJ5oAmcS2dgHUDVk3HQrX1O8',
  authDomain: 'godigit-app.firebaseapp.com',
  projectId: 'godigit-app',
  storageBucket: 'godigit-app.appspot.com',
  messagingSenderId: '638070316736',
  appId: '1:638070316736:web:579b196a63d26b77b89725',
  measurementId: 'G-N9Y3YSHBXD',
}

let firebaseApp = {}
export let auth = {}

if (getApps().length < 1) {
  firebaseApp = initializeApp(FIREBASE_CONFIG)
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  })
} else {
  firebaseApp = getApp()
  auth = getAuth()
}

export default firebaseApp
