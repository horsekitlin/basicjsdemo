import React, { Fragment } from 'react';
import classNames from 'classnames';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, Collapse, List, withStyles } from '@material-ui/core';
import Colors from '../../../constants/colors.config'

const styles = theme => ({
  icon: {
    color: Colors.greyheavy
  },
  iconActive: {
    color: Colors.bodybg
  },
  listItem: {
    fontWeight:'inherit',
    color: '#808080',
  },
  nested: {
    backgroundColor: Colors.menubg,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& p': {
      color: Colors.greymiddle,
      fontWeight:'100 !important',
      fontSize: '18px',
    }
  },
  nestedActive: {
    '& p': {
      color: Colors.bodybg
    }
  },
  parentIcon: {
    color: Colors.greymiddle,
    margin: 0
  },
  parentIconActive: {
    color: Colors.bodybg
  },
  parentText: {
    '& span': {
      color: Colors.greymiddle,
      fontSize: '18px',
      fontFamily: [
        '"Segoe UI"',
        'Avenir',
        '"Chinese Quote"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"PingFang SC"',
        '"Hiragino Sans GB"',
        '"Microsoft YaHei"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  },
  parentTextActive: {
    '& span': {
      color: Colors.bodybg
    }
  },
  parentItem: {
    '& span': {
      fontWeight:'100 !important',
    }
  },
  parentItemActive: {
    borderLeft: `3px solid ${Colors.handling}`,
    backgroundColor: Colors.menubgdark,    
  },  
  nestText: {
    fontWeight:'100 !important',
    marginLeft: 40,
    '& p': {
      fontFamily: [
        '"Segoe UI"',
        'Avenir',
        '"Chinese Quote"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"PingFang SC"',
        '"Hiragino Sans GB"',
        '"Microsoft YaHei"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  },
  itemIcon: {
    color: Colors.greymiddle,
    width:  theme.spacing(3),
    margin: 0
  },
  itemIconActive: {
    color: Colors.bodybg,
  }
});

class SidebarMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  handleParentClick = id => () => {
    this.setState(state => ({ open: !state.open }));
    this.props.setWatchMenu(id);
  };

  render() {
    const {classes, parentIcon, parentText, items, id, nav} = this.props;
    const watchedMenu = nav.get('watchedMenu');
    const openParent = (watchedMenu === id);

    return (
      <Fragment>
        <ListItem 
          button
          onClick={this.handleParentClick(id)} 
          color="inherit" 
          className={classNames(classes.parentItem, {
            [classes.parentItemActive]: openParent
          })}>
          <ListItemIcon className={classNames(classes.parentIcon, {
            [classes.parentIconActive]: openParent
          })}>
            {parentIcon}
          </ListItemIcon>
          <ListItemText inset className={classNames(classes.parentText, {
            [classes.parentTextActive]: openParent
          })}>
            {parentText}
          </ListItemText>
          {openParent ? <ExpandMore className={classes.iconActive} /> : <ChevronRight className={classes.icon} />}
        </ListItem>
        <Collapse in={openParent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map(item => (
              (item.level === 1 )
              ? <ListItem 
                  button
                  key={item.text}
                  to={item.path}
                  component={Link}
                  className={classNames(classes.nested,{
                  [classes.nestedActive]: this.props.location.pathname.includes(item.path)
                })}>
                <ListItemText className={classes.nestText} secondary={item.text} />
              </ListItem>
              : null
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SidebarMenuItem);
