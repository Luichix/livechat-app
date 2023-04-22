import React from 'react'
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

export default function TabBarIcon({ focused, color }) {
  const route = useRoute()

  let iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
  let IconComponent = Ionicons

  if (route.name === 'Settings') {
    iconName = focused ? 'cogs' : 'settings'
    IconComponent = focused ? FontAwesome : Feather
  }
  return <IconComponent name={iconName} size={28} color={color} />
}
