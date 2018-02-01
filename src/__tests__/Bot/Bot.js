import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import Bot from '../../components/Bot/Bot';


describe('Bot',() => {
  const botWrapper= mount(<Bot message= "This Message"/> );
it('Render the Bot Component', () => {

  expect(botWrapper.find('Bot').exists()).toBe(true);

});

it('varify the ´typing´ state of the Component', () => {

  expect(botWrapper.state().typing).toBe(false);

});

it('varify the ´messages´state of the Component', () => {

  expect(botWrapper.state().messages).toEqual([]);

});
it('varify the ´messages´state before sendReply runs', () => {

  //console.log(botWrapper.instance().sendReply);
  //expect(botWrapper.instance()).toEqual([]);

         expect(botWrapper.state().typing).toBe(false);

});

it('varify the ´messages´state of the Component', () => {

  //console.log(botWrapper.instance().sendReply);
  //expect(botWrapper.instance()).toEqual([]);
         botWrapper.instance().sendReply();
         expect(botWrapper.state().typing).toBe(true);

});


it(' check the submit form  botWrapper component ', () => {
      const message = "This Message"

      //console.log(CreateNewPostWrapper.find('form').debug());
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      expect(botWrapper.find('MessageForm').length).toBe(1);
      console.log(botWrapper.find('MessageForm').instance().props.onSubmit);
       botWrapper.find('MessageForm').instance().props.onSubmit("This Message");
      //simulate('submit', fakeEvent);
      //expect(CreateNewPostWrapper.state().content).toBe("");
      console.log(botWrapper.state());
      expect(botWrapper.state().typing).toBe(true);
  });



});
