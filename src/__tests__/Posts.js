import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';

describe('Posts',() => {
  const fakeFunction = jest.fn();
  const fakePosts = [{id: '1', author:'Zac', title: 'My Title cant be fake', content: 'My content cant be fake',  date:'2018/01/01'}];
  const currentUser = 'Zac';
  const postsWrapper= mount(<Posts currentPersona='Zac' />);
it('Verify the state Posts Component', () => {
  //render(<App />);
   //console.log(comments.find('h2').text());
    expect(postsWrapper.state().posts).toEqual([]);
});

it('Verify flex class exist', () => {

    expect(postsWrapper.find('.flex').exists()).toBe(true);
});
it('Verify CreateNewPost Component exist', () => {

    expect(postsWrapper.find('CreateNewPost').exists()).toBe(true);
});

it(' render renderPostList   ', () => {

    console.log(postsWrapper.find(SinglePost).debug());
    postsWrapper.instance().renderPostList(fakePosts)
    expect(postsWrapper.find(SinglePost).length).toBe(0);

});
});
