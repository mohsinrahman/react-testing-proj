import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import SingleComment from '../components/SingleComment';

describe('SingleComment',() => {
  const currentUser = 'Zac';
  const fakemethod = jest.fn();
  const singleWrapper= mount(<SingleComment id='1' author= 'Zac' onClick= {fakemethod} currentPersona = {currentUser} comment = 'My comment' date='2018-01-01'  />);
it('Verify that SingleComment exists', () => {
  //render(<App />);
   //console.log(comments.find('h2').text());
    //expect(postsWrapper.state().posts).toEqual([]);
expect(singleWrapper.find('SingleComment').exists()).toBe(true);

});

it('Verify 1nd p tag inner text', () => {
//console.log(singleWrapper.find('p').at(0).text());
expect(singleWrapper.find('p').at(0).text()).toBe("My comment");
});

it('Verify 2nd p tag inner text', () => {
//console.log(singleWrapper.find('p').at(1).text());
expect(singleWrapper.find('p').at(1).text()).toBe("Posted by: Zac @ 2018-01-01");
});
it('Verify onClick ', () => {
//console.log(singleWrapper.props().onClick._isMockFunction);
    expect(singleWrapper.props().onClick._isMockFunction).toBe(true);
});
it(' onclick the button ', () => {
  //console.log(singleWrapper.find('button').debug());
  singleWrapper.find('button').simulate('click');
  expect(fakemethod).toBeCalledWith("1");
});

});
