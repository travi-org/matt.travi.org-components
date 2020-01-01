import React from 'react';
import {string} from 'prop-types';
import {TextField} from '@material-ui/core';

export default function Input({id, label, type}) {
  return <TextField id={id} label={label} type={type} />;
}

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string
};

Input.defaultProps = {
  type: 'text'
};
