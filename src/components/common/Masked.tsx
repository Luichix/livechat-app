import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import tokens from '../../styles/tokens'

export default function Masked() {
  const loadingProgress = useRef(new Animated.Value(0)).current
  const [animationDone, setAnimationDone] = useState(false)

  const animation = () => {
    return Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400,
    }).start(() => {
      setAnimationDone(true)
    })
  }

  useEffect(() => {
    animation()
  }, [])

  const colorLayer = animationDone ? null : (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: tokens.colorPrimary },
      ]}
    />
  )
  const whiteLayer = animationDone ? null : (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: tokens.colorBaseWhite },
      ]}
    />
  )

  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 15, 100],
          outputRange: [0.1, 0.06, 16],
        }),
      },
    ],
  }

  const opacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 25, 50],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    }),
  }

  return (
    <View style={{ flex: 1 }}>
      {colorLayer}
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={styles.centered}>
            <Animated.Image
              source={require('../../../assets/twitter.png')}
              style={[{ width: 1000 }, imageScale]}
              resizeMode="contain"
            />
          </View>
        }
      >
        {whiteLayer}
        <Animated.View style={[opacity, styles.centered]}></Animated.View>
      </MaskedView>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
