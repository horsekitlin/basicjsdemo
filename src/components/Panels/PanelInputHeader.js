import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  panelHeader: {
    marginTop: -11,
    marginLeft: -25,
    marginRight: -25,
    paddingTop: 5,
    paddingBottom: 18,
    paddingLeft: 22,
    paddingRight: 22,
    borderBottom: '1px solid #ddd',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 15,
    }
  },
})

const PanelInputHeader = ({title='', subTitle='', classes, children, ...props}) => (
  <div className={classes.panelHeader} {...props}>
      {children}
  </div>
)

export default withStyles(styles)(PanelInputHeader)