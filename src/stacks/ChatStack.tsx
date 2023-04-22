import React from 'react'
import ChatTab from './ChatTab'
import ChatHeader from './ChatHeader'
import Help from '../screens/Help'
import Chat from '../screens/Chat'
import Account from '../screens/Account'
import Notification from '../screens/Notification'
import AnimationProvider from '../contexts/AnimatedContext'
import TabProvider from '../contexts/TabContext'
import TabHeader from './components/TabHeader'
import { createStackNavigator } from '@react-navigation/stack'
import useData from '../hooks/useData'

export const AnimationContext = React.createContext()
const Stack = createStackNavigator()

export default function ChatStack() {
  useData()
  return (
    <TabProvider>
      <AnimationProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="ChatTab"
            component={ChatTab}
            options={{
              header: () => <TabHeader />,
            }}
          />
          <Stack.Screen name="Chat" component={Chat} options={ChatHeader} />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              title: 'Cuenta',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              title: 'Notificaciones',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Help"
            component={Help}
            options={{
              title: 'Ayuda',
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </AnimationProvider>
    </TabProvider>
  )
}
