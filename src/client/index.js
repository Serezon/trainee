import React from 'react'

import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import { Provider as ReduxProvider } from "react-redux"
import App from '../app/views/layouts/App'
import configureStore from '../app/redux/store'

import * as serviceWorker from '../serviceWorker'

const reduxStore = configureStore()

const RootHtml = () => (
  <ReduxProvider store={reduxStore} >
    <Router>
      <App />
    </Router>
  </ReduxProvider>
)

render(<RootHtml />, document.getElementById('root'))

serviceWorker.unregister()
