import { AsyncStorage } from 'react-native'
import { fetchDecksFromStorage } from './../utils/storage'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function loadDecks() {
  return (dispatch) => {
    fetchDecksFromStorage().then((decks) => dispatch(receiveDecks(decks)))
  }
}
