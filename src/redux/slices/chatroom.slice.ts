import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IChatroom } from '../../models/redux'
import { getChatrooms } from '../../services/sql/operations'
import { SQLResultSet } from 'expo-sqlite'

interface ChatroomState {
  pending: boolean
  error: boolean
  chatroom: IChatroom[]
}

export const CHATROOMS_INITIAL_STATE: ChatroomState = {
  chatroom: [],
  pending: false,
  error: false,
}

export const loadChatroomFromLocalDatabase = createAsyncThunk(
  'chatroom/loadChatroom',
  async () => {
    const dbResult = (await getChatrooms()) as SQLResultSet
    return dbResult.rows._array
  },
)

export const chatroomSlice = createSlice({
  name: 'chatroom',
  initialState: CHATROOMS_INITIAL_STATE,
  reducers: {
    resetChatroom: () => CHATROOMS_INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadChatroomFromLocalDatabase.pending, (state) => {
        state.pending = true
      })
      .addCase(
        loadChatroomFromLocalDatabase.fulfilled,
        (state, { payload }) => {
          state.pending = false
          state.chatroom = adapterChatroomFromLocalDatabase(payload)
        },
      )
      .addCase(loadChatroomFromLocalDatabase.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { resetChatroom } = chatroomSlice.actions

export default chatroomSlice.reducer

const adapterChatroomFromLocalDatabase = (payload: IChatroom[]) => {
  return payload.map((c: IChatroom) => ({
    customerID: c.customerID,
    name: c.name,
    lastMessage: c.lastMessage,
    datetime: c.datetime,
    messageState: c.messageState,
    sessionState: c.sessionState,
  }))
}
