import React from 'react'
import {
  Text,
  View,
  Animated,
  useWindowDimensions,
  Pressable,
} from 'react-native'
import tokens from '../styles/tokens'
import { AnimationContext } from '../contexts/AnimatedContext'
import ButtonChats from './components/ButtonChats'

const ChatRoomHeader = () => {
  const { backgroundStyle, opacityStyle } = React.useContext(AnimationContext)
  let { width } = useWindowDimensions()
  return (
    <View>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            width: width,
            padding: 25,
            paddingBottom: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64,
          },
          backgroundStyle,
        ]}
      >
        <Pressable>
          <Text
            style={{
              fontWeight: 'bold',
              color: tokens.colorSky600,
            }}
          >
            Edit
          </Text>
        </Pressable>
        <Animated.Text
          style={[
            {
              fontSize: 16,
              textAlign: 'left',
              fontWeight: 'bold',
            },
            opacityStyle,
          ]}
        >
          Chats
        </Animated.Text>

        <ButtonChats />
      </Animated.View>
    </View>
  )
}

export default ChatRoomHeader
