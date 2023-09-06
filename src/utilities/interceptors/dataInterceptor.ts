import {
  addMessage,
  addSession,
  addCustomer,
} from '../../services/sql/operations'

export function sessionInterceptor(data: any) {
  try {
    data.getSessions.forEach((element:any) => {
      addCustomer(element.from_user, element.from_user)
      addSession(
        element.watson_session,
        element.from_user,
        element.assignedTo,
        element.channel,
        element.sessionState
      )
    })
    return true
  } catch {
    return false
  }
}

export const messageInterceptor = (data) => {
  try {
    data.getConversations.forEach((element) => {
      addMessage(
        element._id,
        element.sessionID,
        element.customerID,
        element.senderID,
        element.text,
        element.datetime,
        element.messageState,
        element._id
      )
    })
    return true
  } catch {
    return false
  }
}

export const subMessageInterceptor = (data) => {
  try {
    addCustomer(data.customerID, data.customerID)
    addSession(
      data.sessionID,
      data.customerID,
      data.assignedTo,
      data.channel,
      data.sessionState
    )
    addMessage(
      data.messageID,
      data.sessionID,
      data.customerID,
      data.senderID,
      data.text,
      data.datetime,
      data.messageState,
      data.messageID
    )
    return data
  } catch {
    return false
  }
}

export const dataInterceptor = (data) => {
  try {
    data.getSessions.forEach((element) => {
      addCustomer(element.from_user, element.from_user)
      addSession(
        element.watson_session,
        element.from_user,
        element.assignedTo,
        element.channel,
        element.sessionState
      )
    })

    data.getConversations.forEach((element) => {
      addMessage(
        element._id,
        element.sessionID,
        element.customerID,
        element.senderID,
        element.text,
        element.datetime,
        element.messageState,
        element._id
      )
    })
    return true
  } catch {
    console.log('no database', false)
    return false
  }
}
