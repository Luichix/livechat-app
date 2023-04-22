import React from 'react'
import { StyleSheet } from 'react-native'
import Chatroom from '../screens/Chatroom'
import Setting from '../screens/Setting'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tokens from '../styles/tokens'
import TabBarIcon from './components/TabBarIcon'
import TabBarButton from './components/TabBarButton'

export default function HomeTab() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: (props) => <TabBarButton {...props} />,
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon focused={focused} color={color} />
        ),
        tabBarActiveTintColor: tokens.colorSky600,
        tabBarInactiveTintColor: tokens.colorBlueGray400,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chatroom}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: tokens.colorCoolGray100,
    height: 48,
  },
  tabBarIconStyle: {
    width: 42,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  tabBarLabelStyle: {
    marginLeft: 0,
    marginTop: 0,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
})
