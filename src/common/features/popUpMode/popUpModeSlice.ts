import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopUpType = 'Warn' | 'Success' | 'Delete' | 'Error' | 'Neutral'

export type PopUpStateType = {
  isOpen: boolean
  popUpType: PopUpType
}

const initialState: PopUpStateType = {
  isOpen: false,
  popUpType: 'Neutral',
}

const popUpModeSlice = createSlice({
  name: 'popUpMode',
  initialState,
  reducers: {
    changePopUpMode: (state, action: PayloadAction<PopUpType>) => {
      state.isOpen =  !state.isOpen
      state.popUpType = action.payload
    }
  }
})

export const {changePopUpMode} = popUpModeSlice.actions
export default popUpModeSlice.reducer