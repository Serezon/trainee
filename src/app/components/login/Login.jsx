import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Label } from './styles'

const Login = ({
  username,
  password,
  handleChange,
  handleSubmit,
  session,
}) => {
  if (session.isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            required
          />
        </Label>

        <Label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>

        <input type="submit" value="Submit" />
      </Form>

    </div>
  )
}

export default Login
