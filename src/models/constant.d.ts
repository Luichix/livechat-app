import { SQLResultSet } from 'expo-sqlite'
import { IMessage, ISession } from './redux'

export enum ChatroomType {
  GET_CHATROOMS = 'GET_CHATROOMS',
}

export enum MessageType {
  GET_MESSAGES = 'GET_MESSAGES',
  INSERT_MESSAGE = 'INSERT_MESSAGE',
  SAVE_MESSAGES = 'SAVE_MESSAGES',
}

export enum SessionType {
  GET_SESSIONS = 'GET_SESSIONS',
  SAVE_SESSIONS = 'SAVE_SESSIONS',
}

interface ILoadChatroom {
  type: ChatroomType.GET_CHATROOMS
  payload: SQLResultSet.rows._array
}

interface ILoadMessage {
  type: MessageType.GET_MESSAGES
  payload: SQLResultSet.rows._array
}
interface IInserMessage {
  type: MessageType.INSERT_MESSAGES
  payload: IMessage
}
interface ISaveMessage {
  type: MessageType.SAVE_MESSAGES
  payload: IMessage[]
}

interface ILoadSession {
  type: SessionType.GET_SESSIONS
  payload: SQLResultSet.rows._array
}
interface ISaveSession {
  type: SessionType.SAVE_SESSIONS
  payload: ISession[]
}
export type TActionChatroom = ILoadChatroom
export type TActionMessage = ILoadMessage | IInserMessage | ISaveMessage
export type TActionSession = ILoadSession | ISaveSession

export type TActions = TActionChatroom | TActionMessage | TActionSession
