import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import TextInput from '.';

storiesOf('Atoms/Form/Text-Input', module).add('default', () => (
  <TextInput id={any.word()} label={any.word()} />
));
