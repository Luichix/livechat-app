import React from 'react'
import tokens from '../styles/tokens'
import HeaderTitle from './components/HeaderTitle'
import HeaderRight from './components/HeaderRight'

export default function ChatHeader() {
  return {
    headerStyle: {
      backgroundColor: tokens.colorCoolGray50,
      height: 75,
    },
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      maxWidth: 20,
    },
    headerTitle: () => <HeaderTitle />,
    headerRight: () => <HeaderRight />,
  }
}
