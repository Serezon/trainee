import {
  compose,
  withStateHandlers
} from 'recompose'
import login from './login'

const enhance = compose(
  withStateHandlers(
    {
      username: '',
      password: ''
    },
    {
      handleChange: () => e => ({
        [e.target.name]: e.target.value
      }),
      handleSubmit: ({ username, password }) => e => {
        e.preventDefault()
        console.log(username, password)
      }
    },
  )
)

export default enhance(login)