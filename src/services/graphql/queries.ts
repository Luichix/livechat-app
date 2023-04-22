import { gql } from '@apollo/client'

export const GET_CUSTOMERS = gql`
  query GetCustomer($organizationId: String!) {
    getCustomer(organizationID: $organizationId) {
      _id
      lastChat
    }
  }
`

export const GET_SESSIONS = gql`
  query GetSessions {
    getSessions {
      _id
      watson_session
      from_user
      lastModified
      assignedTo
      channel
      sessionState
    }
  }
`

export const GET_MESSAGES = gql`
  query getMessages($organizationId: String!) {
    getConversations(organizationID: $organizationId) {
      _id
      sessionID
      text
      senderID
      messageState
      datetime
      customerID
    }
  }
`

export const GET_USER_INFO = gql`
  query getUserInfo($email: String!) {
    getAgentInfo(email: $email) {
      _id
      email
      username
      organizationID
    }
  }
`

export const LOGIN_AGENT = gql`
  query LoginAgent($email: String!, $password: String!) {
    loginAgent(email: $email, password: $password) {
      _id
      email
      organizationID
      username
    }
  }
`

export const LOGOUT_AGENT = gql`
  query LogoutAgent($email: String!) {
    logoutAgent(email: $email)
  }
`

export const GET_SESSION_AND_MESSAGE = gql`
  query getSessionAndMessage($organizationId: String!) {
    getSessions {
      _id
      watson_session
      from_user
      lastModified
      assignedTo
      channel
      sessionState
    }
    getConversations(organizationID: $organizationId) {
      _id
      sessionID
      text
      senderID
      messageState
      datetime
      customerID
    }
  }
`
