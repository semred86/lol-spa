import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface itemState {
  name: string
  tag: string
}

const initialState: itemState = {
  name: '',
  tag: 'All'
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload
    }
  },
})

export const { setName, setTag } = itemSlice.actions

export const item = itemSlice.reducer