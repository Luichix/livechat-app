import * as SQLite from 'expo-sqlite'
import { Platform } from 'react-native'
import { CUSTOMER, AGENT, SESSION, MESSAGE } from './sentence'
import { DROPMESSAGE, DROPSESSION, DROPAGENT, DROPCUSTOMER } from './sentence'

const DATABASE_NAME = 'dbChatAssistant'

export const executeQuery = (query: string, success = () => {}, error: any = () => {}) => {
  if (db && db !== null) {
    db.transaction((tx) => {
      tx.executeSql(query, [], success, error)
    })
  } else {
    console.log('No se ha establecido la conexión')
  }
}

export const initDatabase = () => {
  return new Promise((resolve:any, reject) => {
    try {
      executeQuery(CUSTOMER)
      executeQuery(AGENT)
      executeQuery(SESSION)
      executeQuery(MESSAGE)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const close = () => {
  return new Promise((resolve:any, reject) => {
    try {
      executeQuery(DROPMESSAGE)
      executeQuery(DROPSESSION)
      executeQuery(DROPAGENT)
      executeQuery(DROPCUSTOMER)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export const Database = () => {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        }
      },
    }
  }
  const db = SQLite.openDatabase(DATABASE_NAME)
  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => {})
  return db
}

const db = Database()

export default db
