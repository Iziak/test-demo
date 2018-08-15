import React from 'react'
import {render, fireEvent, cleanup, getByText} from 'react-testing-library'

import Section3 from './Section3'
import { closest, renderInApp } from '../../_helpers/test-helper';

afterEach(cleanup)

test('do not allow more than one click', () => {

  const fn = jest.fn()

  // Arrange
  const {container, getByText} = renderInApp(<Section3 onClick={fn}/>)

  // Act
  fireEvent.click(getByText('This button is fantastic, but only in moderation'))
  fireEvent.click(getByText('This button is fantastic, but only in moderation'))

  // Assert
  expect(container.querySelector('#counter').innerHTML).toBe('1')
  expect(fn).toHaveBeenCalledTimes(1)
})