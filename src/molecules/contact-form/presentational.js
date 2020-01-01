import React from 'react';
import {string} from 'prop-types';
import TextInput from '../../atoms/form/text-input';

export default function ContactForm({name}) {
  return (
    <form method="POST" name={name} data-netlify>
      <ol css={{listStyleType: 'none'}}>
        <li><TextInput label="Name" id="name" /></li>
        <li><TextInput label="Email Address" id="email" type="email" /></li>
        <li><TextInput label="Message" id="message" multiline /></li>
      </ol>
    </form>
  );
}

ContactForm.propTypes = {
  name: string.isRequired
};
