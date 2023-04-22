import { getSessions } from '../../services/sql/operations'
import { SessionType, TActionSession } from '../../models/constant.d'
import { Dispatch } from 'react'
import { SQLResultSet } from 'expo-sqlite'
import { ISession } from '../../models/redux'

export const loadSessions = () => {
  return async (dispatch: Dispatch<TActionSession>) => {
    const dbResult = (await getSessions()) as SQLResultSet
    dispatch({ type: SessionType.GET_SESSIONS, payload: dbResult.rows._array })
  }
}

export const saveSessions = (newSession: ISession[]) => {
  return async (dispatch: Dispatch<TActionSession>) => {
    dispatch({ type: SessionType.SAVE_SESSIONS, payload: newSession })
  }
}
