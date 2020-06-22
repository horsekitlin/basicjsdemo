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
    boxShadow: theme.oshadows[2],
    '&:hover': {
      boxShadow: theme.oshadows[4],
    }
  },
  primary: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark,
    }
  },  
  secondary: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.dark,
    }
  },
  success: {
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
    '&:hover': {
      borderColor: theme.palette.success.dark,
      color: theme.palette.success.dark,
    }
  },
  warning: {
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
    '&:hover': {
      borderColor: theme.palette.warning.dark,
      color: theme.palette.warning.dark,
    }
  },
  danger: {
    borderColor: theme.palette.danger.main,
    color: theme.palette.danger.main,
    '&:hover': {
      borderColor: theme.palette.danger.dark,
      color: theme.palette.danger.dark,
    }
  },
  info: {
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
    '&:hover': {
      borderColor: theme.palette.info.dark,
      color: theme.palette.info.dark,
    }
  },
  default: {
    borderColor: theme.palette.default.main,
    color: theme.palette.default.main,
    '&:hover': {
      borderColor: theme.palette.default.dark,
      color: theme.palette.default.dark,
    }
  }
})

const LineButton = ({classes, hide, color, children, className, ...props}) => (
  hide
  ? null
  : <Button type='button' variant = 'outlined' className={classNames(className, classes.button, classes[color])} {...props}>
    {children}
  </Button>
)

export default withStyles(styles)(LineButton)