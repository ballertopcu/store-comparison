import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  key: 2,
  text: 'Interaction Analysis',
  icon : 'chart'
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.key = action.payload.key
      state.text = action.payload.text
      state.icon = action.payload.icon
    }
  },
})


export const { setSelectedPage } = pageSlice.actions

export default pageSlice.reducer