import React from 'react';
import {Send} from '@material-ui/icons';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import PrimaryButton from './primary';

storiesOf('Atoms/Buttons/Primary', module)
  .add('default', () => (<PrimaryButton>{any.word()}</PrimaryButton>))
  .add('with icon', () => (<PrimaryButton icon={<Send />}>{any.word()}</PrimaryButton>));
