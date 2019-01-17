import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import Header from '../../../../src/molecules/header';

suite('header', () => {
  test('that the app-bar from material-ui is used', () => {
    const wrapper = shallow(<Header />);
    const bar = wrapper.find(AppBar);
    const toolbar = bar.find(Toolbar);
    const siteLogo = toolbar.find(Typography);
    const homepageLink = siteLogo.find('a');
    const logo = homepageLink.find('Logo');

    assert.equal(siteLogo.prop('variant'), 'headline');
    assert.equal(homepageLink.prop('href'), 'https://matt.travi.org');
    assert.isTrue(logo.exists());
  });
});
