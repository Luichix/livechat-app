import { getChatrooms } from '../../services/sql/operations'
import { Dispatch } from '@reduxjs/toolkit'
import { ChatroomType, TActionChatroom } from '../../models/constant'
import { SQLResultSet } from 'expo-sqlite'

export const loadChatroom = () => {
  return async (dispatch: Dispatch<TActionChatroom>) => {
    const dbResult = (await getChatrooms()) as SQLResultSet
    dispatch({
      type: ChatroomType.GET_CHATROOMS,
      payload: dbResult.rows._array,
    })
  }
}
