import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import {render, fireEvent, cleanup, getByLabelText} from 'react-testing-library'

import Section1 from './Section1'
import { renderInApp } from '../../_helpers/test-helper';

afterEach(cleanup)

test('button passes text from input to output', () => {

  // Set
  const inputText = 'Fancy Text'

  // Arrange
  const {getByText, getByLabelText, container} = renderInApp(<Section1 />)

  // User Inspired Actions
  fireEvent.change(getByLabelText('Super Label'), {target: {value: inputText}})
  fireEvent.click(getByText('Push Here'))

  // Assert
  expect(container.querySelector('#output').innerHTML).toBe(inputText)
})