import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button, LineButton } from '../Buttons';
import { Panel } from '../Panels';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.oshadows[2],
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      borderRadius: 0,
      boxShadow: 'none',
      borderTop: `1px solid ${theme.palette.grey[100]}`
    }
  },
  button: {
    float: 'right',
    '&+&': {
      marginRight: theme.spacing(1.5)
    }
  },
  buttonZone: {
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'absolute',
      right: 20,
      bottom: 20
    }
  }
});

const SearchPanelWrapper = ({ classes, onSearch, onReset, ...props }) => (
  <Panel className={classes.paper}>
    <Grid container spacing={8}>
      <Grid item xs={12} lg={9} style={{ width: '100%', display: 'block' }}>
        {props.children}
      </Grid>
      <Grid item xs={12} lg={3} style={{ position: 'relative' }}>
        <span className={classes.buttonZone}>
          <LineButton
            text='重设'
            color='primary'
            className={classes.button}
            onClick={onReset}
          />
          <Button
            text='筛选'
            color='primary'
            className={classes.button}
            onClick={onSearch}
          />
        </span>
      </Grid>
    </Grid>
  </Panel>
);

export default withStyles(styles)(SearchPanelWrapper);
