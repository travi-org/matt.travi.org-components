import React from 'react';
import {node, string} from 'prop-types';
import {Button} from '@material-ui/core';

export default function PrimaryButton({children, icon, type}) {
  return (
    <Button type={type} color="primary" variant="contained" endIcon={icon}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  type: string,
  icon: node,
  children: node.isRequired
};
