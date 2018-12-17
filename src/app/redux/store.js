import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './ducks'

export default function configureStore(initialState = {
  session: {
    isAuthenticated: false,
    redirectAfterLogin: ''
  }
}) {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(

    // )
  )
}