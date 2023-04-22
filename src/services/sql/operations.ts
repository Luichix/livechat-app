import db from './database'
import {
  GETCUSTOMERS,
  GETCHATROOMS,
  GETSESSIONS,
  GETMESSAGES,
  ADDCUSTOMER,
  ADDAGENT,
  ADDSESSION,
  ADDMESSAGE,
  UPDATECHATROOM,
  UPDATESESSIONSTATE,
  DELETESESSION,
  GET_ALL_MESSAGES,
} from './sentence'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'
import {
  TAgentID,
  TAvatar,
  TChannel,
  TCustomerID,
  TDatetime,
  TMessageID,
  TMessageState,
  TName,
  TSenderID,
  TSessionID,
  TSessionState,
  TState,
  TText,
} from '../../models/redux'

//NOTE BASIC OPERATIONS

export const executeQuery = (
  query: string,
  array: (string | number)[],
  success = (_: SQLTransaction, resultSet: SQLResultSet) => resultSet,
  error = (_: SQLTransaction, error: any): any => {
    console.log('error', error)
  }
) => {
  if (db && db !== null) {
    db.transaction((tx) => {
      tx.executeSql(query, array, success, error)
    })
  } else {
    console.log('No se ha establecido la conexión')
  }
}

// NOTE GET OPERATIONS

export const getAllMessages = () => {
  return new Promise((resolve, reject: any) => {
    db.transaction((tx) => {
      tx.executeSql(
        GET_ALL_MESSAGES,
        [],
        (_, result) => resolve(result),
        (_, err: any) => reject(err)
      )
    })
  })
}
export const getCustomers = () => {
  return new Promise((resolve, reject: any) => {
    db.transaction((tx) => {
      tx.executeSql(
        GETCUSTOMERS,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}

export const getChatrooms = () => {
  return new Promise((resolve, reject: any) => {
    db.transaction((tx) => {
      tx.executeSql(
        GETCHATROOMS,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}

export const getSessions = () => {
  return new Promise((resolve, reject: any) => {
    db.transaction((tx) => {
      tx.executeSql(
        GETSESSIONS,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}

export const getMessages = (customerID: TCustomerID, limit = 30) => {
  return new Promise((resolve, reject: any) => {
    db.transaction((tx) => {
      tx.executeSql(
        GETMESSAGES,
        [customerID, limit],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
}

//NOTE ADD OPERATIONS

export const addAgent = (agentID: TAgentID, name: TName, avatar: TAvatar) => {
  return new Promise((resolve, reject: any) => {
    if (db && db !== null) {
      db.transaction((tx) => {
        tx.executeSql(
          ADDAGENT,
          [agentID, name, avatar, agentID],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        )
      })
    } else {
      console.log('No se ha establecido la conección')
    }
  })
}

export const addCustomer = (customerID: TCustomerID, name: TName) => {
  return new Promise((resolve, reject: any) => {
    if (db && db !== null) {
      db.transaction((tx) => {
        tx.executeSql(
          ADDCUSTOMER,
          [customerID, name, customerID],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        )
      })
    } else {
      console.log('No se ha establecido la conección')
    }
  })
}

export const addSession = (
  sessionID: TSessionID,
  customerID: TCustomerID,
  agentID: TAgentID,
  channel: TChannel,
  sessionState: TSessionState
) => {
  return new Promise((resolve, reject: any) => {
    if (db && db !== null) {
      db.transaction((tx) => {
        tx.executeSql(
          ADDSESSION,
          [sessionID, customerID, agentID, channel, sessionState, sessionID],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        )
      })
    } else {
      console.log('No se ha establecido la conección')
    }
  })
}

export const addMessage = (
  messageID: TMessageID,
  sessionID: TSessionID,
  customerID: TCustomerID,
  senderID: TSenderID,
  text: TText,
  datetime: TDatetime,
  messageState: TMessageState
) => {
  return new Promise((resolve, reject: any) => {
    if (db && db !== null) {
      db.transaction((tx) => {
        tx.executeSql(
          ADDMESSAGE,
          [
            messageID,
            sessionID,
            customerID,
            senderID,
            text,
            datetime,
            messageState,
            messageID,
          ],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        )
      })
    } else {
      console.log('No se ha establecido la conección')
    }
  })
}

// NOTE UPDATE OPERATIONS

export const updateChatroom = (customerID: TCustomerID, state: TState) => {
  return new Promise((_, reject: any) => {
    try {
      executeQuery(UPDATECHATROOM, [state, customerID])
    } catch (error) {
      reject(error)
    }
  })
}

export const updateSession = (
  sessionID: TSenderID,
  sessionState: TSessionState
) => {
  return new Promise((_, reject: any) => {
    try {
      executeQuery(UPDATESESSIONSTATE, [sessionState, sessionID])
    } catch (error) {
      reject(error)
    }
  })
}

// NOTE DELETE OPERATIONS

export const deleteSession = (sessionID: TSessionID) => {
  return new Promise((_, reject) => {
    try {
      executeQuery(DELETESESSION, [sessionID])
    } catch (error) {
      reject(error)
    }
  })
}
