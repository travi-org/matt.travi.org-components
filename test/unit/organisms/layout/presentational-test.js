import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import {Layout} from '../../../../src/organisms/layout/presentational';
import Header from '../../../../src/molecules/header';
import NavigationDrawer from '../../../../src/molecules/navigation';

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
    const header = wrapper.find(Header);
    const navDrawer = wrapper.find(NavigationDrawer);

    assert.isTrue(wrapper.find(CssBaseline).exists());
    assert.isTrue(wrapper.find('Child').exists());

    assert.equal(header.prop('onNavigationDrawerToggle'), navigationToggleHandler);
    assert.equal(header.prop('navigationOpen'), navigationOpen);

    assert.equal(navDrawer.prop('onToggle'), navigationToggleHandler);
    assert.equal(navDrawer.prop('open'), navigationOpen);
  });
});
