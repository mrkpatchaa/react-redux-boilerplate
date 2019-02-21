import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import AboutPage from './index';

it('Renders AboutPage', () => {
  const component = shallow(<AboutPage />);

  expect(component.text()).toEqual('About <Link />');
  expect(component.find(Link).props().to).toBe('/');
});
