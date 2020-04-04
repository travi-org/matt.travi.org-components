import React from 'react';
import {string} from 'prop-types';
import {Send} from '@material-ui/icons';
import {TextInput, PrimaryButton} from '@travi/travi.org-core-components';

export default function ContactForm({action, name}) {
  return (
    <div>
      <form method="POST" action={action} name={name} data-netlify css={{maxWidth: 400, margin: '0 auto'}}>
        <input type="hidden" name="form-name" value={name} />

        <ol css={{listStyleType: 'none', textAlign: 'left'}}>
          <li><TextInput label="Name" id="submitter-name" variant="full-width" /></li>
          <li><TextInput label="Email Address" id="email" type="email" variant="full-width" /></li>
          <li><TextInput label="Message" id="message" multiline variant="full-width" /></li>
        </ol>

        <ol css={{listStyleType: 'none', display: 'inlineBlock', textAlign: 'right'}}>
          <li><PrimaryButton type="submit" icon={<Send />}>Contact Travi</PrimaryButton></li>
        </ol>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  name: string.isRequired,
  action: string
};
