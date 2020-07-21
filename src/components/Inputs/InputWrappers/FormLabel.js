import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  label: {
    minWidth: '90px',
    color: '#000000',
    lineHeight: '30px',
    display: 'inline-block',
    marginLeft: 0,
    fontSize: '16px',
    marginTop: 'auto',
    marginBottom: 3,
    wordBreak: 'keep-all',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      fontSize: '14px',
      marginLeft: theme.spacing(1),
      marginBottom: 0
    }
  }
});

const FormLabel = ({ classes, ...props }) => (
  <span className={classes.label} {...props}>
    {props.children}
  </span>
);

export default withStyles(styles)(FormLabel);
