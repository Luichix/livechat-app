import { createContext, useState } from 'react'
import { IProps, IThemeContext, TTheme } from '../models/context'
import {
  saveToStorage,
  loadFromStorage,
} from '../services/helpers/asyncStorage'

const initialTheme = async (): Promise<TTheme> => {
  const value = await loadFromStorage('@themeChat').then((value) => {
    if (value === 'light' || value === 'dark') {
      return value
    } else {
      saveToStorage('@themeChat', 'light')
      return 'light'
    }
  })
  return value
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<TTheme | Promise<TTheme>>(initialTheme)

  const changeTheme = () => {
    if (theme === 'dark') {
      saveToStorage('@themeChat', 'light')
      setTheme('light')
    } else {
      saveToStorage('@themeChat', 'dark')
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
