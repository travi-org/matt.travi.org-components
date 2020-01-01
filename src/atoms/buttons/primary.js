import React from 'react';
import {node} from 'prop-types';
import {Button} from '@material-ui/core';

export default function PrimaryButton({children, icon}) {
  return (
    <Button color="primary" variant="contained" endIcon={icon}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  icon: node,
  children: node.isRequired
};
