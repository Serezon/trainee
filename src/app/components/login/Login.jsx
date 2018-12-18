import React from 'react'
import { Redirect } from 'react-router-dom'
import './styles.sass'

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
      <form onSubmit={handleSubmit} className="login__form">
        <label htmlFor="username" className="login__label">
          Username
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="password" className="login__label">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default Login
