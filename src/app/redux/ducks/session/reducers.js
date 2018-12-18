import { handleActions } from 'redux-actions'
import * as types from './types'

/*  State shape

  isFetching: bool,
  isAuthenticated: bool,
  redirectAfterLogin: string,
  error: bool,
  message: string

*/

const authReducer = handleActions(
  {
    [types.LOGIN]: state => ({
      ...state,
      isFetching: true,
      error: false,
      message: '',
    }),
    [types.LOGIN_COMPLETED]: state => ({
      ...state,
      isAuthenticated: true,
      isFetching: false,
    }),
    [types.LOGIN_FAILED]: (state, action) => ({
      ...state,
      isFetching: false,
      error: true,
      message: action.payload.error,
    }),
    [types.LOGOUT]: state => ({
      ...state,
      isAuthenticated: false,
    }),
  },
  {
    isFetching: false,
    isAuthenticated: false,
    redirectAfterLogin: '',
    error: false,
    message: '',
  },
)

export default authReducer
