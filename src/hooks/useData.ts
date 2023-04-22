import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SESSION_AND_MESSAGE } from '../services/graphql/queries'
import { dataInterceptor } from '../utilities/interceptors/dataInterceptor'
import { Platform } from 'react-native'
import { useSubscription } from '@apollo/client'
import { subMessageInterceptor } from '../utilities/interceptors/dataInterceptor'
import { CHAT_SUBSCRIPTION } from '../services/graphql/subscriptions'
import { insertMessage, saveMessages } from '../redux/actions/message.action'
import { useSelector } from 'react-redux'
import { loadSessions, saveSessions } from '../redux/actions/session.action'
import { TRootState, useAppDispatch } from '../redux/store'
// import { loadSessions } from '../redux/actions/session.action'

const ID = '50254037951'

export default function useUser() {
  const [isLoad, setIsLoad] = useState(false)
  const dispatch = useAppDispatch()
  const userState = useSelector((state: TRootState) => state.user)
  const { data } = useQuery(GET_SESSION_AND_MESSAGE, {
    variables: { organizationId: ID },
  })
  useEffect(() => {
    if (data) {
      if (Platform.OS !== 'web') {
        setIsLoad(dataInterceptor(data))
        dispatch(loadSessions())
      } else {
        dispatch(saveSessions(data.getSessions))
        dispatch(saveMessages(data.getConversations))
        setIsLoad(true)
      }
    }
  }, [data])

  useSubscription(CHAT_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      const newMessage = subMessageInterceptor(
        subscriptionData.data.message.newMessage
      )
      if (userState._id !== newMessage.senderID) {
        dispatch(insertMessage(newMessage))
      }
    },
  })

  return {
    isLoad,
  }
}
