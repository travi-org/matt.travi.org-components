import React from 'react';
import {storiesOf} from '@storybook/react';
import ContactForm from '.';

storiesOf('Molecules/Contact Form', module).add('default', () => (
  <ContactForm name="contact-form-story" />
));
