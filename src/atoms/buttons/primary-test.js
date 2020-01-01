import React from 'react';
import {Button} from '@material-ui/core';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import PrimaryButton from './primary';

suite('primary button', () => {
  const label = any.word();

  test('that the primary button is rendered', () => {
    const wrapper = shallow(<PrimaryButton>{label}</PrimaryButton>);
    const button = wrapper.find(Button);

    assert.equal(button.prop('color'), 'primary');
    assert.equal(button.prop('variant'), 'contained');
    assert.equal(button.text(), label);
    assert.isUndefined(button.prop('endIcon'));
  });

  test('that an icon can be rendered at the end', () => {
    const icon = <div />;

    const wrapper = shallow(<PrimaryButton icon={icon}>{label}</PrimaryButton>);
    const button = wrapper.find(Button);

    assert.equal(button.prop('endIcon'), icon);
  });
});
