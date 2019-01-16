import React from 'react';
import {number, string} from 'prop-types';

const styles = {borderRadius: '50%', margin: '50px 0'};

export default function Avatar({dimensions, src, name}) {
  return <img className="u-photo" alt={name} width={dimensions} height={dimensions} src={src} css={styles} />;
}

Avatar.propTypes = {
  name: string,
  dimensions: number,
  src: string
};
