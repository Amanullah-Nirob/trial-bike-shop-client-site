import React,{useState} from 'react';
import { Button, CircularProgress, Container,Grid,TextField } from '@mui/material';
import './Login.css'
import { Link,useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
const Login = () => {
const {loginFunction,isloading}=UseAuth()
    const [data,setData]=useState({})
    const location=useLocation()
    const history=useHistory()
    
   const handleBlur=(e)=>{
   const filed=e.target.name;
   const value=e.target.value;
    const newData={...data}
    newData[filed]=value
    setData(newData)
   }

 const formSubmit=(e)=>{
  e.preventDefault()
  loginFunction(data.email,data.password,location,history)
  e.target.reset()
 }

    return (
        <div className='loginOrRegister-section'>
           <Container>
               <Grid container spacing={2}>
          
                 <Grid item xs={12} md={6}>
                  { !isloading && <div className='loginform'>
                        <h2>Login form</h2>
                    <form onSubmit={formSubmit}>
                     <input
                      placeholder='Email'
                      type="email"
                      name='email'
                      onBlur={handleBlur}
                      />
                     <input  
                      placeholder='Password'
                      type="password"
                      name='password'
                      onBlur={handleBlur}
                      />
                      <input className='loginfotmSubmitBtbn' type="submit" value="Login" />
                     </form>
                     <Link to='/register'>
                     <Button variant="text">New User? Register Now</Button>
                     </Link>
                    </div>}
                    {isloading&&<CircularProgress color="secondary" />}
                 </Grid>

                 <Grid item xs={12} md={6}>
                     <div className='loginform-image'>
                    <img src="https://i.ibb.co/PmyD8rm/19362653-removebg-preview.png" alt="" />
                     </div>
                 </Grid>
               </Grid>
           </Container>
        </div>
    );
};

export default Login;