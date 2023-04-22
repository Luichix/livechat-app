import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import tokens from '../../styles/tokens'
import { MaterialIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import useUser from '../../hooks/useUser'
import useInput from '../../hooks/useInput'
import InputText from './InputText'

export default function LoginForm({ content }) {
  const { login } = useUser()
  const email = useInput()
  const password = useInput()
  const [see, setSee] = useState(true)
  const secondInputRef = useRef()
  const handleLogin = () => {
    login({ email: email.state, password: password.state })
  }

  return (
    <View style={styles.form}>
      <View style={styles.inputCard}>
        <Fontisto name="email" style={styles.inputIcon} />
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{content.label_email}</Text>
          <InputText
            type="emailAddress"
            keyboardType="email-address"
            placeholder={content.placeholder_email}
            value={email.state}
            onChangeText={email.handleChange}
            onSubmitEditing={() => {
              secondInputRef.current.focus()
            }}
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>
      </View>
      <View style={styles.inputCard}>
        <MaterialIcons name="lock-outline" style={styles.inputIcon} />
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{content.label_password}</Text>
          <InputText
            type="password"
            keyboardType="default"
            placeholder={content.placeholder_password}
            value={password.state}
            onChangeText={password.handleChange}
            secureTextEntry={see}
            ref={secondInputRef}
          />
        </View>
        <TouchableOpacity onPress={() => setSee(!see)}>
          {see ? (
            <Feather name="eye-off" style={styles.inputIcon} />
          ) : (
            <Feather name="eye" style={styles.inputIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{content.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 10,
    width: '100%',
    maxWidth: 400,
  },
  section: {
    paddingVertical: 16,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingVertical: 10,
  },
  input: {
    fontSize: 14,
    paddingTop: 5,
    backgroundColor: 'transparent',
  },
  button: {
    padding: 16,
    backgroundColor: tokens.colorPrimary,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: tokens.colorBaseTransparent,
    alignSelf: 'stretch',
  },
  buttonText: {
    fontWeight: 'bold',
    color: tokens.colorBaseWhite,
    fontSize: 16,
    textAlign: 'center',
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: tokens.colorGray300,
    borderRadius: 6,
    backgroundColor: tokens.colorBaseWhite,
    marginVertical: 5,
  },
  inputGroup: {
    flex: 1,
    paddingVertical: 10,
  },
  inputIcon: {
    color: tokens.colorPrimary,
    fontSize: 20,
    width: 65,
    textAlign: 'center',
  },
  inputLabel: {
    color: tokens.colorGray700,
    fontSize: 14,
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  inputText: {
    color: tokens.colorGray500,
    fontSize: 14,
  },
})
