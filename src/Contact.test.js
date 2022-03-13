import React from 'react'
import renderer from 'react-test-renderer'
import { Contact } from './Contact'

describe('Contact page', () => {
  test('it should render correctly', () => {
    const tree = renderer
      .create(<Contact />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
