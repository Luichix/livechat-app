import { useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../contexts'
import { useLazyQuery } from '@apollo/client'
import { LOGIN_AGENT, LOGOUT_AGENT } from '../services/graphql/queries'
import { createUser, resetUser } from '../redux/slices/user.slice'
import { useDispatch } from 'react-redux'
import { IAuthContext } from '../models/context'

export default function useUser() {
  const { auth, loginAuth, logoutAuth } = useContext(
    AuthContext
  ) as IAuthContext
  const dispatch = useDispatch()
  const [loginAgent, isLogin] = useLazyQuery(LOGIN_AGENT)
  const [logoutAgent, isLogout] = useLazyQuery(LOGOUT_AGENT)

  useEffect(() => {
    if (isLogin.error) console.warn(isLogin.error)
    if (isLogin.loading) console.log(isLogin.loading)
    if (isLogin.data) {
      dispatch(createUser(isLogin.data.loginAgent))
      loginAuth(isLogin.data.loginAgent)
    }
  }, [isLogin])

  useEffect(() => {
    if (isLogout.error) console.warn(isLogout.error)
    if (isLogout.loading) console.log(isLogout.loading)
    if (isLogout.data) {
      dispatch(resetUser())
      logoutAuth()
    }
  }, [isLogout])

  const login = useCallback(async ({ email, password }) => {
    if (email === '' || password === '') {
      console.warn('Required Params')
      return
    }
    loginAgent({ variables: { email, password } })
  }, [])

  const logout = useCallback(async ({ email = 'luichix.rex@gmail.com' }) => {
    if (email === '') {
      console.warn('Required Params')
      return
    }
    logoutAgent({ variables: { email } })
  }, [])

  return {
    isLogged: Boolean(auth),
    login,
    logout,
  }
}
