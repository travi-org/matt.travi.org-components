import React from 'react';
import {number, shape, string} from 'prop-types';
import Image from 'gatsby-image';

export default function Avatar({fixed, name}) {
  return <Image alt={name} fixed={fixed} />;
}

Avatar.propTypes = {
  name: string,
  fixed: shape({
    width: number.isRequired,
    height: number.isRequired,
    src: string.isRequired,
    srcSet: string.isRequired
  }.isRequired)
};
