import React from 'react';
import clsx from 'clsx';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

//import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';



import Dashboard1 from './Dashboard';
import USerProfile from './USerProfile';
import Tables from './Tables';
import SimpleTable from './SimpleTable';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
      marginTop:theme.spacing(20),
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      marginTop:theme.spacing(100),
      paddingTop:20,
    },
  },
  text:{
    color:"#BBB",
    fontSize:10,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background:"#EEEEEE",
    },
  },
  
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color:"#666666",
    fontFamily:'sans-serif',
    fontSize:17,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop:60,
    backgroundColor:'#ffffff',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbar: theme.mixins.toolbar,
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    padding:20,
    marginTop:20,

  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
  
export default function Admin(props) {
const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  }

    const mainListItems=(
        <div>
    
          <NavLink to="/">  
          <ListItem 
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
          
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Dashboard" />
          
                            </ListItem>
    
          </NavLink>      
    
          <NavLink to="/USerProfile">
    
          <ListItem 
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon>
              <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="User Profile" />
          </ListItem>
          </NavLink> 
          
    
        <NavLink to="/TableList">
          <ListItem button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Table List" />
          </ListItem>
          </NavLink>
    
        <NavLink to="/Notification">
          <ListItem button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon> 
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Notifications" />
          </ListItem>
          </NavLink>
    
          <ListItem button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon>
              <RoomOutlinedIcon/>
            </ListItemIcon>
            <ListItemText  disableTypography style={{fontFamily:'sans-serif',
                            fontSize:'10',color:'#666666'}} primary="Maps" />
          </ListItem>
    
        </div>
      
    );

  return (
      <Router>
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed"className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>

          <IconButton primary aria-label="delete" color="black">
                <PersonOutlineIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {mainListItems}
          </Drawer>
        </Hidden>
                
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            
          >
            {mainListItems}
          </Drawer>
        </Hidden>
      </nav>
      <main style={{background:"#EEEEEE",padding:30,paddingTop:80}}>
        <Switch>
              <Route path="/" exact component={Dashboard1} />
              <Route path="/USerProfile" component={USerProfile} />
              <Route path="/TableList" component={Tables} />
              
            </Switch>

      </main>

    </div>
    </Router>
  );
}
