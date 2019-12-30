import React from 'react';
import {string} from 'prop-types';
import {TextField} from '@material-ui/core';

export default function Input({id, label}) {
  return <TextField id={id} label={label} />;
}

Input.propTypes = {
  id: string.isRequired,
  label: string.isRequired
};
