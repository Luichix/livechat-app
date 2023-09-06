import { useState, createContext } from 'react'
import { IProps } from '../models/context'

interface TabContextData {
  tab: string
  setTab?: (tab: string) => void
}

export const TabContext = createContext<TabContextData>({ tab: 'Chats' })

const TabProvider = ({ children }: IProps) => {
  const [tab, setTab] = useState('Chats')
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabProvider
