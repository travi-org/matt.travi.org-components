import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Avatar from './index';

suite('avatar', () => {
  test('that the image is rendered', () => {
    const name = any.string();
    const dimensions = any.integer();
    const src = any.url();

    const wrapper = shallow(<Avatar name={name} dimensions={dimensions} src={src} />);
    const img = wrapper.find('img');

    assert.equal(img.prop('alt'), name);
    assert.equal(img.prop('height'), dimensions);
    assert.equal(img.prop('width'), dimensions);
    assert.equal(img.prop('src'), src);
  });
});
