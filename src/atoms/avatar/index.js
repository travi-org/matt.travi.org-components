import React from 'react';
import {number, string} from 'prop-types';

export default function Avatar({dimensions, src, name}) {
  return (
    <img className="u-photo" alt={name} width={dimensions} height={dimensions} src={src} css={{borderRadius: '50%'}} />
  );
}

Avatar.propTypes = {
  name: string,
  dimensions: number,
  src: string
};
