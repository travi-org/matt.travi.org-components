import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import Header from '../../../../src/molecules/header';

suite('header', () => {
  test('that the app-bar from material-ui is used', () => {
    const wrapper = shallow(<Header />).dive();
    const bar = wrapper.find('AppBar');

    assert.isTrue(bar.exists());
  });
});
