import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './PageSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer
  },
})