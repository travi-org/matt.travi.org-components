import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Layout from '../../../../src/organisms/layout';

suite('layout', () => {
  const Child = () => null;
  Child.displayName = 'Child';

  test('that the layout includes the header and children', () => {
    const wrapper = shallow(
      <Layout>
        <Child />
      </Layout>
    );

    assert.isTrue(wrapper.find(CssBaseline).exists());
    assert.isTrue(wrapper.find('Header').exists());
    assert.isTrue(wrapper.find('Child').exists());
  });
});
