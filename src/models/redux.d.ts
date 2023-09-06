export type TCustomerID = string
export type TAgentID = string
export type TName = string
export type TAvatar = string
export type TSessionID = string
export type TSessionState = string
export type TChannel = string
export type TMessageID = string
export type TSenderID = string
export type TText = string
export type TDatetime = string
export type TMessageState = string
export type TState = number

export interface IChatroom {
  name?: TName
  customerID?: customerID
  datetime?: TDatetime
  messageState?: TMessageState
  sessionState?: TSessionState
  lastMessage?: string
}

export interface IMessage {
  _id?: string
  name?: TName
  avatar?: TAvatar
  senderID?: TSenderID
  messageID?: TMessageID
  sessionID?: TSessionID
  customerID?: TCustomerID
  text?: TText
  datetime?: TDatetime
  messageState?: TMessageState
}

export interface ISession extends IMessage {
  watson_session?: string
  assignedTo?: string
  from_user?: string
  state?: string
  username?: string
  lastMessage?: string
  channel?: TChannel
  agentID?: TAgentID
  sessionState?: TSessionState
  senderId?: TSenderID
}

export type TDBResult = object
