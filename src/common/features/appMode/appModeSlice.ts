import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppMode } from "../../types/commonTypes";

type AppModeState = {
  appMode: AppMode
}

const initialState: AppModeState = {
  appMode: 'Welcome'
}

const appModeSlice = createSlice({
  name: 'appMode',
  initialState,
  reducers: {
    changeAppMode: (state, action: PayloadAction<AppMode>) => {
      state.appMode = action.payload
    }
  }
})

export const { changeAppMode } = appModeSlice.actions
export default appModeSlice.reducer