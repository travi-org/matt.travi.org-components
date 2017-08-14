import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import Header from '../../../../src/molecules/header';

suite('header', () => {
  shallow(<Header />);
});
