import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  email: ""
}

export const loginSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    logIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedIn = true,
      state.email = action.payload.email
    },
    logOut: (state) => {
      state.loggedIn = false
      state.email = ""

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions

export default loginSlice.reducer