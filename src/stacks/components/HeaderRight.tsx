import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import tokens from '../../styles/tokens'

export default function HeaderRight() {
  return (
    <MaterialCommunityIcons
      name="robot-happy-outline"
      size={36}
      color={tokens.colorGreen600}
      style={[styles.headerRight]}
    />
  )
}
const styles = StyleSheet.create({
  headerRight: {
    ...Platform.select({
      ios: {
        paddingRight: 60,
      },
      android: {
        paddingRight: 30,
      },
      web: {
        paddingRight: 40,
      },
    }),
  },
})
