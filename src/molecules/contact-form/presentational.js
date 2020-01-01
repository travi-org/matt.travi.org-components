import React from 'react';
import TextInput from '../../atoms/form/text-input';

export default function ContactForm() {
  return (
    <form>
      <ol css={{listStyleType: 'none'}}>
        <li><TextInput label="Name" id="name" /></li>
        <li><TextInput label="Email Address" id="email" type="email" /></li>
        <li><TextInput label="Message" id="message" multiline /></li>
      </ol>
    </form>
  );
}
