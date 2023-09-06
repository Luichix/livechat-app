import { gql } from '@apollo/client'

export const CHAT_SUBSCRIPTION = gql`
  subscription onSubMessage {
    message {
      organizationID
      newMessage {
        customerID
        text
        senderID
        messageID
        datetime
        messageState
        sessionID
      }
    }
  }
`
