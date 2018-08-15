import React from 'react'
import {render, fireEvent, cleanup, getByLabelText} from 'react-testing-library'

import SectionA from './SectionA'

afterEach(cleanup)

test('button passes text from input to output', () => {

  // Set
  const inputText = 'Fancy Text'

  // Arrange
  const {getByText, getByLabelText, container} = render(<SectionA />)

  // Act
  fireEvent.change(getByLabelText('Super Label'), {target: {value: inputText}})
  fireEvent.click(getByText('Push Here'))

  // Assert
  expect(container.querySelector('#output').innerHTML).toBe(inputText)
})