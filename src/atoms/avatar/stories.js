/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Avatar from './index';

const avatarDimensions = 400;
const fixedQueryResult = {
  width: avatarDimensions,
  height: avatarDimensions,
  src: `https://via.placeholder.com/${avatarDimensions}`,
  srcSet: `https://via.placeholder.com/${avatarDimensions}`
};

storiesOf('Atoms/Avatar', module).add('default', () => <Avatar fixed={fixedQueryResult} />);
