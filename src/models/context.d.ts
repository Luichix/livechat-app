import { ReactNode } from 'react'

export type TDefault = null | undefined | string
export type TLanguage = 'en' | 'es'
export type TTheme = 'light' | 'dark'
export type TAuth = object

export interface ILanguageContext {
  language: TLanguage
  changeLanguage: (language: TLanguage) => void
}

export interface IThemeContext {
  theme: TTheme | Promise<TTheme>
  changeTheme: () => void
}

export interface IAuthContext {
  auth: TAuth
  loginAuth: (auth: TAuth) => void
  logoutAuth: () => void
}

export interface IProps {
  children?: ReactNode
}
