import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../redux/LoggedIn"

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})