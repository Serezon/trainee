/* eslint-disable */
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../../../../src/app/components/button/Button'

describe('>>> Button --- Snapshot', () => {
  it('+++capturing snapshot of Button', () => {
    const renderedValue = renderer.create(<Button logout={[Function]}/>).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })
})

describe('Testing Storybook', () =>{
  it('simple test', () => {
    expect(2+2).toBe(4)
  })
})
