import React from 'react';
import { Snackbar as BasicSnackBar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const AlertInfo = (props) => {
  return (
    <Alert
      elevation={6}
      variant='filled'
      {...props}
    />
  );
};

const Snackbar = (props) => {
  const { level, message } = props;

  return (
    <BasicSnackBar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={6000}
      key={`${message}`}
      {...props}
    >
      <AlertInfo severity={level}>{message}</AlertInfo>
    </BasicSnackBar>
  );
};

export default Snackbar;