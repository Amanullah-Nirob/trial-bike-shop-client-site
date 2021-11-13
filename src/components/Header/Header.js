import React from 'react';
import { Button, Container, IconButton, Toolbar, useTheme  } from '@mui/material';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UseAuth from '../../Hooks/UseAuth';




const Header = () => {
  const {user,logout}=UseAuth()
  const [state, setState] = React.useState({
    left: false,
    right: false
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280,background:"#060818",height:1 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Toolbar sx={{padding:"3px 14px"}}>
       <div className='header-logo a'>
     <img alt='' src='https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/trail-logo-fix-M2EEC2.png' />
   </div>

         <div className='close-btn'>
         <button onClick={toggleDrawer(anchor, false)}><i class="fas fa-times"></i></button>
         </div>
       </Toolbar>
       <Divider sx={{backgroundColor:"#ddd"}} />
      <List>
          <ListItem>
           <ListItemIcon> <img alt='' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/24/000000/external-home-miscellaneous-kiranshastry-gradient-kiranshastry.png"/></ListItemIcon>
            <ListItemText><NavLink  style={{textDecoration:"none",color:"#fff",textTransform:"capitalize"}} to="/home"activeStyle={{fontWeight: "bold",color: "#e01212"}}>home</NavLink></ListItemText>
          </ListItem>  
            <ListItem>
            <ListItemIcon><img src="https://img.icons8.com/fluency/24/000000/about.png" alt=''/></ListItemIcon> 
            <ListItemText> <NavLink style={{textDecoration:"none",color:"#fff",textTransform:"capitalize"}} to="/about"activeStyle={{fontWeight: "bold",color: "#e01212"}}>About Us</NavLink> </ListItemText> </ListItem>         
            {user?.email &&
          <ListItem>
            <ListItemIcon><img src="https://img.icons8.com/fluency/24/000000/dashboard-layout.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
            <NavLink to="/dashboard"activeStyle={{color: "#e01212"}}style={{textDecoration:"none",color:"#fff",textTransform:"capitalize"}}>dashboard</NavLink>
            </ListItemText>
          </ListItem>  
               }
       { user?.email ? 
       <button onClick={logout} style={{border:0,background:"transparent",color:"#fff",outline:"none",fontSize:"17px"}}>
        <ListItem>
            <ListItemIcon><img alt='' src="https://img.icons8.com/external-sbts2018-flat-sbts2018/24/000000/external-logout-social-media-basic-1-sbts2018-flat-sbts2018.png"/>
            </ListItemIcon>
            <ListItemText>
              Logout
            </ListItemText>
          </ListItem></button> : <ListItem>
            <ListItemIcon><img src="https://img.icons8.com/external-bearicons-gradient-bearicons/24/000000/external-login-call-to-action-bearicons-gradient-bearicons-1.png" alt=''/>
            </ListItemIcon>
            <ListItemText>
           <NavLink  style={{textDecoration:"none",color:"#fff",textTransform:"capitalize"}}to="/login"activeStyle={{fontWeight: "bold",color: "#e01212"}}>login/Register</NavLink>
            </ListItemText>
          </ListItem>  
        }


      </List>

    </Box>
  );



    return (
    <div className='headers'>

    <div className='list-area-main'>
    <Container sx={{ flexGrow: 1 }}>

  <div className='list-area-all-content'>

   <div className='header-logo'>
     <img alt='' src='https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/trail-logo-fix-M2EEC2.png' />
   </div>


  <div className='list-area'>
             <NavLink to="/home"activeStyle={{color: "#e01212"}}>home</NavLink>
                <NavLink to="/about"activeStyle={{color: "#e01212"}}>About Us</NavLink>
                <NavLink to="/blog"activeStyle={{color: "#e01212"}}> Blog</NavLink>
                <NavLink to="/contact"activeStyle={{color: "#e01212"}}>Contact</NavLink>
                {user?.email &&<NavLink to="/dashboard"activeStyle={{color: "#e01212"}}>dashboard</NavLink>}
     </div>
         <div className='loginorregister'>
           {user?.email&& <small style={{color:"#f23801"}}>{user?.displayName}</small>}
       { user?.email?
       <Button onClick={logout}>logout</Button>:
        <Link to='/login'>login/ragister</Link>
       }
         </div>

     <div className='drower'>
        {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className='amarbtn' onClick={toggleDrawer(anchor, true)}><i class="fas fa-bars"></i></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment> 
      ))}
    </div>

  </div>




    </Container>
   </div>
        </div>
    );
};

export default Header;