import { useState, createContext } from 'react'
import { IProps } from '../models/context'

export const TabContext = createContext({})

const TabProvider = ({ children }: IProps) => {
  const [tab, setTab] = useState('Chats')
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabProvider
