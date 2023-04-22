import { getMessages } from '../../services/sql/operations'
import { MessageType, TActionMessage } from '../../models/constant.d'
import { Dispatch } from 'react'
import { SQLResultSet } from 'expo-sqlite'
import { IMessage, TCustomerID } from '../../models/redux'

export const loadMessages = (customerID: TCustomerID) => {
  return async (dispatch: Dispatch<TActionMessage>) => {
    const dbResult = (await getMessages(customerID)) as SQLResultSet
    dispatch({ type: MessageType.GET_MESSAGES, payload: dbResult.rows._array })
  }
}

export const insertMessage = (newMessage: IMessage) => {
  return async (dispatch: Dispatch<TActionMessage>) => {
    dispatch({ type: MessageType.INSERT_MESSAGE, payload: newMessage })
  }
}

export const saveMessages = (allMessages: IMessage[]) => {
  return async (dispatch: Dispatch<TActionMessage>) => {
    dispatch({ type: MessageType.SAVE_MESSAGES, payload: allMessages })
  }
}
