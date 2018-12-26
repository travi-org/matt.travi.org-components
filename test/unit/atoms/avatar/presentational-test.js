import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Avatar from '../../../../src/atoms/avatar';

suite('avatar', () => {
  test('that the image is rendered', () => {
    const name = any.string();
    const fixed = {
      ...any.simpleObject(),
      width: any.integer(),
      height: any.integer(),
      src: any.url(),
      srcSet: any.url()
    };

    const wrapper = shallow(<Avatar name={name} fixed={fixed} />);
    const img = wrapper.find('Image');

    assert.equal(img.prop('alt'), name);
    assert.equal(img.prop('fixed'), fixed);
  });
});
