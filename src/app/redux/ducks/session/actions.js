import { createAction } from 'redux-actions'
import * as types from './types'

export const login = createAction(types.LOGIN)

export const loginSuccessful = createAction(types.LOGIN_COMPLETED)

export const loginFailed = createAction(types.LOGIN_FAILED)

export const logout = createAction(types.LOGOUT)

// export const initializeSession = createAction(types.INITIALIZE)

// export const setRedirectAfterLogin = createAction(types.SET_REDIRECT_AFTER_LOGIN)
