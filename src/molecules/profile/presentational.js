import React from 'react';
import travi from 'travi';      // eslint-disable-line import/extensions

function lookupUseFor(network) {
  return travi.social.filter(account => network === account.network)[0];
}

export default function Profile() {
  const twitter = lookupUseFor('Twitter');
  const github = lookupUseFor('GitHub');

  return (
    <div className="h-card vcard" id="profile">
      <a className="p-name fn u-url url u-uid uid" rel="me" href={travi.contact.website}>{travi.name}</a>

      <ul>
        <li title={github.user}><a className="u-url" href={github.url} rel="me">GitHub</a></li>
        <li title={twitter.user}><a className="u-url" href={twitter.url} rel="me">Twitter</a></li>
      </ul>
    </div>
  );
}
