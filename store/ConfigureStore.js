import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// from https://github.com/udacity/reactnd-udacimeals-complete/blob/master/src/index.js
const logger = store => next => action => {
  console.group(action.type)
  console.debug('DISPATCHING', action)
  let result = next(action)
  console.debug('NEXT STATE',store.getState())
  console.groupEnd(action.type)
  return result
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk,logger))
  )
}
