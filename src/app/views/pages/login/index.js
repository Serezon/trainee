import {
  compose,
  withStateHandlers,
  withHandlers
} from 'recompose'
import { connect } from 'react-redux'
import { login, logout } from '../../../redux/ducks/session/actions'
import Login from './Login'

const mapStateToProps = state => {
  const { session } = { ...state }
  console.log(session)
  return { session }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      username: '',
      password: ''
    },
    {
      handleChange: () => e => ({
        [e.target.name]: e.target.value
      })
    },
  ),
  withHandlers({
    handleSubmit: ({ username, password, login }) => e => {
      e.preventDefault()
      login()
    }
  })
)

export default enhance(Login)