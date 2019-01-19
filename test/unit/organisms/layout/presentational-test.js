import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Layout from '../../../../src/organisms/layout/presentational';

suite('layout', () => {
  const Child = () => null;
  Child.displayName = 'Child';

  test('that the layout includes the header and children', () => {
    const navigationToggleHandler = () => undefined;
    const navigationOpen = any.boolean();

    const wrapper = shallow(
      <Layout navigationOpen={navigationOpen} onNavigationDrawerToggle={navigationToggleHandler}>
        <Child />
      </Layout>
    );
    const header = wrapper.find('Header');

    assert.isTrue(wrapper.find(CssBaseline).exists());
    assert.isTrue(wrapper.find('Child').exists());

    assert.equal(header.prop('onNavigationDrawerToggle'), navigationToggleHandler);
  });
});
