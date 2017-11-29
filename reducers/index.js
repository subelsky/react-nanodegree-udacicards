import { ADD_DECK, RECEIVE_DECKS, ADD_QUESTION } from '../actions'

function decks(state = {},action) {
  let deck = null

  switch (action.type) {
    case ADD_DECK:
      deck = action.deck

      return {
        ...state,
        [deck.title]: deck
      }
    case ADD_QUESTION:
      const { deckName, question } = action

      deck = state[deckName]
      const questions = deck.questions.concat(question)

      return {
        ...state,
        [deckName]: { ...deck, questions }
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}

export default decks
