import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface championState {
  name: string
  tag: string
}

const initialState: championState = {
  name: '',
  tag: 'All'
}

const championSlice = createSlice({
  name: 'champion',
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

export const { setName, setTag } = championSlice.actions

export const champion = championSlice.reducer