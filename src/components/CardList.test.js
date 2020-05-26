import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import toJson from 'enzyme-to-json';

it('expect to render Card List component SNAPSHOT', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'kobe',
      username: 'blackMamba',
      email: 'kobe@gmail.com'
    }
  ]
  expect(toJson(shallow(<CardList robots={mockRobots} />))).toMatchSnapshot();
})