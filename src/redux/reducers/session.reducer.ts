import { SESSION } from '../../constants/chatConstants'
import { SessionType, TActionSession } from '../../models/constant.d'
import { ISession } from '../../models/redux'

export default (
  state = SESSION.SESSIONS_INITIAL_STATE,
  action: TActionSession
) => {
  switch (action.type) {
    case SessionType.GET_SESSIONS:
      return action.payload.map((m: ISession) => ({
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

    case SessionType.SAVE_SESSIONS:
      return action.payload.map((m: ISession) => ({
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
    default:
      return state
  }
}
