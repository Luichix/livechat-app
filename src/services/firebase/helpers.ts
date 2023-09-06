import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from './firebase'

export function authStateChanged(setUser, setIsLoading) {
  const unsubscribeAuth = onAuthStateChanged(auth, (authenticatedUser) => {
    authenticatedUser ? setUser(authenticatedUser) : setUser(null)
    setIsLoading(false)
  })
  return unsubscribeAuth
}

export const loginWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
  signOut(auth)
}
