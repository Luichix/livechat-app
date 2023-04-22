import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { GiftedChat } from '../components/library/GiftedChat'
import KeyboardShift from '../components/custom/KeyboardShift'
import { useMutation } from '@apollo/client'
import { SEND_CHAT } from '../services/graphql/mutation'
import { useDispatch, useSelector } from 'react-redux'
import { insertMessage } from '../redux/actions/message.action'

export default function Chat({ route }) {
  const messagesState = useSelector((state) => state.messages)
  const userState = useSelector((state) => state.user)
  const [messages, setMessages] = useState([])
  const [sendMessage, { data, loading, error }] = useMutation(SEND_CHAT)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (messagesState) {
      setMessages(messagesState.messages)
    }
  }, [messagesState])

  const date = new Date()
  const datetime = date.toISOString()

  useEffect(() => {
    if (data) {
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
    if (loading) {
      console.log('loading')
    }
  }, [data, loading, error])

  const onSend = useCallback((messages = []) => {
    console.log('enviando', messages[0].messageID)
    const newMessage = {
      customerID: route.params.customerID,
      text: messages[0].text,
      senderID: userState._id,
      sessionID: route.params.sessionID,
    }
    const loadMessage = {
      messageID: messages[0].messageID,
      datetime: datetime,
      messageState: 'pending',
    }
    sendMessage({
      variables: {
        organizationID: '50254037951',
        ...newMessage,
      },
    })

    dispatch(
      insertMessage({
        ...newMessage,
        ...loadMessage,
      })
    )
  }, [])

  return (
    <KeyboardShift>
      <GiftedChat
        inverted={true}
        messages={messages}
        renderAvatar={null}
        onSend={(messages) => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff',
        }}
        textInputStyle={{
          backgroundColor: '#fff',
          borderColor: '#cdcdcd',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 10,
          paddingRight: 5,
          lineHeight: 22,
        }}
        isKeyboardInternallyHandled={false}
        user={{
          _id: userState._id,
          name: userState.username,
          avatar: 'https://i.pravatar.cc/300',
        }}
        renderUsernameOnMessage={true}
      />
    </KeyboardShift>
  )
}
