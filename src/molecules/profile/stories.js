/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Profile from './index';

storiesOf('Molecules/Profile', module).add('default', () => <Profile />);
