import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import ContactForm from './presentational';

suite('contact form', () => {
  test('that the form renders', () => {
    const wrapper = shallow(<ContactForm />);
    const form = wrapper.find('form');
    const inputs = form.find('Input');
    const nameField = inputs.at(0);
    const emailField = inputs.at(1);
    const messageField = inputs.at(2);

    assert.equal(nameField.prop('id'), 'name');
    assert.equal(nameField.prop('label'), 'Name');

    assert.equal(emailField.prop('id'), 'email');
    assert.equal(emailField.prop('type'), 'email');
    assert.equal(emailField.prop('label'), 'Email Address');

    assert.equal(messageField.prop('id'), 'message');
    assert.equal(messageField.prop('label'), 'Message');
    assert.isTrue(messageField.prop('multiline'));
  });
});
