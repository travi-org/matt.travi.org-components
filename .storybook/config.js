import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from '../src';

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);

configure(loadStories, module);
