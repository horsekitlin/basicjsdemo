import React, { Fragment } from 'react';
import classNames from 'classnames';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  withStyles
} from '@material-ui/core';
import Colors from '../../constants/colors.config';

const styles = theme => ({
  icon: {
    color: Colors.greyheavy
  },
  iconActive: {
    color: Colors.bodybg
  },
  listItem: {
    fontWeight: 'inherit',
    color: '#808080'
  },
  nested: {
    backgroundColor: Colors.menubg,
    transition: theme.transitions.create(['border'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& p': {
      color: Colors.greymiddle,
      fontWeight: '100 !important',
      fontSize: '18px'
    }
  },
  nestedActive: {
    '& p': {
      color: Colors.bodybg
    }
  },
  parentIcon: {
    color: Colors.greymiddle,
    margin: 0,
    minWidth: '36px'
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
        '"Segoe UI Symbol"'
      ].join(',')
    }
  },
  parentTextActive: {
    '& span': {
      color: Colors.bodybg
    }
  },
  parentItem: {
    '& span': {
      fontWeight: '100 !important'
    },
    transition: 'all .2s ease'
  },
  parentItemActive: {
    borderLeft: `5px solid ${Colors.primary}`,
    backgroundColor: Colors.menubgdark
  },
  nestText: {
    fontWeight: '100 !important',
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
        '"Segoe UI Symbol"'
      ].join(',')
    }
  },
  itemIcon: {
    color: Colors.greymiddle,
    width: theme.spacing(3),
    margin: 0
  },
  itemIconActive: {
    color: Colors.bodybg
  }
});

const MenuLinkItem = ({
  id,
  classes,
  parentIcon,
  handleParentClick,
  parentText,
  openParent,
  pathname,
  path
}) => {
  return (
    <Fragment>
      <ListItem
        button
        key={parentText}
        to={path}
        component={Link}
        onClick={handleParentClick(id)}
        color='inherit'
        className={classNames(classes.parentItem, {
          [classes.parentItemActive]: openParent
        })}
      >
        <ListItemIcon
          className={classNames(classes.parentIcon, {
            [classes.parentIconActive]: openParent
          })}
        >
          {parentIcon}
        </ListItemIcon>
        <ListItemText
          className={classNames(classes.parentText, {
            [classes.parentTextActive]: openParent
          })}
        >
          {parentText}
        </ListItemText>
      </ListItem>
    </Fragment>
  );
};

const MenuListItem = ({
  id,
  classes,
  parentIcon,
  handleParentClick,
  parentText,
  openParent,
  pathname,
  items
}) => {
  return (
    <Fragment>
      <ListItem
        button
        onClick={handleParentClick(id)}
        color='inherit'
        className={classNames(classes.parentItem, {
          [classes.parentItemActive]: openParent
        })}
      >
        <ListItemIcon
          className={classNames(classes.parentIcon, {
            [classes.parentIconActive]: openParent
          })}
        >
          {parentIcon}
        </ListItemIcon>
        <ListItemText
          className={classNames(classes.parentText, {
            [classes.parentTextActive]: openParent
          })}
          primary={parentText}
        />
        {openParent ? (
          <ExpandMore className={classes.iconActive} />
        ) : (
          <ChevronRight className={classes.icon} />
        )}
      </ListItem>
      <Collapse in={openParent} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {items.map(item =>
            item.isHided ? null : (
              <ListItem
                button
                key={`MenuItem${item.title}`}
                to={item.path}
                component={Link}
                className={classNames(classes.nested, {
                  [classes.nestedActive]: pathname.includes(item.path)
                })}
              >
                <ListItemText
                  className={classes.nestText}
                  secondary={item.text}
                />
              </ListItem>
            )
          )}
        </List>
      </Collapse>
    </Fragment>
  );
};

class SidebarMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleParentClick = id => () => {
    this.setState(state => ({ open: !state.open }));
    this.props.setWatchMenu(id);
  };

  render() {
    const {
      classes,
      parentIcon,
      parentText,
      items,
      location,
      id,
      nav,
      path
    } = this.props;
    const watchedMenu = nav.get('watchedMenu');
    const openParent = watchedMenu === id;
    const hasNoChild = items.length <= 0;
    return hasNoChild ? (
      <MenuLinkItem
        id={id}
        path={path}
        classes={classes}
        parentIcon={parentIcon}
        openParent={openParent}
        parentText={parentText}
        pathname={location.pathname}
        handleParentClick={this.handleParentClick}
      />
    ) : (
      <MenuListItem
        id={id}
        items={items}
        classes={classes}
        parentIcon={parentIcon}
        openParent={openParent}
        parentText={parentText}
        pathname={location.pathname}
        handleParentClick={this.handleParentClick}
      />
    );
  }
}

export default withStyles(styles)(SidebarMenuItem);
