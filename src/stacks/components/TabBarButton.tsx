import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { TabContext } from '../../contexts/TabContext'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function TabBarButton(props) {
  const { setTab } = useContext(TabContext)
  const navigation = useNavigation()
  const route = useRoute()

  const onPress = () => {
    setTab(route.name)
    navigation.navigate(route.name)
  }

  return (
    <TouchableOpacity {...props} onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  )
}
