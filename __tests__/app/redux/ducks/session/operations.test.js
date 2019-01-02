import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { loginUser } from '../../../../../src/app/redux/ducks/session/operations'
import * as types from '../../../../../src/app/redux/ducks/session/types'

describe('Login user redux-thunk', () => {
  const store = configureStore([thunk])(null)

  test('Login user with correct login&password', async () => {
    await loginUser('User', '123')(store.dispatch)
    const actions = store.getActions()
    expect(actions[0]).toMatchObject({
      type: types.LOGIN,
    })
    expect(actions[1]).toMatchObject({
      type: types.LOGIN_COMPLETED,
    })
  })
})
