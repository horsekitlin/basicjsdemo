import React from 'react';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Toolbar, AppBar, IconButton, Typography, Drawer, Divider, Hidden } from '@material-ui/core';
import ProfileMenu from './components/ProfileMenu';
import SidebarMenu from './components/SidebarMenu';
import Colors from '../../constants/colors.config';
import AlertDialog from './components/AlertDialog';
import ErrorBoundary from '../ErrorBoundary';
import SnackBar from '../Snackbar';

const drawerWidth = 200;

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: Colors.bodybg,
    minHeight: '100vh',
    height: '100%',
    fontFamily: theme.typography.fontFamily,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: `box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.72)`,
    borderBottom: '1px solid #2a41ad',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: `0px 0px 3px rgba(0, 0, 0, 0.72)`,
    borderBottom: '1px solid #2a41ad'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',   
  },
  drawer: {
    width: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: Colors.menubg,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: '0px solid #000',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0 ,    
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 3px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,    
    paddingLeft: 0,
    backgroundColor: Colors.bodybg,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth
    }, 
  },
  contentShift: {
    marginLeft: 0,    
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth
    }, 
  },
  divider: {
    borderBottom: `1px solid ${Colors.menubgdark}`,
    height:0
  },
  sideBar: {
    borderRight:'1px solid #000'
  },
  infoLogo: {
    width: '172px',
    paddingRight: '8px'
  }
});

class LayoutWrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  componentDidMount = () => {
    this.checkWatchMenuOpened();
    this.props.hideAlertDialog();

  }

  showAlertDialog = type => () => {
    this.props.showAlertDialog({
      alertMessage: '是否确定登出？',
      alertType: type,
      level: 'info',
    });
  } 

  handleDrawerOpen = () => {
    this.props.sideBarSwitch(true);
    this.checkWatchMenuOpened();
  };

  checkWatchMenuOpened = () => {
    const pathId = this.props.location.pathname.split('/')[1]
    if(pathId !== undefined)  this.props.setWatchMenu(pathId);
  }

  handleDrawerClose = () => {
    this.props.sideBarSwitch(false);
    this.props.setWatchMenu('');
  };

  handleLogout = () => {

    const { auth } = this.props;
    const token = auth.getIn(['info','token']);
    const payload = {
      customHeaders: { Authorization: token }
    };

    this.props.logout(payload);
  }

  handleSnackBarClose = () => {
    this.props.closeSnackBar();
  }

  handleUpdatePassword = () => {
    this.props.history.push({ pathname: `/password` })
  }

  handleAlertConfirm = () => {
    const { nav } = this.props;
    const alertType = nav.get('alertType');
    
    switch (alertType) {
      case 'LOGOUT':
      case 'PERMISSION_EXPIRED':
        this.handleLogout();
        break;
      default:
        break;
    }

    this.props.hideAlertDialog();
  }

  handleAlertCancel = () => {
    this.props.hideAlertDialog();
  }

  render() {
    const { classes, theme, auth, nav, snackbar, ...other } = this.props;
    const open = nav.get('isSideBarOpened');
    const employeeName = 'Admin';//auth.getIn(['info','employeeName']) || '';
    const roleName = 'administrator';//auth.getIn(['info','roleName']) || '';

    console.log("LayoutWrapper")

    return (
      <ErrorBoundary>
        <div className={classes.root}>
          <AlertDialog
            title={nav.get('alertMessage')}
            open={nav.get('isAlertDialogOpen')}
            level={nav.get('level')}
            onConfirm={this.handleAlertConfirm}
            onCancel={this.handleAlertCancel}
          />
          <SnackBar
            open={snackbar.get('open')}
            message={snackbar.get('message')}
            level={snackbar.get('level')}
            onClose={this.handleSnackBarClose}
          />
          <AppBar
            position='fixed'
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar disableGutters={!open}>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: open,
                })}>
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant='h6' color='inherit' noWrap>
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton disabled>
                  <Typography variant='subtitle1' style={{ color: '#FFF' }}>
                    {`${employeeName}, ${roleName}`}
                  </Typography>
                </IconButton>
                <ProfileMenu updatePassword={this.handleUpdatePassword} logout={this.showAlertDialog('LOGOUT')} />
              </div>
            </Toolbar>
          </AppBar>
          <MuiThemeProvider theme={darkTheme}>
            <Hidden smUp>
              <Drawer
                variant='temporary'
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: open
                })}
                classes={{
                  paper: classNames(classes.drawer,{
                    [classes.drawerOpen]: open
                  }),
                }}
                onClose={this.handleDrawerClose}
                open={open}>
                <div className={classes.toolbar}>
                  {/* <img className={classes.infoLogo} src={Logo} alt='LOGO'/> */}
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </div>
                <Divider className={classes.divider}/>
                <SidebarMenu nav={nav} {...other}/>
              </Drawer>
            </Hidden>
            <Hidden xsDown>
              <Drawer
                  variant='permanent'
                  className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open
                  })}
                  classes={{
                    paper: classNames(classes.drawer,{
                      [classes.drawerOpen]: open
                    }),
                  }}
                  open={true}>
                  <div className={classes.toolbar}>
                    {/* <img className={classes.infoLogo} src={Logo} alt='LOGO'/> */}
                  </div>
                  <Divider className={classes.divider}/>
                  <SidebarMenu nav={nav} { ...other }/>
                </Drawer>
             </Hidden>
          </MuiThemeProvider>
          <main className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}>
            <div className={classes.toolbar} />
           {this.props.children}
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LayoutWrapper);
