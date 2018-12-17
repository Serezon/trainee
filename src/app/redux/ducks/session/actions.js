import * as types from './types'
import { createAction } from 'redux-actions'

export const login = createAction(types.LOGIN)

export const logout = createAction(types.LOGOUT)

export const initializeSession = createAction(types.INITIALIZE)

export const setRedirectAfterLogin = createAction(types.SET_REDIRECT_AFTER_LOGIN)