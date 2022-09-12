/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react'
import renderer from 'react-test-renderer'

import { MonoText } from '../StyledText'

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON()

  expect(tree).toMatchSnapshot()
})
