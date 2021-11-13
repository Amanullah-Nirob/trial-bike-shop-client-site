import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Review.css'
import Review from './Review'
const Reviews = () => {

const [reviews,setReviews]=useState([])

useEffect(()=>{
    fetch(`https://cryptic-falls-79729.herokuapp.com/reviews`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
},[])


    return (
        <div className='review'>
            <Container>
            <div className="ourworks-title">
           <h3>TESTIMONIAL</h3>
                            <h1>WHAT OUR CUSTOMERS SAY</h1>
           </div>
              <div className='review-contents'>
              <Grid container spacing={10}>
                     {
                         reviews.map((x)=><Review card={x} />)
                     }
                </Grid>
              </div>
            </Container>
        </div>
    );
};

export default Reviews;