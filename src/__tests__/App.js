import React from 'react';
import { shallow, mount } from 'enzyme'; // render
import App from '../components/App';


it('renders the app correctly', () => {
  //render(<App />);
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});


it(' check the currentPersona ´state´ of App component ', () => {
    const app = shallow(<App />);
    //console.log(app.state());
    expect(app.state().currentPersona).toEqual('');
});

it(' check the currentPage ´state´ of App component ', () => {
    const app = shallow(<App />);
    //console.log(app.state());
    expect(app.state().currentPage).toEqual('home');
});


it(' change ´state´ to bot on click the button ', () => {
  const app = shallow(<App />);
  app.find('.absolute').simulate('click');
  //console.log(app.state().currentPage);
  expect(app.state().currentPage).toEqual('bot');
  app.find('.absolute').simulate('click');
  //console.log(app.state().currentPage);
  expect(app.state().currentPage).toEqual('home');
});

/*
it(' Check changePersona method ', () => {
  const app = shallow(<App />);

  console.log(app.instance().changePersona);
  const actual = app.instance().changePersona("Zac")
  const expected = 'Zac'

expect(actual).equals(expected);
});

*/
