import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cardsApi } from "../../api/cards-api";
import { CardsType } from "../../types/commonTypes";
import { v1 } from "uuid";

type CardsState = {
  cards: CardsType[],
  loading: boolean,
  error: string | null
}

export const getCards = createAsyncThunk<CardsType[], undefined, {rejectValue: string}>(
  'cards/getCards',
  async function(_, {rejectWithValue}) {
    const response = await cardsApi.getCards();

    if (response.statusText !== 'OK') {
      return rejectWithValue('Server Error!')
    }

    return response.data;
  }
)

export const addNewCard = createAsyncThunk<CardsType, {englishWord: string, russianhWord: string}, {rejectValue: string}>(
  'cards/addNewCard',
  async function(data, {rejectWithValue}) {

    const card: CardsType = {
      id: v1(),
      englishWord: data.englishWord,
      russianhWord: data.russianhWord,
      rating: 0
    }

    const response = await cardsApi.createCard(card);

    if (response.statusText !== 'OK') {
      return rejectWithValue('Cant add card. Server Error!')
    }

    return response.data.data.item;
  }
)

export const deleteCard = createAsyncThunk<string, string, {rejectValue: string}>(
  'cards/deleteCard',
  async function(id, {rejectWithValue}) {
    const response = await cardsApi.deleteCard(id);

    if (response.statusText !== 'OK') {
      return rejectWithValue('Cant delete task. Server Error!')
    }

    return id;
  }
)

//work here

export const updateCard = createAsyncThunk<string, string, {rejectValue: string}>(
  'cards/deleteCard',
  async function(id, {rejectWithValue}) {
    const response = await cardsApi.deleteCard(id);

    if (response.statusText !== 'OK') {
      return rejectWithValue('Cant delete task. Server Error!')
    }

    return id;
  }
)

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: null
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload
        state.loading = false;
      })
      .addCase(addNewCard.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewCard.fulfilled, (state, action) => {
        state.cards.push(action.payload)
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter(card => card.id !== action.payload)
      })
  },
})

//export const { } = cardsSlice.actions
export default cardsSlice.reducer