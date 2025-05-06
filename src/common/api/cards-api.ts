import axios, { AxiosInstance } from "axios";
import { CardsType } from "../types/commonTypes";

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const cardsApi = {
  getCards() {
    return instance.get<CardsType[]>('/cards')
  },
  createCard(card: CardsType) {
      return instance.post<ResponseTypeAPI<{item: CardsType}>>(`/cards`, card)
  },
  deleteCard(cardId: string) {
      return instance.delete<ResponseTypeAPI>(`/cards/${cardId}`)
  },
  updateCard(cardId: string, englishWord: string, russianhWord: string) {
      return instance.put<ResponseTypeAPI>(`/cards/${cardId}`, {englishWord, russianhWord})
  },
}

type ResponseTypeAPI<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[],
    resultCode: number,
}