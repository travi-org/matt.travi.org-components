import React from 'react';
import reactDom from 'react-dom/server';
import {Link} from '@material-ui/core';
import travi from 'travi';                                // eslint-disable-line import/extensions
import {shallow} from 'enzyme';
import {assert} from 'chai';
import microformats from 'microformat-node';
import Profile from '../../../../src/molecules/profile';

suite('profile', () => {
  test('that the avatar is rendered', () => {
    const avatarDimensions = 400;

    const wrapper = shallow(<Profile />);
    const avatar = wrapper.find('Avatar');

    assert.equal(avatar.prop('name'), travi.name);
    assert.equal(avatar.prop('dimensions'), avatarDimensions);
    assert.equal(avatar.prop('src'), travi.info.image);
  });

  test('that full name is displayed', () => {
    const wrapper = shallow(<Profile />);
    const fullName = wrapper.find('.fn');

    assert.equal(fullName.children().children().text(), travi.name);
    assert.equal(fullName.find(Link).prop('href'), travi.contact.website);
  });

  test('that title is displayed', () => {
    const wrapper = shallow(<Profile />);
    const role = wrapper.find('.p-role');

    assert.equal(role.children().text(), travi.info.label);
  });

  test('that social accounts are listed', () => {
    const wrapper = shallow(<Profile />);
    const socialAccounts = wrapper.find('li');

    assert.equal(
      socialAccounts
        .at(0)
        .children()
        .children()
        .children()
        .text(),
      'GitHub'
    );
    assert.equal(
      socialAccounts.at(0).prop('title'),
      travi.social.filter(account => 'GitHub' === account.network)[0].user
    );
    assert.equal(
      socialAccounts.at(0).find(Link).prop('href'),
      travi.social.filter(account => 'GitHub' === account.network)[0].url
    );

    assert.equal(
      socialAccounts
        .at(1)
        .children()
        .children()
        .children()
        .text(),
      'Twitter'
    );
    assert.equal(
      socialAccounts.at(1).prop('title'),
      travi.social.filter(account => 'Twitter' === account.network)[0].user
    );
    assert.equal(
      socialAccounts.at(1).find(Link).prop('href'),
      travi.social.filter(account => 'Twitter' === account.network)[0].url
    );
  });

  test('that details are provided as an h-card microformat', () => {
    const html = reactDom.renderToStaticMarkup(<Profile />);

    microformats.get({html, textFormat: 'normalized'}, (err, mformats) => {
      const hCard = mformats.items.filter(item => item.type.includes('h-card'))[0];

      assert.strictEqual(hCard.properties.name[0], travi.name);
      assert.strictEqual(hCard.properties.uid[0], travi.contact.website);
      assert.strictEqual(hCard.properties.role[0], travi.info.label);
      assert.strictEqual(hCard.properties.photo[0], travi.info.image);
    });
  });
});
