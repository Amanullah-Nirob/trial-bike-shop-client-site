import { Container, Grid } from '@mui/material';
import React, { useRef } from 'react';
import './Subscribe.css'



const Subscribe = () => {
const emailref=useRef()

const formSubmit=(e)=>{
    e.preventDefault()
    const email=emailref.current.value;
    const disCountUser={email}

    fetch(`https://cryptic-falls-79729.herokuapp.com/discount`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(disCountUser)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert(`your Application successfully accepted`)
            e.target.reset()
        }
    })

}

    return (
        <div className='subscribe'>
             <Container>
                 <Grid container spacing={5}>
                     <Grid item xs={12} md={6}>
                      <div className='subscribe-box'>
                      <div className="subscribe-content">
                      <h3>GET MORE DISCOUNT</h3>
                      <h1>SUBSCRIBE & GET 15% OFF</h1>
                      <p>Our Service Here Is Very Different From All Other Bike Showrooms. We Try Our Best To Give Every Customer Something Good. From All Other Bike Showrooms. We Try From All Other Bike Showrooms. We Try and discount and benifit and service firstpernet. </p>
                      </div>
                      <div className='subscribe-form'>
                         <form onSubmit={formSubmit}>
                             <input ref={emailref} type="email" placeholder='Your Email' />
                             <button type='submit' className='subscribe-btn'>Subscribe</button>
                         </form>
                      </div>
                      </div>
                     </Grid>
                     <Grid item xs={12} md={6}>

                     </Grid>
                 </Grid>
             </Container>
        </div>
    );
};

export default Subscribe;