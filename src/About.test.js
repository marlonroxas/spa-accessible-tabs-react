import React from 'react'
import renderer from 'react-test-renderer'
import { About } from './About'

describe('About page', () => {
  test('it should render correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
