import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, Switch, Button } from 'react-native'
import tokens from '../../src/styles/tokens'
import { Ionicons } from '@expo/vector-icons'
import {
  addCustomer,
  getCustomers,
  deleteSession,
  getSessions,
  getAllMessages,
  getMessages,
} from '../../src/services/sql/operations'
// import { loadMessages, addMessage } from '../redux/actions/message.action'
// import { loadChatroom, addLastMessage } from '../redux/actions/chatroom.action'
import { useDispatch } from 'react-redux'
import { SheetManager } from 'react-native-actions-sheet'

export default function NotificaScreen() {
  const dispatch = useDispatch()

  const [isEnabled, setIsEnabled] = React.useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const [isEnabled2, setIsEnabled2] = React.useState(false)
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState)

  useEffect(() => {
    // dispatch(loadMessages())
    // dispatch(loadChatroom())
  }, [dispatch])

  const onAddUser = () => {
    addCustomer('50253378986', '50253378986')
      .then(console.log)
      .catch(console.log)
  }
  const onDeleteSession = () => {
    deleteSession('79b68baa-c59f-4aba-ab78-fbd6e5188b16')
      .then(console.log)
      .catch(console.log)
  }
  // const object = {
  //   messageID: Date.now(),
  //   rid: 'r4',
  //   nid: '50254037951',
  //   name: 'Luichix',
  //   text: 'Hola',
  //   datetime: '2020-10-03T14:48:00.000Z',
  //   date: '08/09/22',
  //   channel: 'Web',
  //   avatar: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
  //   kind: 'Client',
  //   organization: '50254037951',
  // }

  // const onAddMessage = async () => {
  //   await dispatch(addMessage(object))
  //     .then(() => {
  //       dispatch(
  //         addLastMessage({
  //           rid: object.rid,
  //           lastMessage: {
  //             messageID: object.messageID,
  //             text: object.text,
  //             datetime: object.datetime,
  //             channel: object.channel,
  //             user: {
  //               nid: object.nid,
  //               name: object.name,
  //               kind: object.kind,
  //             },
  //           },
  //         })
  //       )
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  const onGetUser = () => {
    getCustomers().then(console.log).catch(console.log)
  }
  const onGetSession = () => {
    getSessions().then(console.log).catch(console.log)
  }
  const onGetAllMessages = () => {
    getAllMessages().then(console.log).catch(console.log)
  }
  const onGetMessages = () => {
    getMessages().then(console.log).catch(console.log)
  }

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Pressable>
          <View style={[styles.card]}>
            <View style={styles.option}>
              <Text style={styles.label}>Mostrar notificaciones</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.card]}>
            <View style={styles.option}>
              <Text style={styles.label}>Sonido</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#333" />
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.card]}>
            <View style={styles.option}>
              <Text style={styles.label}>Vista previa del mensaje</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        <Button title="Get User" onPress={onGetUser} />
        <Button title="Save User" onPress={onAddUser} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        <Button title="Get All Messages" onPress={onGetAllMessages} />
        <Button title="Get Messages" onPress={onGetMessages} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        <Button title="Get Session" onPress={onGetSession} />
        <Button title="Delete Session" onPress={onDeleteSession} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        <Button
          title="Action Sheet"
          onPress={() => {
            SheetManager.show('ticket-sheet')
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
        }}
      >
        {/* <Button title="Redux Add" onPress={onAddMessage} /> */}
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
    height: 50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderBottomColor: '#eee',
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
})
