import React from 'react'
import { Route } from 'react-router-dom'
import routes from '../../routes'
import Header from './Header'

const App = () => (
  <div>
    <Header />

    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </div>
)

export default App
