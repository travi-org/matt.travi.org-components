import React from 'react';
import {TextField} from '@material-ui/core';
import {shallow} from 'enzyme';
import any from '@travi/any';
import {assert} from 'chai';
import PresentationalInput from './presentational';

suite('text-input', () => {
  test('that the input is rendered', () => {
    const id = any.word();
    const label = any.word();

    const wrapper = shallow(<PresentationalInput id={id} label={label} />);
    const input = wrapper.find(TextField);

    assert.equal(input.prop('id'), id);
    assert.equal(input.prop('label'), label);
  });
});
