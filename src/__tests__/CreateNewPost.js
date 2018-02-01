import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import CreateNewPost from '../components/CreateNewPost';

describe('CreateNewPost',() => {
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewPostWrapper= mount(<CreateNewPost author={author} updatePosts={fakemethod} />);
it(' check the ´state´ of  CreateNewPost component ', () => {

      expect(CreateNewPostWrapper.state().content).toEqual('');
  });

  it(' check the submit form  CreateNewPost component ', () => {

        //console.log(CreateNewPostWrapper.find('form').debug());
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        expect(CreateNewPostWrapper.find('form').length).toBe(1);
        CreateNewPostWrapper.find('form').simulate('submit', fakeEvent);
        expect(CreateNewPostWrapper.state().content).toBe("");
        //expect(CreateNewPostWrapper.state().content).toEqual('');
    });


});

describe('When creating Post',() => {
  let testTitle = 'This is my Title of Post ';
  const fakemethod = jest.fn();
  const postId= '1';
  const author = 'Zac';
  const CreateNewPostWrapper= shallow(<CreateNewPost author = {author} updatePosts= {fakemethod}/>);


 beforeEach(() => {
//console.log(CreateNewCommentWrapper.find('textarea').debug());
CreateNewPostWrapper.find('input').at(0).simulate('change', {

           target: { name: 'title', value:  testTitle}} );


});

it(' update the text ´state´ of  CreateNewComment component ', () => {
  console.log(CreateNewPostWrapper.state().title);

     expect(CreateNewPostWrapper.state().title).toEqual(testTitle);

  });

    });
