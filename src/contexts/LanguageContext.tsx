import { createContext, useEffect, useState } from 'react'
import { TLanguage, ILanguageContext, IProps } from '../models/context'
import {
  saveToStorage,
  loadFromStorage,
} from '../services/helpers/asyncStorage'

export const LanguageContext = createContext<ILanguageContext | null>(null)

export const LanguageProvider = ({ children }: IProps) => {
  const [language, setLanguage] = useState<TLanguage>('en')

  useEffect(() => {
    loadFromStorage('@languageChat').then((value) => {
      if (value === 'en' || value === 'es') {
        setLanguage(value)
      } else {
        saveToStorage('@languageChat', 'en')
      }
    })
  }, [])

  const changeLanguage = (language: TLanguage) => {
    if (language === 'en') {
      saveToStorage('@languageChat', 'en')
      setLanguage('en')
    } else if (language === 'es') {
      saveToStorage('@languageChat', 'es')
      setLanguage('es')
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
