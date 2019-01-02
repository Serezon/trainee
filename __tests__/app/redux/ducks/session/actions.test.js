import * as actions from '../../../../../src/app/redux/ducks/session/actions'
import * as types from '../../../../../src/app/redux/ducks/session/types'

describe('Redux session actions', () => {
  test('Login action', () => {
    expect(actions.login('abc')).toEqual({
      type: types.LOGIN,
      payload: 'abc',
    })
  })
})
