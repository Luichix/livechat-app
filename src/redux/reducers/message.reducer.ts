import { MESSAGE } from '../../constants/chatConstants'
import { MessageType, TActionMessage } from '../../models/constant.d'
import { IMessage } from '../../models/redux'
import { formatNameAdapter } from '../../utilities/adapters/formatName'

export default (
  state = MESSAGE.MESSAGES_INITIAL_STATE,
  action: TActionMessage
) => {
  switch (action.type) {
    case MessageType.GET_MESSAGES:
      return action.payload.map((m: IMessage) => ({
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

    case MessageType.INSERT_MESSAGE:
      return [
        {
          messageID: action.payload.messageID,
          sessionID: action.payload.sessionID,
          customerID: action.payload.customerID,
          text: action.payload.text,
          datetime: action.payload.datetime,
          messageState: action.payload.messageState,
          user: {
            customerID: action.payload.customerID,
            senderID: action.payload.senderID,
            name: formatNameAdapter(
              action.payload.name,
              action.payload.customerID
            ),
            avatar: action.payload.avatar,
          },
        },
        ...state,
      ]
    case MessageType.SAVE_MESSAGES:
      return action.payload.map((m: IMessage) => ({
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
    default:
      return state
  }
}
