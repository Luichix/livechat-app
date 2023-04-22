import { gql } from '@apollo/client'

export const SEND_CHAT = gql`
  mutation sendMessage(
    $organizationID: String!
    $customerID: String!
    $text: String!
    $senderID: String!
    $sessionID: String!
  ) {
    sendMessage(
      organizationID: $organizationID
      newMessage: {
        customerID: $customerID
        text: $text
        senderID: $senderID
        sessionID: $sessionID
      }
    ) {
      messageID
      datetime
      messageState
    }
  }
`
