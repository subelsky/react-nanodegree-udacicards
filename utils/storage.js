import { AsyncStorage } from 'react-native'

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

function setStartingDecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(startDecks))
  return startDecks
}


function formatDecks(results) {
  return results === null ? setStartingDecks() : JSON.parse(results)
}

export function fetchDecksFromStorage() {
  //AsyncStorage.clear()
  return AsyncStorage.getItem(DECK_STORAGE_KEY).
    then(formatDecks)
}

export function addDeckToStorage(newDeck) {
  return fetchDecksFromStorage().
    then((decks) => {
      decks[newDeck.title] = newDeck
      return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(decks))
    }
  )
}

export function addQuestionToDeckStorage(deckName,question) {
  return fetchDecksFromStorage().
    then((decks) => {
      decks[deckName].questions.push(question)
      return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(decks))
    }
  )
}
