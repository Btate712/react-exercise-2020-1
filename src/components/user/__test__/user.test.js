import React from 'react';
import ReactDOM from 'react-dom';
import User from '../user';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Renders as "loading" if undefined', () => {
  const component = renderer.create(<User user={undefined} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders user if defined', () => {
  const component = renderer.create(<User user={{
    name: "Bob", 
    id: 1, 
    posts: [
      {
        title: "Post 1",
        date: "2/2/2020",
        content: "blah, blah, blah"
      },{
        title: "Post 2",
        date: "2/3/2020",
        content: "more words..."
      },{
        title: "Post 3",
        date: "2/4/2020",
        content: "getting tired of making this stuff up..."
      }
    ]
  }} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


