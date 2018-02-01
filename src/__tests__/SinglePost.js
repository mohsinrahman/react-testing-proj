import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import SinglePost from '../components/SinglePost';

describe('SinglePost',() => {
  //const currentUser = 'Zac';
  //const postsWrapper= mount(<Posts currentPersona='Zac' />);
  const currentUser = 'Zac';
  const title = "My post title";
  const content = "My post Content"
  const fakemethod = jest.fn();
  const singlePostWrapper= mount(<SinglePost title={title} content={content} author= 'Zac' id='1'  date='2018-01-01' currentPersona = {currentUser} onClick= {fakemethod} />);
    it('Verify that SinglePost exists', () => {
      //render(<App />);
       //console.log(comments.find('h2').text());
        //expect(postsWrapper.state().posts).toEqual([]);
    expect(singlePostWrapper.find('SinglePost').exists()).toBe(true);
    });

it('Verify h2 tag inner text', () => {

  //console.log(singlePostWrapper.find('h2').at(0).text());
  expect(singlePostWrapper.find('h2').at(0).text()).toBe(title);



});
it('Verify p tag inner text', () => {

  //console.log(singlePostWrapper.find('h2').at(0).text());
  expect(singlePostWrapper.find('p').at(0).text()).toBe(content);



});
it('Verify Button Text', () => {

  //console.log(singlePostWrapper.find("button").text());
 expect(singlePostWrapper.find("button").text()).toBe("x");

});
it(' onclick the button ', () => {
  //console.log(singleWrapper.find('button').debug());
  singlePostWrapper.find('button').simulate('click');
  expect(fakemethod).toBeCalledWith("1");
});
});
