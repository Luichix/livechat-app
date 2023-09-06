import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native'
import tokens from '../../src/styles/tokens'
import text from '../../src/data/login.json'
import { FontAwesome } from '@expo/vector-icons'
import useLanguage from '../../src/hooks/useLanguage'
import LoginForm from '../../src/components/common/LoginForm'
import { removeToStorage } from '../../src/services/helpers/asyncStorage'

const Login = ({ navigation }) => {
  const { loadText } = useLanguage()
  const content = loadText(text)

  const viewOnboarding = () => {
    removeToStorage('@viewOnboarding')
    navigation.navigate('Board')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}
      >
        {Platform.OS !== 'web' && (
          <TouchableOpacity
            onPress={viewOnboarding}
            style={{ alignSelf: 'flex-start', paddingTop: 20, paddingLeft: 20 }}
          >
            <FontAwesome name="arrow-circle-left" style={styles.icon} />
          </TouchableOpacity>
        )}
        <View style={styles.head}>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.label}>{content.message}</Text>
          <Text style={styles.label}>{content.please_login}</Text>
          <LoginForm content={content} />
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.link}>{content.forgot}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
  },
  title: {
    color: tokens.colorGray700,
    fontSize: 28,
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  label: {
    color: tokens.colorGray600,
    fontSize: 14,
    fontStyle: 'italic',
    paddingBottom: 2,
  },
  link: {
    color: tokens.colorPrimary,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  forgot: {
    paddingVertical: 5,
  },
  icon: {
    color: tokens.colorPrimary,
    fontSize: 30,
    height: 50,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
})
