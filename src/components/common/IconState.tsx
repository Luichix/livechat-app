import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import tokens from '../../styles/tokens'
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons'

export default function IconState({ session }) {
  let iconName
  let IconComponent
  let iconColor
  let iconSize
  if (session.channel === 'whatsapp') {
    iconName = 'whatsapp'
    IconComponent = FontAwesome
    iconColor = '#25D366'
    iconSize = Platform.select({ web: 26, ios: 22, android: 22 })
  } else if (session.channel === 'messenger') {
    iconName = 'facebook-messenger'
    IconComponent = FontAwesome5
    iconColor = '#00B2FF'
    iconSize = Platform.select({ web: 22, ios: 18, android: 18 })
  } else {
    iconName = 'question-circle'
    IconComponent = FontAwesome5
    iconColor = '#40AEF0'
    iconSize = Platform.select({ web: 22, ios: 18, android: 18 })
  }

  let stateIcon
  let stateColor
  let stateSize = Platform.select({ web: 22, ios: 18, android: 18 })
  if (session.sessionState === 'open') {
    stateIcon = 'bell'
    stateColor = '#53AC56'
  } else if (session.sessionState === 'processing') {
    stateIcon = 'hour-glass'
    stateColor = '#FF7D00'
  } else if (session.sessionState === 'finalized') {
    stateIcon = 'flag'
    stateColor = '#FF4F8B'
  } else {
    stateIcon = 'info-with-circle'
    stateColor = '#40AEF0'
  }

  let assignedColor
  let assignedIcon

  if (session.agentID) {
    assignedColor = '#F46C18'
    assignedIcon = 'assignment-ind'
  } else {
    assignedColor = '#008AAD'
    assignedIcon = 'assignment-turned-in'
  }

  return (
    <View style={styles.sessionState}>
      <IconComponent name={iconName} size={iconSize} color={iconColor} />
      <MaterialIcons name={assignedIcon} size={20} color={assignedColor} />
      <Entypo name={stateIcon} size={stateSize} color={stateColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sessionState: {
    width: 60,
    flexDirection: 'row',
    // border: 10,
    // borderColor: 'black',
    // borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  badgeContainer: {
    backgroundColor: '#0ABF53',
    width: 18,
    height: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0ABF53',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colorGray300,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: tokens.colorGray400,
  },
  agent: {
    alignSelf: 'flex-end',
  },
  icons: {
    padding: 5,
  },
})
