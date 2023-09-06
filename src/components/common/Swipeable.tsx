import React from 'react'
import { Animated, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SheetManager } from 'react-native-actions-sheet'
import tokens from '../../styles/tokens'

export default function AppleStyleSwipeableRow({ children }) {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-500, -250, 0],
      outputRange: [-250, -150, 100],
      extrapolate: 'clamp',
    })

    const opacity = dragX.interpolate({
      inputRange: [-100, -80, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: 'clamp',
    })

    return (
      <RectButton
        title="Action Sheet"
        onPress={() => {
          SheetManager.show('ticket-sheet')
        }}
      >
        <Animated.View
          style={[
            styles.rightAction,
            {
              transform: [{ translateX: trans }],
              opacity: opacity,
            },
          ]}
        >
          <Animated.Text style={[styles.actionText]}>Options</Animated.Text>
        </Animated.View>
      </RectButton>
    )
  }
  return (
    <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
  )
}

const styles = StyleSheet.create({
  rightAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorPrimary,
    width: 100,
  },
  actionText: {
    color: tokens.colorBaseWhite,
    textAlign: 'center',
    fontWeight: '600',
  },
})
