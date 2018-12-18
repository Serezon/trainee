import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

export default function configureStore(initialState = {
  session: {
    isAuthenticated: false,
    redirectAfterLogin: ''
  }
}) {
  const rootReducer = combineReducers(reducers)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}