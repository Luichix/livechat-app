import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SQLResultSet } from 'expo-sqlite'
import { getMessages } from '../../services/sql/operations'
import { IMessage, TCustomerID } from '../../models/redux'
import { formatNameAdapter } from '../../utilities/adapters/formatName'

interface MessageState {
  pending: boolean
  error: boolean
  messages: IMessage[]
}

export const MESSAGES_INITIAL_STATE: MessageState = {
  messages: [],
  pending: false,
  error: false,
}

export const loadMessagesFromLocalDatabase = createAsyncThunk(
  'messages/loadMessages',
  async (customerID: TCustomerID) => {
    const dbResult = (await getMessages(customerID)) as SQLResultSet
    return dbResult.rows._array
  },
)

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: MESSAGES_INITIAL_STATE,
  reducers: {
    insertMessage: (state, action) => {
      state.messages = adapterInsertMessage(action.payload, state.messages)
    },
    saveMessages: (state, action) => {
      state.messages = adapterSaveMessages(action.payload)
    },
    resetMessages: () => MESSAGES_INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMessagesFromLocalDatabase.pending, (state) => {
        state.pending = true
      })
      .addCase(
        loadMessagesFromLocalDatabase.fulfilled,
        (state, { payload }) => {
          state.pending = false
          state.messages = adapterMessagesFromLocalDatabase(payload)
        },
      )
      .addCase(loadMessagesFromLocalDatabase.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { insertMessage, saveMessages, resetMessages } =
  messagesSlice.actions

export default messagesSlice.reducer

const adapterMessagesFromLocalDatabase = (payload: IMessage[]) => {
  return payload.map((m: IMessage) => ({
    messageID: m.messageID,
    sessionID: m.sessionID,
    customerID: m.customerID,
    text: m.text,
    datetime: m.datetime,
    messageState: m.messageState,
    user: {
      customerID: m.customerID,
      senderID: m.senderID,
      name: formatNameAdapter(m.name, m.customerID),
      avatar: m.avatar,
    },
  }))
}

const adapterInsertMessage = (payload: IMessage, state: IMessage[]) => {
  return [
    {
      messageID: payload.messageID,
      sessionID: payload.sessionID,
      customerID: payload.customerID,
      text: payload.text,
      datetime: payload.datetime,
      messageState: payload.messageState,
      user: {
        customerID: payload.customerID,
        senderID: payload.senderID,
        name: formatNameAdapter(payload.name, payload.customerID),
        avatar: payload.avatar,
      },
    },
    ...state,
  ]
}
const adapterSaveMessages = (payload: IMessage[]) => {
  return payload.map((m: IMessage) => ({
    messageID: m._id,
    sessionID: m.sessionID,
    customerID: m.customerID,
    text: m.text,
    datetime: m.datetime,
    messageState: m.messageState,
    user: {
      customerID: m.customerID,
      senderID: m.senderID,
      name: formatNameAdapter(m.customerID, m.customerID),
      avatar: m.avatar,
    },
  }))
}
