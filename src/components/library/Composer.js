import PropTypes from 'prop-types'
import React from 'react'
import { Platform, StyleSheet, TextInput } from 'react-native'
import { DEFAULT_PLACEHOLDER } from './Constant'
import Color from './Color'
import { StylePropType } from './utils'

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 16,
    lineHeight: 16,
    padding: Platform.select({ ios: 8, android: 4, web: 8 }),
  },
})
export function Composer({
  disableComposer = false,
  keyboardAppearance = 'default',
  multiline = true,
  // onContentSizeChange = () => {},
  onTextChanged = () => {},
  placeholder = DEFAULT_PLACEHOLDER,
  placeholderTextColor = Color.defaultColor,
  text = '',
  textInputAutoFocus = false,
  textInputProps = {},
  textInputStyle,
}) {
  const [height, setHeight] = React.useState(0)
  return (
    <TextInput
      testID={placeholder}
      accessible
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      multiline={multiline}
      editable={!disableComposer}
      onChangeText={onTextChanged}
      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height)
      }}
      autoFocus={textInputAutoFocus}
      value={text}
      style={[
        styles.textInput,
        textInputStyle,
        {
          ...Platform.select({
            web: {
              height: Math.max(height, 34),
            },
          }),
        },
        {
          ...Platform.select({
            web: {
              outlineWidth: 0,
              outlineColor: 'transparent',
              outlineOffset: 0,
            },
          }),
        },
      ]}
      enablesReturnKeyAutomatically
      underlineColorAndroid="transparent"
      keyboardAppearance={keyboardAppearance}
      {...textInputProps}
    />
  )
}
Composer.propTypes = {
  composerHeight: PropTypes.number,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  textInputProps: PropTypes.object,
  onTextChanged: PropTypes.func,
  multiline: PropTypes.bool,
  disableComposer: PropTypes.bool,
  textInputStyle: StylePropType,
  textInputAutoFocus: PropTypes.bool,
  keyboardAppearance: PropTypes.string,
}
//# sourceMappingURL=Composer.js.map
