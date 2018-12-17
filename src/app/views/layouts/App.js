import React from 'react'
import { Link, Route } from 'react-router-dom'
import routes from '../../routes'

const App = () => (
  <div>
    <header>
      <Link to='/'>Main page</Link>
    </header>

    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </div>
)

export default App
