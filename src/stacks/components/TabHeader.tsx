import React, { useContext } from 'react'
import ChatRoomHeader from '../ChatRoomHeader'
import { TabContext } from '../../contexts/TabContext'

export default function TabHeader() {
  const { tab } = useContext(TabContext)
  return tab === 'Chats' && <ChatRoomHeader />
}
