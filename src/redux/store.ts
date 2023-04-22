import { configureStore, combineReducers, Dispatch } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'
// import messagesReducer from './reducers/message.reducer'
// import chatroomsReducer from './reducers/chatroom.reducer'
// import sessionsReducer from './reducers/session.reducer'
import { useDispatch } from 'react-redux'
import { TActions } from '../models/constant'

export type TRootState = {
  user: ReturnType<typeof userReducer>
  // messages: ReturnType<typeof messagesReducer>
  // chatrooms: ReturnType<typeof chatroomsReducer>
  // sessions: ReturnType<typeof sessionsReducer>
}

export const rootReducer = combineReducers<TRootState>({
  user: userReducer,
  // messages: messagesReducer,
  // chatrooms: chatroomsReducer,
  // sessions: sessionsReducer,
})

export const rootStore = configureStore<TRootState, TActions, any>({
  reducer: rootReducer,
})

export type TAppDispatch = Dispatch<TActions>
export const useAppDispatch = () => useDispatch<TAppDispatch>()
