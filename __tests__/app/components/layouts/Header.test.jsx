import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { mount } from 'enzyme'
// import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store' // Smart components

import Header from '../../../../src/app/components/layouts/Header'
import Button from '../../../../src/app/components/button/Button'

// const initialState = {
//   session: {
//     isAuthenticated: true,
//   },
// }

// const store = configureStore(initialState)

describe('<Header />', () => {
  let wrapper
  const initialState = {
    session: {
      isAuthenticated: true,
    },
  }
  const store = configureStore()(initialState)

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    )
  })

  // test('Header match snapshot', () => {
  //   // console.log(wrapper.debug())
  //   expect(wrapper.find('header').length).toBe(1)
  //   const component = wrapper.find(Header)

  //   expect(toJson(component)).toMatchSnapshot()
  // })

  test('Header contains Link', () => {
    expect(wrapper.find(Link).length).toBe(1)
  })

  test('Header contains Button if isAuthenticated === true', () => {
    expect(wrapper.find(Button).length).toBe(1)
  })
})
