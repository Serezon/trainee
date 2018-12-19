import { createAction } from 'redux-actions'
import * as types from './types'

export const send = createAction(types.SEND)
export const addVariable = createAction(types.ADD_VARIABLE)
export const changeVariable = createAction(types.CHANGE_VARIABLE)
