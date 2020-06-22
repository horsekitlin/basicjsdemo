import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  button: {
    fontSize: 16,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  primary: {
    borderColor: 'transparent',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    }
  },  
  secondary: {
    borderColor: 'transparent',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
    }
  },
  success: {
    borderColor: 'transparent',
    color: theme.palette.success.main,
    '&:hover': {
      color: theme.palette.success.dark,
    }
  },
  warning: {
    borderColor: 'transparent',
    color: theme.palette.warning.main,
    '&:hover': {
      color: theme.palette.warning.dark,
    }
  },
  danger: {
    borderColor: 'transparent',
    color: theme.palette.danger.main,
    '&:hover': {
      color: theme.palette.danger.dark,
    }
  },
  info: {
    borderColor: 'transparent',
    color: theme.palette.info.main,
    '&:hover': {
      color: theme.palette.info.dark,
    }
  },
  default: {
    borderColor: 'transparent',
    color: theme.palette.default.main,
    '&:hover': {
      color: theme.palette.default.dark,
    }
  }
})

const FlatButton = ({classes, hide, color, children, className, ...props}) => (
  hide
  ? null
  : <Button type='button' variant = 'outlined' className={classNames(className, classes.button, classes[color])} {...props}>
      {children}
    </Button>
)

export default withStyles(styles)(FlatButton)