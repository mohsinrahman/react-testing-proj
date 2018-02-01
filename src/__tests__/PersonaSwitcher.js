import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import PersonaSwitcher from '../components/PersonaSwitcher';

describe('PersonaSwitcher',() => {

it('renders the PersonaSwitcher correctly', () => {
  //render(<App />);
  const fakemethod = jest.fn();
  const currentUser = '';
  const changeUser = '';
  const personaSwitcher = shallow(<PersonaSwitcher currentPersona= {currentUser} changePersona={fakemethod}/>);
  //console.log(personaSwitcher.find('select [selected]').text());
  personaSwitcher.find('select').simulate('change',{target: {value : 'Esmeralda'}} );
  //expect(personaSwitcher.render().find('select [selected]').val()).toBe('Esmeralda');
  //expect(personaSwitcher.find('option')).to.have.length(0);
  //expect(
  //console.log(personaSwitcher.find('select' ).getElement().selectedIndex = 2);
  //[selected]').val()).toBe('Esmeralda');

  expect(personaSwitcher.find('select [selected]').text()).toBe('Zac');
   //console.log(personaSwitcher);
  //expect(personaSwitcher).toMatchSnapshot();
});

});
