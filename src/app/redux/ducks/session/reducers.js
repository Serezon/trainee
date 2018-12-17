import { combineReducers } from 'redux'
import * as types from './types'
import { handleAction, handleActions } from 'redux-actions'

/*  State shape

  isAuthenticated: bool,
  redirectAfterLogin: string

*/

const authReducer = handleActions(
  {
    [types.LOGIN]: () => true,
    [types.LOGOUT]: () => false,
  },
  { isAuthenticated: false }
)

const redirectAfterLoginReducer = handleAction(
  types.SET_REDIRECT_AFTER_LOGIN,
  (state, action) => ({
    [types.SET_REDIRECT_AFTER_LOGIN]: action.payload.redirectUrl
  }),
  ''
)

export default combineReducers({
  isAuthenticated: authReducer,
  redirectAfterLogin: redirectAfterLoginReducer
})