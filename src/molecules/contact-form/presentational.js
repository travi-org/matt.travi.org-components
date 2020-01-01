import React from 'react';
import TextInput from '../../atoms/form/text-input';

export default function ContactForm() {
  return (
    <form>
      <ol css={{listStyleType: 'none'}}>
        <li><TextInput label="Your Name" id="name" /></li>
        <li><TextInput label="Your Email Address" id="email" type="email" /></li>
      </ol>
    </form>
  );
}
