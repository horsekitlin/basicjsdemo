import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  required: {
    color: 'red',
    position: 'absolute',
    marginLeft: -10,
    paddingRight: 5
  },
  label: {
    position: 'relative',
    minWidth: '150px',
    color: '#000000',
    lineHeight: '30px',
    display: 'inline-block',
    marginLeft: 0,
    fontSize: '16px',
    marginTop: 'auto',
    marginBottom: 3,
    wordBreak: 'keep-all',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 4,
      display: 'block',
      fontSize: '14px',
      marginLeft: theme.spacing(1),
      marginBottom: 0
    }
  }
});

const FormLabel = ({ classes, required, hide, ...props }) => {
  if (hide) return null;

  return (
    <span className={classes.label} {...props}>
      {required && <span className={classes.required}>*</span>}
      {props.children}
    </span>
  );
};

export default withStyles(styles)(FormLabel);
