import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme => ({

  panelBody: {
    marginLeft: -25,
    marginRight: -25,
    overflowX: 'auto',
  }
})

const PanelBody = ({classes, children, ...props}) => (
  <div className={classes.panelBody} {...props}>
    {children}
  </div>
)

export default withStyles(styles)(PanelBody);