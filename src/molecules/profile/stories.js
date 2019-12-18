/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Layout from '../../organisms/layout';
import Profile from '.';

storiesOf('Molecules/Profile', module)
  .add('default', () => <Profile />)
  .add('wrapped in layout', () => (
    <Layout>
      <Profile />
    </Layout>
  ));
