import { Container, Grid } from '@mui/material';
import React, { useRef } from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
const emailRef=useRef()

   const fromSubmit=(e)=>{
       e.preventDefault()
       const email=emailRef.current.value;
       const emailAdmin={email}
     fetch(`https://cryptic-falls-79729.herokuapp.com/user`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(emailAdmin)
     })
     .then(res=>res.json())
     .then(data=>{
         if(data.modifiedCount>0){
             alert(`admin roles successfully added`)
         }
     })

   }

    return (
        <div>
          <Container>
              <Grid container spacing={2}>

                  <Grid item xs={12} md={6}>
                  <div className='makeAdminForm'>
                  <h1>Make Admin</h1>
                  <form onSubmit={fromSubmit}>
                          <input ref={emailRef} type="email" placeholder='Email'/>
                          <input type="submit" value="Make Admin" />
                      </form>
                  </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                  
                  </Grid>

              </Grid>
          </Container>
        </div>
    );
};

export default MakeAdmin;