import { handleActions } from 'redux-actions'
import * as types from './types'

const numiReducer = handleActions(
  {
    [types.SEND]: (state, action) => ({
      ...state,
      values: [...state.values, action.payload],
    }),
    [types.ADD_VARIABLE]: (state, action) => ({
      ...state,
      variables: {
        ...state.variables,
        [action.payload.name]: action.payload.value,
      },
    }),
    [types.CHANGE_VARIABLE]: (state, action) => ({
      ...state,
      variables: {
        ...state.variables,
        [action.payload.name]: action.payload.value,
      },
    }),
  },
  {
    values: [],
    variables: {},
  },
)

export default numiReducer
