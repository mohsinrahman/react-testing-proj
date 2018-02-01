import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import Button from '../components/Button';

describe('Button',() => {

it('Render the Button Component', () => {
  //render(<App />);
  const children = <span>Talk to a real human</span>;
  const fakemethod = jest.fn();
  const buttonWrapper= mount(<Button onClick = {fakemethod} children = {children} /> );
  //console.log(buttonWrapper.find('span').text());
  expect(buttonWrapper.find('span').text()).toBe('Talk to a real human');

});

});
