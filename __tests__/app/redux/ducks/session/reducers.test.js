import reducer from '../../../../../src/app/redux/ducks/session/reducers'
import * as actions from '../../../../../src/app/redux/ducks/session/actions'

describe('Redux session reducer', () => {
  test('Fetching on login action', () => {
    expect(reducer(null, actions.login())).toMatchObject({
      isFetching: true,
    })
  })
})
