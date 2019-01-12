import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import ApiTest from '../src/Components/ApiTest/ApiTest';


test('renders correctly', () => {
  const tree = renderer.create(<ApiTest />).toJSON();
  expect(tree).toMatchSnapshot();
});
