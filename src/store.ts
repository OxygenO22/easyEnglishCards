import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './common/features/counter/counterSlice'
import myIputReducer from  './common/components/ui/myInput/myInputSlice'
import cardsReducer from './common/features/cards/cardsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myInput: myIputReducer,
    cards: cardsReducer
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch