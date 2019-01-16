import React from 'react';
import {Link, Typography} from '@material-ui/core';
import travi from 'travi';      // eslint-disable-line import/extensions
import Avatar from '../../atoms/avatar';

const avatarDimensions = 400;

function lookupUseFor(network) {
  return travi.social.filter(account => network === account.network)[0];
}

export default function Profile() {
  const twitter = lookupUseFor('Twitter');
  const github = lookupUseFor('GitHub');

  return (
    <div className="h-card vcard" id="profile" css={{textAlign: 'center'}}>
      <Avatar dimensions={avatarDimensions} src={travi.info.image} name={travi.name} />
      <Typography variant="h1" gutterBottom className="p-name fn">
        <Link className="u-url url u-uid uid" rel="me" href={travi.contact.website}>
          {travi.name}
        </Link>
      </Typography>
      <Typography variant="h2" className="p-role">{travi.info.label}</Typography>

      <ul css={{display: 'flex', justifyContent: 'center', padding: 0, listStyleType: 'none', li: {margin: 10}}}>
        <li title={github.user}>
          <Typography variant="button">
            <Link className="u-url" href={github.url} rel="me">
              GitHub
            </Link>
          </Typography>
        </li>
        <li title={twitter.user}>
          <Typography variant="button">
            <Link className="u-url" href={twitter.url} rel="me">
              Twitter
            </Link>
          </Typography>
        </li>
      </ul>
    </div>
  );
}
