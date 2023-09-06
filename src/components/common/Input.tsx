import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Input({
  value,
  onChangeText,
  textContentType,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  multiline,
  editable,
  autoCorrect,
  placeholderTextColor,
  style,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      textContentType={textContentType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      multiline={multiline}
      editable={editable}
      autoCorrect={autoCorrect}
      placeholderTextColor={placeholderTextColor}
      style={[styles.input, style]}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingTop: 5,
    backgroundColor: 'transparent',
  },
})
