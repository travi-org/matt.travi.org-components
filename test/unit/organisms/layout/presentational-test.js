import React from 'react';
import {Reboot} from 'material-ui';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Layout from '../../../../src/organisms/layout';

suite('layout', () => {
  const Child = () => null;
  Child.displayName = 'Child';

  test('that the layout includes the header and children', () => {
    const wrapper = shallow(<Layout><Child /></Layout>);

    assert.isTrue(wrapper.find(Reboot).exists());
    assert.isTrue(wrapper.find('Header').exists());
    assert.isTrue(wrapper.find('Child').exists());
  });
});
