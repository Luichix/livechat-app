import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native'
import tokens from '../../styles/tokens'


const InputText = forwardRef(function InputText(
  {
    type,
    keyboardType,
    placeholder,
    onChangeText = () => {},
    value,
    secureTextEntry = false,
    blurOnSubmit,
    onSubmitEditing,
    returnKeyType,
  },
  ref
) {
  return (
    <TextInput
      ref={ref}
      value={value}
      onChangeText={(content) => onChangeText(content)}
      textContentType={type}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      keyboardType={keyboardType}
      multiline={false}
      editable={true}
      autoCorrect={false}
      placeholderTextColor={tokens.colorGray400}
      style={[styles.inputText, styles.input]}
      blurOnSubmit={blurOnSubmit}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
    />
  )
})

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingTop: 5,
    backgroundColor: 'transparent',
  },
  inputText: {
    color: tokens.colorGray500,
    fontSize: 14,
  },
})


export default React.memo(InputText)



import { ReactNode } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface InputProps {
    type: string;
    keyboardType: string;
    placeholder: string;
    onChangeText: Function;
    value: string;
    secureTextEntry: boolean;
    blurOnSubmit: boolean;
    onSubmitEditing: Function;
    returnKeyType: string;
}
/**
export declare function Avatar<TMessage extends IMessage = IMessage>(props: AvatarProps<TMessage>): JSX.Element | null;
export declare namespace Avatar {
    var defaultProps: {
        renderAvatarOnTop: boolean;
        showAvatarForEveryMessage: boolean;
        position: string;
        currentMessage: {
            user: null;
        };
        previousMessage: {};
        nextMessage: {};
        containerStyle: {};
        imageStyle: {};
        onPressAvatar: () => void;
        onLongPressAvatar: () => void;
    };
    var propTypes: {
        renderAvatarOnTop: PropTypes.Requireable<boolean>;
        showAvatarForEveryMessage: PropTypes.Requireable<boolean>;
        position: PropTypes.Requireable<string>;
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        onPressAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPressAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
        imageStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<number | boolean | object>;
            right: PropTypes.Requireable<number | boolean | object>;
        }>>;
    };
}

 */