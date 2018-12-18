import { combineReducers } from 'redux'
import * as types from './types'
import { handleAction, handleActions } from 'redux-actions'

/*  State shape

  isFetching: bool,
  isAuthenticated: bool,
  redirectAfterLogin: string,
  error: bool,
  message: string
*/

// const fetchingReducer = handleActions(
//   {
//     [types.LOGIN]: () => true,
//     [types.LOGIN_COMPLETED]: () => false,
//     [types.LOGIN_FAILED]: () => false
//   },
//   { isFetching: false }
// )

const authReducer = handleActions(
  {
    [types.LOGIN]: (state, action) => ({
      ...state,
      isFetching: true,
      error: false,
      message: ''
    }),
    [types.LOGIN_COMPLETED]: (state, action) => ({
      ...state,
      isAuthenticated: true,
      isFetching: false
    }),
    [types.LOGIN_FAILED]: (state, action) => ({
      ...state,
      isFetching: false,
      error: true,
      message: action.payload.error
    }),
    [types.LOGOUT]: (state, action) => ({
      ...state,
      isAuthenticated: false
    })
  },
  {
    isFetching: false,
    isAuthenticated: false,
    redirectAfterLogin: '',
    error: false,
    message: ''
  }
)

// const redirectAfterLoginReducer = handleAction(
//   types.SET_REDIRECT_AFTER_LOGIN,
//   (state, action) => ({
//     [types.SET_REDIRECT_AFTER_LOGIN]: action.payload.redirectUrl
//   }),
//   ''
// )

export default authReducer
// combineReducers({
//   isFetching: fetchingReducer,
//   auth: authReducer
//   // redirectAfterLogin: redirectAfterLoginReducer
// })