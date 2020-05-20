import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
import toJson from 'enzyme-to-json';

// Most of the time, use shallow to test the simple unit component
it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})

// Use Snapshots for renders
it('expect to render Card component SNAPSHOT', () => {
  expect(toJson(shallow(<Card />))).toMatchSnapshot();
})

// mount - full dom rendering, require full dom api to work
// Maybe it does a .querySelectAll or involved in lifecycle method
// Needs to have a browser environment
// MOUNT - use a headless browser

// Pure function components 