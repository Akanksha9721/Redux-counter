import { configureStore } from '@reduxjs/toolkit'
import  couterReducer from "./counter/counterslice"

export const store = configureStore({
  reducer: { 
     counter: couterReducer,
  },
})