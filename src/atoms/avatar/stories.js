/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import Avatar from '.';

const avatarDimensions = 400;

storiesOf('Atoms/Avatar', module)
  .add('default', () => (
    <Avatar
      dimensions={avatarDimensions}
      src={`https://via.placeholder.com/${avatarDimensions}`}
      name={`${any.word()} ${any.word()}`}
    />
  ));
