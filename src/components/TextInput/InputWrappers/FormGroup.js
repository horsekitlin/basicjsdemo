import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  formGroup: {
    position: 'relative',
    width: '100%',
    display: 'inline-flex',
    marginTop: 0,
    height: '100%',
    margin: '5px 0px',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      margin: '0px'
    },
    [theme.breakpoints.down('sm')]: {
      height: 'inherit'
    }
  }
});

const FormGroup = ({ classes, ...props }) => (
  <div className={classes.formGroup} {...props}>
    {props.children}
  </div>
);

export default withStyles(styles)(FormGroup);
