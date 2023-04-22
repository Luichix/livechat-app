import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCallbackOne, useMemoOne } from 'use-memo-one'
import Color from './Color'
import { StylePropType } from './utils'
import { TEST_ID } from './Constant'
import { Ionicons } from '@expo/vector-icons'
import tokens from '../../styles/tokens'

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 4,
    backgroundColor: 'transparent',
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
  },
})
export const Send = ({
  text = '',
  containerStyle,
  textStyle,
  alwaysShowSend = false,
  disabled = false,
  sendButtonProps,
  onSend = () => {},
}) => {
  const handleOnPress = useCallbackOne(() => {
    if (text && onSend) {
      onSend({ text: text.trim() }, true)
    }
  }, [text, onSend])
  const showSend = useMemoOne(
    () => alwaysShowSend || (text && text.trim().length > 0),
    [alwaysShowSend, text]
  )
  if (!showSend) {
    return null
  }
  return (
    <TouchableOpacity
      testID={TEST_ID.SEND_TOUCHABLE}
      accessible
      accessibilityLabel="send"
      style={[styles.container, containerStyle]}
      onPress={handleOnPress}
      accessibilityRole="button"
      disabled={disabled}
      {...sendButtonProps}
    >
      <View>
        <Text style={[styles.text, textStyle]}>
          <Ionicons name="ios-send" size={24} color={tokens.colorGreen600} />
        </Text>
      </View>
    </TouchableOpacity>
  )
}
Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: StylePropType,
  textStyle: StylePropType,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
  disabled: PropTypes.bool,
  sendButtonProps: PropTypes.object,
}
//# sourceMappingURL=Send.js.map
