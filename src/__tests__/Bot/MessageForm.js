import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import MessageForm from '../../components/Bot/MessageForm';


describe('MessageForm',() => {
  const fakeFunction = jest.fn();
  const MessageFormWrapper= mount(<MessageForm onSubmit= {fakeFunction} /> );
it('Render the MessageForm Component', () => {

  expect(MessageFormWrapper.find('MessageForm').exists()).toBe(true);

});

it('Render the OnChange Component', () => {

console.log(MessageFormWrapper.find('input').at(0).debug());
MessageFormWrapper.find('input').at(0).simulate('change')
  //expect(botWrapper.state().typing).toBe(false);
expect(MessageFormWrapper.state().userMessage).toBe('');
});

it(' check the ´submit´ form  MessageForm component ', () => {

      //console.log(CreateNewPostWrapper.find('form').debug());
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      expect(MessageFormWrapper.find('form').length).toBe(1);
      MessageFormWrapper.find('form').simulate('submit', fakeEvent);
      expect(MessageFormWrapper.state().userMessage).toBe("");
      //expect(CreateNewPostWrapper.state().content).toEqual('');
  });

});
