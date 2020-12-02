import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  green: {
    color: 'green'
  },
  inline: {
    display: 'inline',
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <List className={classes.root} fullWidth>
      <ListItem alignItems="flex-start" component="a" href="/login">
        <Avatar className={classes.green}>
          <ThreeDRotation />
        </Avatar>
        <ListItemText                    
          primary="Login screen"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                2020-12-02
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default (HomeScreen);
