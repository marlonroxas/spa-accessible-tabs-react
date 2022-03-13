import React from 'react'
import renderer from 'react-test-renderer'
import { MI2 } from './MI2'

describe('MI2 page', () => {
  test('it should render correctly', () => {
    const tree = renderer
      .create(<MI2 />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
