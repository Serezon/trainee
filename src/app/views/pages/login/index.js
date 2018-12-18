import {
  compose,
  withStateHandlers,
  withHandlers
} from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../../redux/ducks/session/operations'
import Login from './Login'

const mapStateToProps = state => {
  const { session } = { ...state }
  console.log(session)
  return { session }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(loginUser(username, password))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
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
    handleSubmit: ({ username, password, login, session, history }) => e => {
      e.preventDefault()
      login(username, password)
    }
  })
)

export default enhance(Login)