import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Paragraph() {
  return (
    <View>
      <Text style={styles.size.xl}> </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  size_xl: {
    fontSize: 14,
  },
})
