import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import ContactForm from './presentational';

suite('contact form', () => {
  test('that the form renders', () => {
    const formName = any.word();
    const formAction = any.url();

    const wrapper = shallow(<ContactForm name={formName} action={formAction} />);
    const form = wrapper.find('form');
    const formNameField = form.find('input');
    const inputs = form.find('Input');
    const nameField = inputs.at(0);
    const emailField = inputs.at(1);
    const messageField = inputs.at(2);
    const submitButton = form.find('PrimaryButton');

    assert.equal(form.prop('method'), 'POST');
    assert.equal(form.prop('action'), formAction);
    assert.equal(form.prop('name'), formName);
    assert.isTrue(form.prop('data-netlify'));

    assert.equal(formNameField.prop('type'), 'hidden');
    assert.equal(formNameField.prop('name'), 'form-name');
    assert.equal(formNameField.prop('value'), formName);

    assert.equal(nameField.prop('id'), 'submitter-name');
    assert.equal(nameField.prop('label'), 'Name');

    assert.equal(emailField.prop('id'), 'email');
    assert.equal(emailField.prop('type'), 'email');
    assert.equal(emailField.prop('label'), 'Email Address');

    assert.equal(messageField.prop('id'), 'message');
    assert.equal(messageField.prop('label'), 'Message');
    assert.isTrue(messageField.prop('multiline'));

    assert.equal(submitButton.children().text(), 'Contact Travi');
    assert.equal(submitButton.prop('type'), 'submit');
    assert.equal(submitButton.prop('icon').type.displayName, 'SendIcon');
  });
});
