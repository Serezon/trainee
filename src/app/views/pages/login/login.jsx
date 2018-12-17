import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`

const Input = styled.input`
`

const login = ({ email, password, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor='username'>
          Username
          <Input
            id='username'
            name='username'
            type='text'
            value={email}
            onChange={handleChange}
            required
          />
        </Label>

        <Label htmlFor='password'>
          Password
          <Input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handleChange}
            required
          />
        </Label>

        <input type='submit' value='Submit'/>
      </Form>

    </div>
  )
}

export default login
