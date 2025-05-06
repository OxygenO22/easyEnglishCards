import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MyInputState = {
  value: string
}

const initialState: MyInputState = {
  value: ''
}

export const myInputSlice = createSlice({
  name: 'myInput',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setValue } = myInputSlice.actions
export default myInputSlice.reducer

