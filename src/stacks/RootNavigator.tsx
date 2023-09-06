// import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import ChatStack from './ChatStack'
import AuthStack from './AuthStack'
import useUser from '../hooks/useUser'

export default function RootNavigator() {
  const { isLogged } = useUser()
  return (
    // <NavigationContainer>
    <>
      {!isLogged ? <AuthStack /> : <ChatStack />}
      <StatusBar style="dark" />
    </>
    // </NavigationContainer>
  )
}
