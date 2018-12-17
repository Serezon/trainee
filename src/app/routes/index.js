import { Login } from '../views/pages'
import { withAuthentication } from '../views/enhancers'
import React from 'react'

const routes = [
  {
    path: '/',
    component: withAuthentication(() => <h1>Home</h1>),
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },

]

export default routes