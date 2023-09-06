import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/user.slice'
import messages from './slices/message.slice'
import chatrooms from './slices/chatroom.slice'
import sessions from './slices/session.slice'

export type RootState = {
  user: ReturnType<typeof user>
  messages: ReturnType<typeof messages>
  chatrooms: ReturnType<typeof chatrooms>
  sessions: ReturnType<typeof sessions>
}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default function getStore(incomingPreloadState?: RootState) {
  const store = configureStore({
    reducer: combineReducers({
      user,
      messages,
      chatrooms,
      sessions,
    }),
    preloadedState: incomingPreloadState,
  })
  return store
}

export type AppStore = ReturnType<typeof getStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
