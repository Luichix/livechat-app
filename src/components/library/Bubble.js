/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import PropTypes from 'prop-types'
import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { GiftedChatContext } from './GiftedChatContext'
import { QuickReplies } from './QuickReplies'
import { MessageText } from './MessageText'
import { MessageImage } from './MessageImage'
import { MessageVideo } from './MessageVideo'
import { MessageAudio } from './MessageAudio'
import { Time } from './Time'
import Color from './Color'
import { StylePropType, isSameUser, isSameDay } from './utils'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

/** Styles Bubble Left and Right */
const styles = {
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.leftBubbleBackground,
      marginRight: 60,
      minHeight: 20,
      alignItems: 'center',
      maxWidth: Platform.select({ ios: '85%', android: '85%', web: '50%' }),
      paddingRight: 5,
      paddingHorizontal: Platform.select({ web: 10 }),
      paddingVertical: Platform.select({ web: 5 }),
    },
    split: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    containerToNext: {
      borderBottomLeftRadius: 10,
    },
    containerToPrevious: {
      borderTopLeftRadius: 10,
    },
    float: {
      position: 'relative',
      paddingRight: 5,
      paddingLeft: 30,
      flexDirection: 'row',
      marginBottom: 3,
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.defaultBlue,
      marginLeft: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
      maxWidth: Platform.select({ ios: '85%', android: '85%', web: '50%' }),
      paddingRight: 5,
      paddingHorizontal: Platform.select({ web: 10 }),
      paddingVertical: Platform.select({ web: 5 }),
    },
    split: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    containerToNext: {
      borderBottomRightRadius: 10,
    },
    containerToPrevious: {
      borderTopRightRadius: 10,
    },
    float: {
      position: 'relative',
      paddingRight: 5,
      paddingLeft: 30,
      flexDirection: 'row',
      marginBottom: 3,
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
  }),
  content: StyleSheet.create({
    tick: {
      fontSize: 10,
      backgroundColor: Color.backgroundTransparent,
      color: Color.white,
    },
    tickView: {
      paddingLeft: 4,
      flexDirection: 'row',
    },
    username: {
      fontSize: 10,
      backgroundColor: 'transparent',
      color: '#aaa',
    },
    bot: {
      fontSize: 10,
      backgroundColor: 'transparent',
      color: Color.white,
    },
    usernameView: {
      flexDirection: 'row',
      marginHorizontal: 5,
    },
  }),
}

/** Default Option to Press Bubble Chat */
const DEFAULT_OPTION_TITLES = ['Copy Text', 'Cancel']

/** Class Bubble React Component */
export default class Bubble extends React.Component {
  constructor() {
    super(...arguments)
    this.onPress = () => {
      if (this.props.onPress) {
        this.props.onPress(this.context, this.props.currentMessage)
      }
    }
    this.onLongPress = () => {
      const { currentMessage } = this.props
      if (this.props.onLongPress) {
        this.props.onLongPress(this.context, this.props.currentMessage)
      } else if (currentMessage && currentMessage.text) {
        const { optionTitles } = this.props
        const options =
          optionTitles && optionTitles.length > 0
            ? optionTitles.slice(0, 2)
            : DEFAULT_OPTION_TITLES
        const cancelButtonIndex = options.length - 1
        this.context.actionSheet().showActionSheetWithOptions(
          {
            options,
            cancelButtonIndex,
          },
          (buttonIndex) => {
            switch (buttonIndex) {
              case 0:
                Clipboard.setStringAsync(currentMessage.text)
                break
              default:
                break
            }
          }
        )
      }
    }
  }

  // Method StyledBubbleToNext: Ajust style Bubble to Next Message
  styledBubbleToNext() {
    const { currentMessage, nextMessage, position, containerToNextStyle } =
      this.props
    if (
      currentMessage &&
      nextMessage &&
      position &&
      isSameUser(currentMessage, nextMessage) &&
      isSameDay(currentMessage, nextMessage)
    ) {
      return [
        styles[position].containerToNext,
        containerToNextStyle && containerToNextStyle[position],
      ]
    }
    return null
  }

  // Method StyledBubbleToPrevious: Ajust style Bubble to Previous Message
  styledBubbleToPrevious() {
    const {
      currentMessage,
      previousMessage,
      position,
      containerToPreviousStyle,
    } = this.props
    if (
      currentMessage &&
      previousMessage &&
      position &&
      isSameUser(currentMessage, previousMessage) &&
      isSameDay(currentMessage, previousMessage)
    ) {
      return [
        styles[position].containerToPrevious,
        containerToPreviousStyle && containerToPreviousStyle[position],
      ]
    }
    return null
  }

  // Render Quick Replies
  renderQuickReplies() {
    const {
      currentMessage,
      onQuickReply,
      nextMessage,
      renderQuickReplySend,
      quickReplyStyle,
      quickReplyTextStyle,
    } = this.props
    if (currentMessage && currentMessage.quickReplies) {
      const { containerStyle, wrapperStyle, ...quickReplyProps } = this.props
      if (this.props.renderQuickReplies) {
        return this.props.renderQuickReplies(quickReplyProps)
      }
      return (
        <QuickReplies
          {...{
            currentMessage,
            onQuickReply,
            nextMessage,
            renderQuickReplySend,
            quickReplyStyle,
            quickReplyTextStyle,
          }}
        />
      )
    }
    return null
  }

  // Render Message Text
  renderMessageText() {
    if (this.props.currentMessage && this.props.currentMessage.text) {
      const {
        containerStyle,
        wrapperStyle,
        optionTitles,
        ...messageTextProps
      } = this.props
      if (this.props.renderMessageText) {
        return this.props.renderMessageText(messageTextProps)
      }
      return <MessageText {...messageTextProps} />
    }
    return null
  }

  // Render Message Image
  renderMessageImage() {
    if (this.props.currentMessage && this.props.currentMessage.image) {
      const { containerStyle, wrapperStyle, ...messageImageProps } = this.props
      if (this.props.renderMessageImage) {
        return this.props.renderMessageImage(messageImageProps)
      }
      return <MessageImage {...messageImageProps} />
    }
    return null
  }

  // Render Message Video
  renderMessageVideo() {
    if (this.props.currentMessage && this.props.currentMessage.video) {
      const { containerStyle, wrapperStyle, ...messageVideoProps } = this.props
      if (this.props.renderMessageVideo) {
        return this.props.renderMessageVideo(messageVideoProps)
      }
      return <MessageVideo {...messageVideoProps} />
    }
    return null
  }

  // Render Message Audio
  renderMessageAudio() {
    if (this.props.currentMessage && this.props.currentMessage.audio) {
      const { containerStyle, wrapperStyle, ...messageAudioProps } = this.props
      if (this.props.renderMessageAudio) {
        return this.props.renderMessageAudio(messageAudioProps)
      }
      return <MessageAudio {...messageAudioProps} />
    }
    return null
  }
  renderTicks() {
    const { currentMessage, renderTicks, user } = this.props
    if (renderTicks && currentMessage) {
      return renderTicks(currentMessage)
    }
    if (
      currentMessage &&
      user &&
      currentMessage.user &&
      currentMessage.user.senderID !== currentMessage.user.customerID
    ) {
      return null
    }
    if (
      currentMessage &&
      (currentMessage.sent || currentMessage.received || currentMessage.pending)
    ) {
      return (
        <View style={styles.content.tickView}>
          {((!!currentMessage.received || !!currentMessage.sent) && (
            <Ionicons
              name={currentMessage.received ? 'checkmark-done' : 'checkmark'}
              size={16}
              style={[styles.content.tick, this.props.tickStyle]}
              color={'white'}
            />
          )) ||
            (!!currentMessage.pending && (
              <MaterialCommunityIcons
                name="timer-outline"
                size={16}
                style={[styles.content.tick, this.props.tickStyle]}
                color={'white'}
              />
            ))}
        </View>
      )
    }
    return null
  }
  renderTime() {
    if (this.props.currentMessage && this.props.currentMessage.datetime) {
      const { containerStyle, wrapperStyle, textStyle, ...timeProps } =
        this.props
      if (this.props.renderTime) {
        return this.props.renderTime(timeProps)
      }
      return <Time {...timeProps} />
    }
    return null
  }
  renderUsername() {
    const { currentMessage, user } = this.props
    if (this.props.renderUsernameOnMessage && currentMessage) {
      if (
        user &&
        currentMessage.user.senderID !== currentMessage.user.customerID
      ) {
        return (
          <View style={styles.content.usernameView}>
            <Text style={[styles.content.bot, this.props.usernameStyle]}>
              {currentMessage.user.name}
            </Text>
          </View>
        )
      }
      return (
        <View style={styles.content.usernameView}>
          <Text style={[styles.content.username, this.props.usernameStyle]}>
            {currentMessage.user.name}
          </Text>
        </View>
      )
    }
    return null
  }
  renderCustomView() {
    if (this.props.renderCustomView) {
      return this.props.renderCustomView(this.props)
    }
    return null
  }
  renderBubbleContent() {
    return this.props.isCustomViewBottom ? (
      <View>
        {this.renderMessageImage()}
        {this.renderMessageVideo()}
        {this.renderMessageAudio()}
        {this.renderMessageText()}
        {this.renderCustomView()}
      </View>
    ) : (
      <View>
        {this.renderCustomView()}
        {this.renderMessageImage()}
        {this.renderMessageVideo()}
        {this.renderMessageAudio()}
        {this.renderMessageText()}
      </View>
    )
  }
  render() {
    const { position, containerStyle, wrapperStyle, bottomContainerStyle } =
      this.props
    return (
      <View
        style={[
          styles[position].container,
          containerStyle && containerStyle[position],
        ]}
      >
        <View
          style={[
            styles[position].wrapper,
            this.styledBubbleToNext(),
            this.styledBubbleToPrevious(),
            wrapperStyle && wrapperStyle[position],
          ]}
        >
          <TouchableWithoutFeedback
            onPress={this.onPress}
            onLongPress={this.onLongPress}
            accessibilityRole="text"
            {...this.props.touchableProps}
          >
            <View style={styles[position].split}>
              {this.renderBubbleContent()}
              <View
                style={[
                  styles[position].float,
                  bottomContainerStyle && bottomContainerStyle[position],
                ]}
              >
                {this.renderUsername()}
                {this.renderTime()}
                {this.renderTicks()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {this.renderQuickReplies()}
      </View>
    )
  }
}

/** Bubble Default Props and Context Type */

Bubble.contextType = GiftedChatContext
Bubble.defaultProps = {
  touchableProps: {},
  onPress: null,
  onLongPress: null,
  renderMessageImage: null,
  renderMessageVideo: null,
  renderMessageAudio: null,
  renderMessageText: null,
  renderCustomView: null,
  renderUsername: null,
  renderTicks: null,
  renderTime: null,
  renderQuickReplies: null,
  onQuickReply: null,
  position: 'left',
  optionTitles: DEFAULT_OPTION_TITLES,
  currentMessage: {
    text: null,
    datetime: null,
    image: null,
  },
  nextMessage: {},
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  bottomContainerStyle: {},
  tickStyle: {},
  usernameStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {},
}

/** Bubble Prop Types */

Bubble.propTypes = {
  user: PropTypes.object.isRequired,
  touchableProps: PropTypes.object,
  onLongPress: PropTypes.func,
  renderMessageImage: PropTypes.func,
  renderMessageVideo: PropTypes.func,
  renderMessageAudio: PropTypes.func,
  renderMessageText: PropTypes.func,
  renderCustomView: PropTypes.func,
  isCustomViewBottom: PropTypes.bool,
  renderUsernameOnMessage: PropTypes.bool,
  renderUsername: PropTypes.func,
  renderTime: PropTypes.func,
  renderTicks: PropTypes.func,
  renderQuickReplies: PropTypes.func,
  onQuickReply: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  optionTitles: PropTypes.arrayOf(PropTypes.string),
  currentMessage: PropTypes.object,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
  wrapperStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
  bottomContainerStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
  tickStyle: StylePropType,
  usernameStyle: StylePropType,
  containerToNextStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
  containerToPreviousStyle: PropTypes.shape({
    left: StylePropType,
    right: StylePropType,
  }),
}
//# sourceMappingURL=Bubble.js.map
