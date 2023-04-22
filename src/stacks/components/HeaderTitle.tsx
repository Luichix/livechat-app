import React from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function HeaderTitle() {
  const route = useRoute()

  return (
    <View style={styles.headerTitle}>
      <Image source={{ uri: route.params.avatar }} style={styles.avatar} />
      <Text style={styles.user}>{route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  user: {
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
  },
})
