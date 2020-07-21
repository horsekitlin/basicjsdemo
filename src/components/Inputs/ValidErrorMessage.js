import React from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import Colors from '../../constants/colors.config';

const styles = theme => ({
  message: {
    color: Colors.dangerdark,
    paddingLeft: 100,
    height: 0,
    fontSize: 10,
    transition: 'height .5s ease',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      marginTop: 5,
      paddingLeft: 8
    }
  },
  showMessage: {
    height: 20
  }
});

const ValidErrorMessage = ({ classes, show, message }) => {
  return (
    <p className={classNames(classes.message, { [classes.showMessage]: show })}>
      {message}
    </p>
  );
};

export default withStyles(styles)(ValidErrorMessage);
