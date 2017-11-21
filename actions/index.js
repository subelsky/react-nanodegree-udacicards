import { AsyncStorage } from 'react-native'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
const DECK_STORAGE_KEY = 'Udacicards:Decks'

const startDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function loadDecks() {
  return (dispatch) => {
    dispatch(receiveDecks(startDecks))
  }
}
