import React from 'react';
import {storiesOf} from '@storybook/react';
import ContactResults from './results';
import ContactForm from '.';

storiesOf('Molecules/Contact Form', module).add('default', () => <ContactForm name="contact-form-story" />);
storiesOf('Molecules/Contact Form/Results', module).add('default', () => <ContactResults />);
