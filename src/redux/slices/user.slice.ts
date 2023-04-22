import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInitialState } from '../../models/constant.d'

export const userSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {
    createUser: (_, action) => action.payload,
    modifyUser: (state, action: PayloadAction<object>) => ({
      ...state,
      ...action.payload,
    }),
    resetUser: () => UserInitialState,
  },
})

export const { createUser, modifyUser, resetUser } = userSlice.actions

export default userSlice.reducer
