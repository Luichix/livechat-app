import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import tokens from '../styles/tokens'
import { useNavigation } from '@react-navigation/core'

export default function NotFoundScreen() {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Account')
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: 32,
          paddingBottom: 28,
        }}
      >
        Configuración
      </Text>
      <View style={styles.group}>
        <View style={styles.card}>
          <Pressable onPress={onPress}>
            <View style={styles.profile}>
              <Image
                source={{
                  uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png',
                }}
                style={styles.image}
              />
              <View style={styles.user}>
                <Text style={styles.name}>Chat Assistant</Text>
                <Text style={styles.status}>Disponible</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.group}>
          <Pressable
            onPress={() => {
              navigation.navigate('Notification')
            }}
          >
            <View style={styles.card}>
              <View style={styles.option}>
                <View style={[styles.icon, { backgroundColor: '#F345B8' }]}>
                  <Feather name="bell" size={24} color="white" />
                </View>
                <Text style={styles.label}>Notificaciones</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#333" />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Help')
            }}
          >
            <View style={styles.card}>
              <View style={styles.option}>
                <View style={[styles.icon, { backgroundColor: '#2371E7' }]}>
                  <Feather name="help-circle" size={24} color="white" />
                </View>
                <Text style={styles.label}>Ayuda</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#333" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorBaseWhite,
    // alignItems: 'start',
    // justifyContent: 'start',1
    paddingTop: 40,
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
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
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
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 10,
    fontSize: 16,
    color: '#333333',
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
    fontSize: 24,
    color: '#333333',
  },
  status: {
    fontSize: 14,
    color: '#333333',
  },
})
