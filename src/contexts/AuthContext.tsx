import { useState, createContext } from 'react'
import { IAuthContext, IProps, TAuth } from '../models/context'

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState({})

  const loginAuth = (auth: TAuth) => {
    if (auth) setAuth(auth)
  }

  const logoutAuth = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider value={{ auth, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
