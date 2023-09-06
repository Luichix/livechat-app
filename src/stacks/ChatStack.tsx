import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Help from '../../app/chat/help'
import TabProvider from '../contexts/TabContext'
// import ChatTab from './ChatTab'
import ChatHeader from './ChatHeader'
import Chat from '../../app/chat/chat'
import Account from '../../app/chat/account'
import Notification from '../../app/chat/notification'
// import AnimationProvider from '../contexts/AnimatedContext'
// import TabHeader from './components/TabHeader'
// import useData from '../hooks/useData'

// export const AnimationContext = React.createContext()
const Stack = createStackNavigator()

export default function ChatStack() {
  // useData()
  return (
    <TabProvider>
      {/* <AnimationProvider> */}
      <Stack.Navigator>
        {/* <Stack.Screen
            name="ChatTab"
            component={ChatTab}
            options={{
              header: () => <TabHeader />,
            }}
          /> */}
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
      {/* </AnimationProvider> */}
    </TabProvider>
  )
}
