import * as types from './types'
import { createAction } from 'redux-actions'
import { makeRequest } from '../../utils'

export const login = createAction(types.LOGIN)

export const loginSuccessful = createAction(types.LOGIN_COMPLETED)

export const loginFailed = createAction(types.LOGIN_FAILED)

export const logout = createAction(types.LOGOUT)

export function loginUser(username, password) {
  return async dispatch => {
    dispatch(login())
    try {
      const data = await makeRequest(username, password)
      dispatch(loginSuccessful(data))
    } catch (error) {
      dispatch(loginFailed(error))
    }
  }
}

// export const initializeSession = createAction(types.INITIALIZE)

// export const setRedirectAfterLogin = createAction(types.SET_REDIRECT_AFTER_LOGIN)