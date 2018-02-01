import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';


describe('Comments',() => {
const  testComment = " Dummy Comment";
it('Verify the h2 text in Comments Component', () => {
  //render(<App />);
  const currentUser = 'Zac';
  const comments= mount(<Comments postId = "1" currentPersona="Zac"/>);
   //console.log(comments.find('h2').text());
    expect(comments.find('h2').text()).toBe('Comments');

});

it(' check the comment ´state´ of Comments component ', () => {
    const commentsWrapper = shallow(<Comments postId = "1" currentPersona="Zac"/> );
    //console.log(app.state());
    expect(commentsWrapper.state().comments).toEqual([]);
});

it(' renderCommentList should render SingleComment ', () => {
      const fakeFunction = jest.fn();
      const fakeComments = [{id: '1', author:'bu', onClick: fakeFunction, currentPersona: 'zac', comment: 'My Comments', date:'2018/01/01'}];
      const commentsWrapper = shallow(<Comments postId = "1" currentPersona="Zac"/> );

    console.log(commentsWrapper.find(SingleComment).debug());
    commentsWrapper.instance().renderCommentList(fakeComments)
    expect(commentsWrapper.find(SingleComment).length).toBe(0);
  /*  it('renderCommentList should render <SingleComment(s) />', () => {
    const fakeFunction = jest.fn();
    const fakeComments = [{id: '1', author:'bu', onClick: fakeFunction, currentPersona: 'zac', comment: 'My Comments', date:'2018/01/01'}];
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    wrapper.instance().renderCommentList(fakeComments)
    expect(wrapper.find(<SingleComment {...fakeComments[0]} />)); */
});

    //expect(commentsWrapper.state().comments).toEqual([]);
});
