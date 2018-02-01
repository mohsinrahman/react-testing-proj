import React from 'react';
import { shallow, mount, render } from 'enzyme'; // render
import AvatarSelector from '../components/AvatarSelector';

describe('AvatarSelector',() => {

it('renders the AvatarSelector correctly', () => {
  //render(<App />);
  const currentUser = 'Zac';
  const avatarSelector = mount(<AvatarSelector currentPersona= {currentUser} />);
  //console.log(avatarSelector.debug());
  if (currentUser === 'Zac') {
    expect(avatarSelector.find('img').prop('src')).toBe('zac.png');
  }
  else if (currentUser === 'Esmeralda') {
    expect(avatarSelector.find('img').prop('src')).toBe('esmeralda.png');
  }
  else {
    expect(avatarSelector.find('img').prop('src')).toBe('morgana.png');
  }
  //personaSwitcher.find('select').simulate('change',{target: {value : 'Esmeralda'}} );
  //expect(personaSwitcher.render().find('select [selected]').val()).toBe('Esmeralda');
  //expect(personaSwitcher.find('option')).to.have.length(0);
  //expect(
  //console.log(personaSwitcher.find('select' ).getElement().selectedIndex = 2);
  //[selected]').val()).toBe('Esmeralda');

  //expect(personaSwitcher.find('select [selected]').text()).toBe('Zac');
   //console.log(avatarSelector.find('img').prop('src'));
  //expect(personaSwitcher).toMatchSnapshot();
});

it('renders the AvatarSelector correctly', () => {
  //render(<App />);
  const currentUser = 'Esmeralda';
  const avatarSelector = mount(<AvatarSelector currentPersona= {currentUser} />);
  //console.log(avatarSelector.debug());
  if (currentUser === 'Zac') {
    expect(avatarSelector.find('img').prop('src')).toBe('zac.png');
  }
  else if (currentUser === 'Esmeralda') {
    expect(avatarSelector.find('img').prop('src')).toBe('esmeralda.png');
  }
  else {
    expect(avatarSelector.find('img').prop('src')).toBe('morgana.png');
  }
});

it('renders the AvatarSelector correctly', () => {
  //render(<App />);
  const currentUser = 'Morgana';
  const avatarSelector = mount(<AvatarSelector currentPersona= {currentUser} />);
  //console.log(avatarSelector.debug());
  if (currentUser === 'Zac') {
    expect(avatarSelector.find('img').prop('src')).toBe('zac.png');
  }
  else if (currentUser === 'Esmeralda') {
    expect(avatarSelector.find('img').prop('src')).toBe('esmeralda.png');
  }
  else {
    expect(avatarSelector.find('img').prop('src')).toBe('morgana.png');
  }
});

it('renders props the AvatarSelector correctly', () => {
  //render(<App />);
  const currentUser = 'Morgana';
  const avatarSelector = mount(<AvatarSelector currentPersona= {currentUser} />);
  console.log(avatarSelector.instance());


});



});
