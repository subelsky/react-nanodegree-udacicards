import { addDeckToStorage, fetchDecksFromStorage, addQuestionToDeckStorage } from './../utils/storage'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addQuestion(deckName,question) {
  return {
    type: ADD_QUESTION,
    deckName,
    question
  }
}

export function createDeck(title) {
  return (dispatch) => {
    const deck = { title: title, questions: [] }

    addDeckToStorage(deck).then(() => dispatch(addDeck(deck)))
  }
}

export function createQuestion(deckName,question) {
  return (dispatch) => {
    addQuestionToDeckStorage(deckName,question).then(() => dispatch(addQuestion(deckName,question)))
  }
}

export function loadDecks() {
  return (dispatch) => {
    fetchDecksFromStorage().then((decks) => dispatch(receiveDecks(decks)))
  }
}
