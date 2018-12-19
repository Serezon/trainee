import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

export default function configureStore(initialState = {
  session: {
    isAuthenticated: false,
    redirectAfterLogin: '',
  },
  numi: {
    values: [],
    variables: {},
  },
}) {
  const rootReducer = combineReducers(reducers)
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  )
}
