import { CHATROOM } from '../../constants/chatConstants'
import { ChatroomType, TActionChatroom } from '../../models/constant.d'
import { IChatroom } from '../../models/redux'

export default (
  state = CHATROOM.CHATROOMS_INITIAL_STATE,
  action: TActionChatroom
) => {
  switch (action.type) {
    case ChatroomType.GET_CHATROOMS:
      return action.payload.map((c: IChatroom) => ({
        customerID: c.customerID,
        name: c.name,
        lastMessage: c.lastMessage,
        datetime: c.datetime,
        messageState: c.messageState,
        sessionState: c.sessionState,
      }))
    default:
      return state
  }
}
