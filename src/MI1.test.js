import React from 'react'
import renderer from 'react-test-renderer'
import { MI1 } from './MI1'

describe('MI1 page', () => {
  test('it should render correctly', () => {
    const tree = renderer
      .create(<MI1 />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
