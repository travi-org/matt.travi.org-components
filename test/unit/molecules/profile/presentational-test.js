import React from 'react';
import reactDom from 'react-dom/server';
import travi from 'travi';                                // eslint-disable-line import/extensions
import {shallow} from 'enzyme';
import {assert} from 'chai';
import microformats from 'microformat-node';
import Profile from '../../../../src/molecules/profile';

suite('profile', () => {
  test('that name is displayed', () => {
    const wrapper = shallow(<Profile />);
    const fullName = wrapper.find('.fn');

    assert.equal(fullName.text(), travi.name);
    assert.equal(fullName.prop('href'), travi.contact.website);
  });

  test('that social accounts are listed', () => {
    const wrapper = shallow(<Profile />);
    const socialAccounts = wrapper.find('li');

    assert.equal(socialAccounts.at(0).text(), 'GitHub');
    assert.equal(
      socialAccounts.at(0).prop('title'),
      travi.social.filter(account => 'GitHub' === account.network)[0].user
    );
    assert.equal(
      socialAccounts.at(0).find('a').prop('href'),
      travi.social.filter(account => 'GitHub' === account.network)[0].url
    );

    assert.equal(socialAccounts.at(1).text(), 'Twitter');
    assert.equal(
      socialAccounts.at(1).prop('title'),
      travi.social.filter(account => 'Twitter' === account.network)[0].user
    );
    assert.equal(
      socialAccounts.at(1).find('a').prop('href'),
      travi.social.filter(account => 'Twitter' === account.network)[0].url
    );
  });

  test('that details are provided as an h-card microformat', () => {
    microformats.get({html: reactDom.renderToStaticMarkup(<Profile />), textFormat: 'normalized'}, (err, mformats) => {
      const hCard = mformats.items.filter(item => item.type.includes('h-card'))[0];

      assert.equal(hCard.properties.name, travi.name);
      assert.equal(hCard.properties.uid, travi.contact.website);
    });
  });
});
