import React from 'react';
import {Alert, AlertTitle} from '@material-ui/lab';

export default function () {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      Thank you for contacting me!
    </Alert>
  );
}
