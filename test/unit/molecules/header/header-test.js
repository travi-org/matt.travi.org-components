import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import Header from '../../../../src/molecules/header';

suite('header', () => {
  test('that the app-bar from material-ui is used', () => {
    const wrapper = shallow(<Header />);
    const bar = wrapper.find(AppBar);
    const toolbar = bar.find(Toolbar);
    const siteLogo = toolbar.find(Typography);
    const logo = siteLogo.find('Logo');

    assert.equal(siteLogo.prop('type'), 'headline');
    assert.isTrue(logo.exists());
  });
});
