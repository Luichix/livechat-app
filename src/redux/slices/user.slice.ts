import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const UserInitialState = {
  _id: '',
  username: '',
  email: '',
  organizationID: '',
  avatar: '',
}

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
