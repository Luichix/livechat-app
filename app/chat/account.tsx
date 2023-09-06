import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native'
import tokens from '../../src/styles/tokens'
import useUser from '../../src/hooks/useUser'

export default function AccountScreen() {
  const { logout } = useUser()

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.group}>
          <View style={styles.card}>
            <View style={styles.profile}>
              <Image
                source={{
                  uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png',
                }}
                style={styles.image}
              />
              <View style={styles.user}>
                <View style={styles.card2}>
                  <Text style={styles.name}>Chat Assistant</Text>
                </View>
                <View style={styles.card2}>
                  <TextInput
                    style={styles.input}
                    placeholder="Biografía"
                    placeholderTextColor={tokens.colorGray400}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.group}>
            <Pressable onPress={logout}>
              <View style={styles.card}>
                <Text style={styles.logout}>Cerrar sesión</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorBlue50,
    // alignItems: 'start',
    // justifyContent: 'start',
    padding: 20,
  },
  section: {
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
  },
  group: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  card: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  card2: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  input: {
    height: 24,
    fontSize: 16,
    color: '#333333',
    width: '100%',
  },
  logout: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: tokens.colorRed500,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 68,
    width: 68,
    borderRadius: 35,
    marginRight: 10,
  },
  user: {
    flexDirection: 'column',
    paddingLeft: 5,
  },
  name: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '#333333',
  },
})
