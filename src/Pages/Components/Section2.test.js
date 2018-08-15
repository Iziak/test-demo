import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import {render, fireEvent, cleanup, getByText} from 'react-testing-library'

import Section2 from './Section2'
import {renderInApp } from '../../_helpers/test-helper';

afterEach(cleanup)

test('no value', () => {

  const inputText = "0";
  const fn = jest.fn()

  // Arrange
  const {getByText, getByLabelText} = render(<Section2 onClick={fn}/>)

  // Act
  fireEvent.change(getByLabelText('Cost of Peanut ($)'), {target: {value: inputText}})
  fireEvent.click(getByText('Process Data'))

  const firstValue = getByText(/Value: */).innerHTML;

  // Assert
  expect(firstValue).toBe('Value: $0')
  expect(fn).toHaveBeenCalledTimes(1)
})

test('some value', () => {

  const inputText = "4";
  const fn = jest.fn()

  // Arrange
  const {getByText, getByLabelText} = renderInApp(<Section2 onClick={fn}/>)

  // Act
  fireEvent.change(getByLabelText('Cost of Peanut ($)'), {target: {value: inputText}})
  fireEvent.click(getByText('Process Data'))

  const firstValue = getByText(/Value: */).innerHTML;
  const firstPeanutCount = getByText(/Peanuts: */).innerHTML.split(' ')[1];
  console.log('Peanut Count: ',firstPeanutCount);
  console.log('Value', firstValue);
  // Assert
  expect(firstValue).toBe(`Value: $${inputText*firstPeanutCount}`)
  expect(fn).toHaveBeenCalledTimes(1)
})