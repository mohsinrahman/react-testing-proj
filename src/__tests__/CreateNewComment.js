import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import CreateNewComment from '../components/CreateNewComment';

describe('CreateNewComment',() => {

it(' check the comment ´state´ of  CreateNewComment component ', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= shallow(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
      expect(CreateNewCommentWrapper.state().comment).toEqual('');
  });
it('Verify that component creates form', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= mount(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
   //console.log(comments.find('h2').text());
    expect(CreateNewCommentWrapper.find('form').exists()).toBe(true);
});

it('Verify that label tag exist', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= mount(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
   //console.log(comments.find('h2').text());
    expect(CreateNewCommentWrapper.find('label').exists()).toBe(true);
});

it('Verify text in label tag exist', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= mount(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
   //console.log(comments.find('h2').text());
    expect(CreateNewCommentWrapper.find('label').text()).toBe('Comment');
});


it('Verify props ', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= mount(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
   //console.log(comments.find('h2').text());
   //console.log(CreateNewCommentWrapper.instance().props);
    expect(CreateNewCommentWrapper.instance().props.postId).toBe(postId);
});

it('Verify text in label tag exist', () => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= mount(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);
   //console.log(comments.find('h2').text());
    expect(CreateNewCommentWrapper.find('.bg-indigo-dark').prop('type')).toBe('submit');
});

});

describe('When creating comment',() => {
  let testComment = 'This is my comment ';
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewCommentWrapper= shallow(<CreateNewComment postId = { postId}  author = {author} updateComments = {fakemethod}/>);


 beforeEach(() => {
//console.log(CreateNewCommentWrapper.find('textarea').debug());
CreateNewCommentWrapper.find('textarea').simulate('change', {

           target: { name: 'comment', value:  testComment}} );


});

it(' update the text ´state´ of  CreateNewComment component ', () => {
  console.log(CreateNewCommentWrapper.state().comment);

     expect(CreateNewCommentWrapper.state().comment).toEqual(testComment);

  });


describe('Submit comment',() => {
  beforeEach(() => {
    CreateNewCommentWrapper.find('.bg-indigo-dark').simulate('click');
   });

   it(' Add new Comment ', () => {
     console.log(CreateNewCommentWrapper.state());
     expect(CreateNewCommentWrapper.state().comment).toEqual(testComment);
     });


  });
  describe('Submit Form',() => {
    it(' check the submit form  CreateNewComment component ', () => {

          console.log(CreateNewCommentWrapper.find('form').debug());
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          expect(CreateNewCommentWrapper.find('form').length).toBe(1);
          CreateNewCommentWrapper.find('form').simulate('submit', fakeEvent);
          expect(CreateNewCommentWrapper.state().comment).toBe("");
          //expect(CreateNewPostWrapper.state().content).toEqual('');
      });
    });
  });
