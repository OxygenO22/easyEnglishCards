import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopUpType = 'Warn' | 'Success' | 'Delete' | 'Error' | 'Neutral'
export type PopUpDecision = 'Yes' | 'No' | 'Ok'

export type PopUpStateType = {
  isOpen: boolean
  popUpType: PopUpType
  popUpDecision: PopUpDecision
}

const initialState: PopUpStateType = {
  isOpen: false,
  popUpType: 'Neutral',
  popUpDecision: 'Ok'
}

const popUpModeSlice = createSlice({
  name: 'popUpMode',
  initialState,
  reducers: {
    changePopUpMode: (state, action: PayloadAction<PopUpType>) => {
      state.isOpen =  !state.isOpen
      state.popUpType = action.payload
    },
    makeDecision: (state, action: PayloadAction<PopUpDecision>) => {
      state.popUpDecision = action.payload
    },
  }
})

export const {changePopUpMode, makeDecision } = popUpModeSlice.actions
export default popUpModeSlice.reducer