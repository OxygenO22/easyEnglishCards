import { createSlice } from "@reduxjs/toolkit";

const popUpModeSlice = createSlice({
  name: 'popUpMode',
  initialState: {
    isOpen: false
  },
  reducers: {
    changePopUpMode: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const {changePopUpMode} = popUpModeSlice.actions
export default popUpModeSlice.reducer