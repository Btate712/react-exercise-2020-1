import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';


afterEach(cleanup);

test('Renders app', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
