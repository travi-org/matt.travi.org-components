import React from 'react';
import {TextField} from '@material-ui/core';
import {shallow} from 'enzyme';
import any from '@travi/any';
import {assert} from 'chai';
import Input from './presentational';

suite('text-input', () => {
  const id = any.word();
  const label = any.word();

  test('that the input is rendered', () => {
    const wrapper = shallow(<Input id={id} label={label} />);
    const input = wrapper.find(TextField);

    assert.equal(input.prop('id'), id);
    assert.equal(input.prop('label'), label);
    assert.equal(input.prop('type'), 'text');
  });

  test('that the type can be changed from the default', () => {
    const type = any.word();

    const wrapper = shallow(<Input id={id} label={label} type={type} />);
    const input = wrapper.find(TextField);

    assert.equal(input.prop('type'), type);
  });

  test('that the multiline prop is passed through', () => {
    const wrapper = shallow(<Input id={id} label={label} multiline={true} />);
    const input = wrapper.find(TextField);

    assert.isTrue(input.prop('multiline'));
  });
});
