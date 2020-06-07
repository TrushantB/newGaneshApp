import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { fade, makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import FeedbackIcon from '@material-ui/icons/Feedback';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import InputBase from '@material-ui/core/InputBase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';
import { Drawer } from '@material-ui/core';

const ganeshaImg = require('../assets/images/ganesha.jpg')
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    ProfileSize: {
      width: '28px',
      height: '28px',
      marginRight: '8px'
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    // sectionDesktop: {
    //   display: 'none',
    //   [theme.breakpoints.up('md')]: {
    //     display: 'flex',
    //   },
    // },
    // sectionMobile: {
    //   display: 'flex',
    //   [theme.breakpoints.up('md')]: {
    //     display: 'none',
    //   },
    // },
   
    MenuWrapper: {
      padding: '20px'
    },
    time: {
      fontSize: 12,
      color: 'gray'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
     
    },
    drawerPaper: {
      width: drawerWidth,
      background: '#18202c'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [noti, setNoti] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setNoti(true);
  };
  const handleProfileMenuOpen1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setNoti(false);

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  //notification
  const menuIds = 'primary-search-account-menus';
  const Notification = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuIds}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className='notification-wrapper'
    >
      <h3>Notification</h3>

      <Card elevation={0} className='notification'>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              C
                </Avatar>
          }
          title="Chinmay Joshi"
          //   classes={{
          //       title:classes.Notification
          //   }}
          subheader="Just have posted a new Events"

        />
        <CardContent>
          <span className={classes.time}>20 mins ago</span>
        </CardContent>
      </Card>
      <Card elevation={0} className='notification'>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              R
                </Avatar>
          }
          title="Chinmay Joshi"
          subheader="Just have posted a new Events"

        />
        <CardContent>
          <span className={classes.time}>20 mins ago</span>
        </CardContent>
      </Card>
      <Card elevation={0} className='notification'>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              R
                </Avatar>
          }
          title="Chinmay Joshi"
          subheader="Just have posted a new Events"

        />
        <CardContent>
          <span className={classes.time}>20 mins ago</span>
        </CardContent>
      </Card>
      <div className='t-center f-w-500 all-notification'>
        <a href=''>See All</a>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications"
          aria-controls="primary-search-account-menus"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Avatar className={classes.ProfileSize}>
            <img src={String(ganeshaImg)} className="w-100" alt="ganeshaApp" />
          </Avatar> */}
          <Typography className='ml-10' noWrap>
            Shrimant Dagdushet
          </Typography>
          <div className={classes.grow} />
          <div className='header-icon-wrap'>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton aria-label="show 17 new notifications" color="inherit"
              edge="end"
              aria-controls={menuIds}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className='notification-icon'

            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen1}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className='side-bar-wrap mt-16'>
          <Avatar variant='square' className='side-bar-logo' alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'/>	

        </div>
        <div className={classes.drawerHeader}>
        
          <h3>Ganesha App</h3>
          <IconButton onClick={handleDrawerClose} className='color-text'>
            {theme.direction === 'ltr' ? <CloseIcon  className='color-text'/> : <CloseIcon className='color-text' />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/homepage">
            <ListItemIcon>
              <InboxIcon  className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Home</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/aboutMandal">
            <ListItemIcon>
              <InboxIcon className='color-text' />
            </ListItemIcon>
            <ListItemText className='color-text'>About Mandal</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/memberprofile">
            <ListItemIcon>
              <AccountCircle className='color-text'/>
            </ListItemIcon >
            <ListItemText className='color-text'>Profile</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/receipt">
            <ListItemIcon>
              <ReceiptIcon  className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Receipt</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/membermainpage">
            <ListItemIcon>
              <AccountCircle className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Members</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/events">
            <ListItemIcon>
              <EventIcon className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Events</ListItemText>
          </ListItem>
          {/* <ListItem button component={Link} to="/receiptform">
            <ListItemIcon>
              <DescriptionIcon className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Receipt Form</ListItemText>
          </ListItem> */}
          <ListItem button component={Link} to="/adminbilling">
            <ListItemIcon>
              <DescriptionIcon className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Billing</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/feedback">
            <ListItemIcon>
              <FeedbackIcon className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Feedback</ListItemText>
          </ListItem>
          

          {/* {['Home', 'About Mandal', 'Profile', 'Receipt'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List className="mt-auto">
        <ListItem button component={Link} to="/basicsetting">
            <ListItemIcon>
              <SettingsIcon className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Setting</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="#.">
            <ListItemIcon>
              <LanguageIcon  className='color-text'/>
            </ListItemIcon>
            <ListItemText className='color-text'>Change Language</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <ExitToAppIcon className='color-text' />
            </ListItemIcon>
            <ListItemText className='color-text' >Log Out</ListItemText>
          </ListItem>

          {/* {['Change Language', 'Log Out', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}*/}
        </List>
      </Drawer>

      {renderMobileMenu}
      {}
      {noti ? Notification : renderMenu}
      {/* {noti ? Notification : renderMobileMenu} */}
    </div>
    
  );
}