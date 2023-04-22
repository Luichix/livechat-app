import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import dayjs from 'dayjs'
import Color from './Color'
import { TIME_FORMAT } from './Constant'
import { StylePropType } from './utils'
import { useChatContext } from './GiftedChatContext'

const styles = {
  left: StyleSheet.create({
    text: {
      color: Color.timeTextColor,
      fontSize: 10,
    },
  }),
  right: StyleSheet.create({
    text: {
      color: Color.white,
      fontSize: 10,
    },
  }),
}
export function Time({
  position = 'left',
  currentMessage,
  timeFormat = TIME_FORMAT,
  timeTextStyle,
}) {
  const { getLocale } = useChatContext()
  if (currentMessage === null) {
    return null
  }
  const time = dayjs(currentMessage.datetime)
    .locale(getLocale())
    .format(timeFormat)
  return (
    <View>
      <Text
        style={[
          styles[position].text,
          timeTextStyle && timeTextStyle[position],
        ]}
      >
        {time}
      </Text>
    </View>
  )
}
Time.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  currentMessage: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
  timeFormat: PropTypes.string,
  timeTextStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
}
//# sourceMappingURL=Time.js.map
