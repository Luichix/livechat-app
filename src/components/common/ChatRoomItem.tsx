import React from 'react'
import {
  Text,
  Image,
  View,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native'
import dayjs from 'dayjs'
import tokens from '../../styles/tokens'
import { loadMessagesFromLocalDatabase } from '../../redux/slices/message.slice'
import { useAppDispatch } from '../../redux/store'
import IconState from './IconState'
import { useRouter } from 'expo-router'

interface ChatRoomItemProps {
  chatRoom: {
    newMessages: number
    lastMessage: string
    sessionID: string
    customerID: string
    datetime: string
    name: string
  }
}

export default function ChatRoomItem({ chatRoom }: ChatRoomItemProps) {
  const dispatch = useAppDispatch()

  const router = useRouter()
  const user = chatRoom.name
  chatRoom.newMessages = 1
  const avatar =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png'

  const onPress = async () => {
    if (Platform.OS !== 'web') {
      await dispatch(loadMessagesFromLocalDatabase(chatRoom.customerID))
    }

    router.push({
      pathname: 'chat/chat',
      params: {
        customerID: chatRoom.customerID,
        sessionID: chatRoom.sessionID,
        name: user,
        avatar:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      },
    })
  }

  const fecha = new Date(chatRoom.datetime)

  const message = chatRoom.lastMessage || chatRoom.sessionID

  const newMessage =
    message.length > 35 ? message.substring(0, 35) + '...' : message

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: avatar }} style={styles.image} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user}</Text>
            <IconState session={chatRoom}></IconState>
          </View>
          <View style={styles.bottomContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {newMessage}
            </Text>
            <Text style={styles.text}>{dayjs(fecha).format('DD/MM')}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    shadowColor: '#000000',
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: tokens.colorGray300,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -5,
    right: 10,
    backgroundColor: '#4EAC39',
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#4EAC39',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  text: {
    color: tokens.colorGray400,
  },
})
