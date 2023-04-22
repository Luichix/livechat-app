import React, { createContext } from 'react'
import { Animated } from 'react-native'
import { IProps } from '../models/context'

export const AnimatedContext = createContext({})

const AnimatedProvider = ({ children }: IProps) => {
  const animationValue = React.useRef(new Animated.Value(0)).current

  const backgroundInterpolate = animationValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['#fff', '#f9fafb', '#f9fafb'],
  })

  const opacityInterpolate = animationValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, 0, 1],
  })

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  }

  const opacityStyle = {
    opacity: opacityInterpolate,
  }
  return (
    <AnimatedContext.Provider
      value={{ animationValue, backgroundStyle, opacityStyle }}
    >
      {children}
    </AnimatedContext.Provider>
  )
}

export default AnimatedProvider
