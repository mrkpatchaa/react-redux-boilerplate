import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import NotFoundPage from './index';

it('Renders NotFoundPage', () => {
  const component = shallow(<NotFoundPage />);

  expect(component.text()).toEqual('404 - Not found <Link />');
  expect(component.find(Link).props().to).toBe('/');
  expect(component.find(Link).props().children).toBe('Got back to homepage');
});
