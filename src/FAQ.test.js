import React from 'react'
import renderer from 'react-test-renderer'
import { FAQ } from './FAQ'

describe('FAQ page', () => {
  test('it should render correctly', () => {
    const tree = renderer
      .create(<FAQ />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
