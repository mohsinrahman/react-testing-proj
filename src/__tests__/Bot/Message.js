import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import Message from '../../components/Bot/Message';


describe('render if bot is false ',() => {
  const message = 'This is not a bot';
  const bot = false;
  const MessageWrapper= mount(<Message bot={bot} message={message} /> );
it('select class when bot is false', () => {
  //console.log(MessageWrapper.find('p').prop('className'));
  expect(MessageWrapper.find('p').prop('className')).toBe('bg-indigo-dark text-white font-bold py-2 px-4 mb-2 rounded-full h-8');
  //.exists()).toBe(true);
});
});

describe('render if bot is true',() => {
  const message = 'This is bot';
  const bot = true;
  const MessageWrapper= mount(<Message bot={bot} message={message} /> );
it('select class when bot is true', () => {
  //console.log(MessageWrapper.find('p').prop('className'));
  expect(MessageWrapper.find('p').prop('className')).toBe('bg-white text-grey-darker font-bold py-2 px-4 mb-2 rounded-full h-8');
  //.exists()).toBe(true);
});
});
