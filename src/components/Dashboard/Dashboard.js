import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import OrderList from './OrderList/OrderList';
import Pay from './Pay/Pay';
import ReviewBox from './ReviewBox/ReviewBox';
import UseAuth from '../../Hooks/UseAuth';
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProducts from './AddProducts/AddProducts';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageOrders from './MnagaeOrders/ManageOrders';
const drawerWidth = 260;

function Dashboard(props) {
  const {admin,logout,user}=UseAuth()
    let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <div className='users-information'>
        <img alt='' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/70/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png"/>
        <div className='users-information-text'>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
        </div>
      </Toolbar>
      <Divider sx={{background:"#fff"}} />
    { !admin && <List>
      <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/orderList`}>
          <ListItem button>
            <ListItemIcon>
            <img alt='' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-shopping-cart-medical-kiranshastry-gradient-kiranshastry.png"/>
            </ListItemIcon>
            <ListItemText>
           My Orders
            </ListItemText>
          </ListItem>
          </Link>
      
       <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/pay`}>
          <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-money-banking-and-finance-kiranshastry-gradient-kiranshastry-5.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
           Pay
            </ListItemText>
          </ListItem>
          </Link>
      <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/review`}>
          <ListItem button>
            <ListItemIcon>
            <img alt='' src="https://img.icons8.com/external-itim2101-blue-itim2101/30/000000/external-review-project-management-itim2101-blue-itim2101.png"/>
            </ListItemIcon>
            <ListItemText>
            Review
            </ListItemText>
          </ListItem>
          </Link>
      
      <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to='/home'>
          <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-home-multimedia-kiranshastry-gradient-kiranshastry.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
           Back To Home
            </ListItemText>
          </ListItem>
          </Link>
      
      <button className='dashboard-logout-btn' onClick={logout} style={{display: 'contents',color:"#fff"}} >
          <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/28/000000/external-logout-social-media-basic-1-sbts2018-flat-sbts2018.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
           Logout
            </ListItemText>
          </ListItem>
          </button>
      
      
      </List>
      
      }

      {
        admin &&
         <List>
          <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/makeAdmin`}>
          <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-wanicon-flat-wanicon/30/000000/external-customer-review-customer-services-wanicon-flat-wanicon.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
             Make Admin
            </ListItemText>
          </ListItem>
          </Link>
      
          <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/AddProduct`}>
          <ListItem button>
            <ListItemIcon>
             <img alt='' src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/30/000000/external-product-logistics-delivery-icongeek26-outline-colour-icongeek26.png"/>
            </ListItemIcon>
            <ListItemText>
            Add Product
            </ListItemText>
          </ListItem>
          </Link>
      
          <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/ManageProducts`}>
          <ListItem button>
            <ListItemIcon>
             <img alt='' src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/30/000000/external-product-logistics-delivery-icongeek26-outline-colour-icongeek26.png"/>
            </ListItemIcon>
            <ListItemText>
            Manage All Products
            </ListItemText>
          </ListItem>
          </Link>

          <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to={`${url}/ManageOrders`}>
          <ListItem button>
            <ListItemIcon>
             <img alt='' src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/30/000000/external-product-logistics-delivery-icongeek26-outline-colour-icongeek26.png"/>
            </ListItemIcon>
            <ListItemText>
            Manage All Orders
            </ListItemText>
          </ListItem>
          </Link>
          <Link style={{color:"#fff",textDecoration:"none",textTransform:"capitalize"}} to='/home'>
          <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-home-multimedia-kiranshastry-gradient-kiranshastry.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
           Back To Home
            </ListItemText>
          </ListItem>
          </Link>
          <button className='dashboard-logout-btn' onClick={logout} style={{display: 'contents',color:"#fff"}}> <ListItem button>
            <ListItemIcon>
            <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/30/000000/external-logout-social-media-basic-1-sbts2018-flat-sbts2018.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
               Logout
            </ListItemText>
          </ListItem>
      </button>
      
        </List>
      }



      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ 
        display: 'flex',
    }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#060818",
          padding:"8px"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        { admin? <Typography variant="h6" noWrap component="div">
          ADMIN  DASHBOARD
          </Typography>:<Typography variant="h6" noWrap component="div">
            <div className='dashboard-titles'>
            DASHBOARD
            </div>
          </Typography>}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor:"#060818",color:"#fff"},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#060818",color:"#fff" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        <Switch>
      <Route exact path={path}>
      <DashboardHome></DashboardHome>
      </Route>
      <Route path={`${path}/orderList`}>
      <OrderList></OrderList>
      </Route>
      <Route path={`${path}/pay`}>
    <Pay></Pay>
      </Route>
      <Route path={`${path}/review`}>
       <ReviewBox></ReviewBox>
      </Route>
      <Route path={`${path}/makeAdmin`}>
     <MakeAdmin></MakeAdmin>
      </Route>
      <Route path={`${path}/AddProduct`}>
      <AddProducts></AddProducts>
      </Route>
      <Route path={`${path}/ManageProducts`}>
      <ManageProducts></ManageProducts>
      </Route>
      <Route path={`${path}/ManageOrders`}>
     <ManageOrders></ManageOrders>
      </Route>
    </Switch>
        </Typography>
   
      </Box>
    </Box>
   

  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
