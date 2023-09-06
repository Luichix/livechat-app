import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSessions } from '../../services/sql/operations'
import { SQLResultSet } from 'expo-sqlite'
import { ISession } from '../../models/redux'

interface SessionState {
  pending: boolean
  error: boolean
  session: ISession[]
}

export const SESSIONS_INITIAL_STATE: SessionState = {
  session: [],
  pending: false,
  error: false,
}

export const loadSessionFromLocalDatabase = createAsyncThunk(
  'session/loadSession',
  async () => {
    const dbResult = (await getSessions()) as SQLResultSet
    return dbResult.rows._array
  },
)

export const sessionSlice = createSlice({
  name: 'session',
  initialState: SESSIONS_INITIAL_STATE,
  reducers: {
    getSession: (state, action) => {
      state.session = adapterSessionFromServer(action.payload)
    },
    resetSession: () => SESSIONS_INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSessionFromLocalDatabase.pending, (state) => {
        state.pending = true
      })
      .addCase(loadSessionFromLocalDatabase.fulfilled, (state, { payload }) => {
        state.pending = false
        state.session = adapterSessionFromLocalDatabase(payload)
      })
      .addCase(loadSessionFromLocalDatabase.rejected, (state) => {
        state.pending = false
        state.error = true
      })
  },
})

export const { getSession, resetSession } = sessionSlice.actions

export default sessionSlice.reducer

const adapterSessionFromServer = (payload: ISession[]) => {
  return payload.map((m: ISession) => ({
    customerID: m.customerID,
    name: m.name,
    state: m.state,
    sessionID: m.sessionID,
    agentID: m.agentID,
    channel: m.channel,
    sessionState: m.sessionState,
    username: m.username,
    avatar: m.avatar,
    messageID: m.messageID,
    senderId: m.senderID,
    lastMessage: m.text,
    datetime: m.datetime,
    messageState: m.messageState,
  }))
}

const adapterSessionFromLocalDatabase = (payload: ISession[]) => {
  return payload.map((m: ISession) => ({
    customerID: m.from_user,
    name: m.from_user,
    state: m.state,
    sessionID: m.watson_session,
    agentID: m.assignedTo,
    channel: m.channel,
    sessionState: m.sessionState,
    username: m.username,
    avatar: m.avatar,
    messageID: m.messageID,
    senderId: m.senderID,
    lastMessage: m.text,
    datetime: m.datetime,
    messageState: m.messageState,
  }))
}
