import React from 'react';
import {string} from 'prop-types';
import {Send} from '@material-ui/icons';
import TextInput from '../../atoms/form/text-input';
import PrimaryButton from '../../atoms/buttons/primary';

export default function ContactForm({name}) {
  return (
    <form method="POST" name={name} data-netlify>
      <input type="hidden" name="form-name" value={name} />
      <ol css={{listStyleType: 'none'}}>
        <li><TextInput label="Name" id="submitter-name" /></li>
        <li><TextInput label="Email Address" id="email" type="email" /></li>
        <li><TextInput label="Message" id="message" multiline /></li>
      </ol>

      <ol css={{listStyleType: 'none', display: 'inlineBlock'}}>
        <li><PrimaryButton icon={<Send />}>Contact Travi</PrimaryButton></li>
      </ol>
    </form>
  );
}

ContactForm.propTypes = {
  name: string.isRequired
};
