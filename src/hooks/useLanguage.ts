import { useContext } from 'react'
import { LanguageContext } from '../contexts'
import { ILanguageContext } from '../models/context'
import { IUseLanguage, TData } from '../models/hook'

export default function useLanguage(): IUseLanguage {
  const { language } = useContext(LanguageContext) as ILanguageContext

  const loadText = (data: TData): object => {
    return data[language]
  }

  return {
    loadText,
  }
}
