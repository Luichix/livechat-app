import React, { useState } from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Platform, StyleSheet } from 'react-native'
import tokens from '../../styles/tokens'

function ButtonChats() {
  const [allChats, setAllChats] = useState(true)

  return (
    <TouchableOpacity
      style={styles.filter}
      onPress={() => {
        setAllChats(!allChats)
      }}
    >
      {allChats ? (
        <Ionicons name="person" size={28} color={tokens.colorSky600} />
      ) : (
        <FontAwesome name="group" size={28} color={tokens.colorSky600} />
      )}
    </TouchableOpacity>
  )
}

export default React.memo(ButtonChats)

const styles = StyleSheet.create({
  edit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tokens.colorSky600,
  },
  filter: { paddingRight: Platform.select({ web: 25 }) },
  button: {
    backgroundColor: tokens.colorGray100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 100,
  },
  text: {
    alignSelf: 'center',
  },
})
