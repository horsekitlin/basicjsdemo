import React from 'react'
import { Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.oshadows[2],
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      borderRadius: 0,
      boxShadow: 'none',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      padding: theme.spacing.unit,
    }
  }
})

const Panel = ({classes, children, ...props}) => (
  <Paper className={classes.paper} {...props}>
    {children}
  </Paper>
)

export default withStyles(styles)(Panel);