import React from 'react';
import {HomePage} from './HomePage';

describe('Home Component', () => {
  it('please work', () => {
    const wrapper = shallow(<HomePage />);
    const input = wrapper.find('p').text();
    expect(input).toEqual("0");
  })
})