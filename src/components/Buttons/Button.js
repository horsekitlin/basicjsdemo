import React from 'react'
import propTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button as BaseButton } from '@material-ui/core';

const styles = theme => ({
  button: {
    borderWeight: '1px',
    color: '#fff',
    fontSize: 16,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    boxShadow: theme.oshadows[2],
    '& span': {
      fontWeight: 300,
    },
    '&:hover': {
      boxShadow: theme.oshadows[4],
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },  
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  success: {
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  danger: {
    backgroundColor: theme.palette.danger.main,
    '&:hover': {
      backgroundColor: theme.palette.danger.dark
    }
  },
  info: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark
    }
  },
  default: {    
    borderColor: theme.palette.default.main,
    '&:hover': {
      backgroundColor: theme.palette.default.dark
    }
  }
})

const Button = ({classes, type, hide, color, text, className, ...props}) => (
  hide
  ? null
  : <BaseButton type={type} variant='contained' className={classNames(className, classes.button, classes[color])} {...props}>
    {text}
    </BaseButton>
)

Button.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
}

Button.defaultProps = {
  type: 'button',
  color: 'primary'
}

export default withStyles(styles)(Button)