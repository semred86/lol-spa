import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface versionState {
  version: string
}

const initialState: versionState = {
  version: '',
}

export const versionSlice = createSlice({
  name: 'version',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload
    }
  },
})

export const { setVersion } = versionSlice.actions

export const version = versionSlice.reducer