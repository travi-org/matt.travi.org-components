import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import {addDecorator, configure, getStorybook, setAddon} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import createPercyAddon from '@percy-io/percy-storybook';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {createTheme} from '@travi/travi.org-theme-components';

function Wrapper({story}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <MuiThemeProvider theme={createTheme(prefersDarkMode ? 'dark' : 'light')}>
      {story()}
    </MuiThemeProvider>
  );
}

addDecorator(story => <Wrapper story={story} />);

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);

const {percyAddon, serializeStories} = createPercyAddon();
setAddon(percyAddon);

configure(loadStories, module);

serializeStories(getStorybook);
