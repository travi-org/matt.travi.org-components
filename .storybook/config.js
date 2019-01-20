import React from 'react';
import {addDecorator, configure, getStorybook, setAddon} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import createPercyAddon from '@percy-io/percy-storybook';
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

const {percyAddon, serializeStories} = createPercyAddon();
setAddon(percyAddon);

configure(loadStories, module);

serializeStories(getStorybook);
