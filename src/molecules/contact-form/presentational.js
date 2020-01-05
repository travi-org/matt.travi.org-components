import React from 'react';
import {string} from 'prop-types';
import {Send} from '@material-ui/icons';
import {TextInput, PrimaryButton} from '@travi/travi.org-core-components';

export default function ContactForm({action, name}) {
  return (
    <form method="POST" action={action} name={name} data-netlify>
      <input type="hidden" name="form-name" value={name} />

      <ol css={{listStyleType: 'none'}}>
        <li><TextInput label="Name" id="submitter-name" /></li>
        <li><TextInput label="Email Address" id="email" type="email" /></li>
        <li><TextInput label="Message" id="message" multiline /></li>
      </ol>

      <ol css={{listStyleType: 'none', display: 'inlineBlock'}}>
        <li><PrimaryButton type="submit" icon={<Send />}>Contact Travi</PrimaryButton></li>
      </ol>
    </form>
  );
}

ContactForm.propTypes = {
  name: string.isRequired,
  action: string
};
