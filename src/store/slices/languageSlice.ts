import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface languageState {
  language: string
}

const initialState: languageState = {
  language: '',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  },
})

export const { setLanguage } = languageSlice.actions

export const language = languageSlice.reducer