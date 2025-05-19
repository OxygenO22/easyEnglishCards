import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './common/features/counter/counterSlice'
import myIputReducer from  './common/components/ui/myInput/myInputSlice'
import cardsReducer from './common/features/cards/cardsSlice'
import appModeReducer from './common/features/appMode/appModeSlice'
import popUpModeReducer from './common/features/popUpMode/popUpModeSlice'
import popUpAIReducer from './common/components/ui/popUpAI/popUpAISlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myInput: myIputReducer,
    cards: cardsReducer,
    appMode: appModeReducer,
    popUpMode: popUpModeReducer,
    popUpAI: popUpAIReducer
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch