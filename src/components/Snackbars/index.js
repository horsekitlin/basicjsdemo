import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Snackbar as BaseSnackBar, SnackbarContent } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import classNames from 'classnames';

const variantIcon = {
  success: CheckIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  snackbar: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: '5px 15px'
  },
  success: {
    '& svg': {
      marginRight: 10,
      color: theme.palette.success.main,
    }
  },
  error: {
    '& svg': {
      marginRight: 10,
      color: theme.palette.danger.main,
    }
  },
  info: {
    '& svg': {
      marginRight: 10,
      color: theme.palette.info.main,
    }
  },
  warning: {
    '& svg': {
      marginRight: 10,
      color: theme.palette.warning.main,
    }
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    fontSize: 16,
    '& svg': {
      marginRight: 10,
    }
  },
});

const SnackBar = ({ classes, message, open, type, ...props}) => {

    const Icon = variantIcon[type];

    return (
      <BaseSnackBar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2300}
      >
        <SnackbarContent
          className={classes.snackbar}
          aria-describedby='message-id'
          message={
            <span id={`SnackBarId`} className={classNames(classes[type], classes.message)}>
              <Icon/>
              {message}
            </span>
          }
        />
      </BaseSnackBar>
    )
  }

export default withStyles(styles)(SnackBar)