import { login, logout, loginSuccessful, loginFailed } from './actions'
import { makeRequest } from '../../utils'

function loginUser(username, password) {
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

export {
    loginUser,
    logout
}