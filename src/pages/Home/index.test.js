import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import HomePage from './index';

it('Renders HomePage', () => {
  const component = shallow(<HomePage />);

  expect(component.text()).toEqual('Home <Link />');
  expect(component.find(Link).props().to).toBe('/about');
});
