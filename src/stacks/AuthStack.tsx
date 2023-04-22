import React, { useState, useEffect } from 'react'
import Login from '../screens/Login'
import Onboarding from '../screens/Onboarding'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, StyleSheet, View, ActivityIndicator } from 'react-native'
import { loadFromStorage } from '../services/helpers/asyncStorage'

const Stack = createStackNavigator()

export default function AuthStack() {
  const [loading, setLoading] = useState(true)
  const [viewedOnboarding, setViewedOnboarding] = useState(false)

  const checkOnboarding = async () => {
    if (loadFromStorage('@viewOnboarding')) setViewedOnboarding(true)
  }

  useEffect(() => {
    if (Platform.OS !== 'web') {
      checkOnboarding()
    }
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {viewedOnboarding && <Stack.Screen name="Board" component={Onboarding} />}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
