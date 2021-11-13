import React from 'react';
import {Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const HomeService = (props) => {
    const {img,title,dic,price,_id}=props.card
    return (
        <Grid item xs={6} md={3}>
        <div className="Home-service-box">
            <div className="home-service-box-image">
                <img src={img} alt="" />
            </div>
           <div className='home-service-box-text'>
             <h2>{title}</h2>
             <p>{dic}</p>
               <div className='price-and-btn'>
               <h3>${price}</h3>
            <Link to={`/HomeService/${_id}`}>order now</Link>
               </div>
           </div>


        </div>
        </Grid>
    );
};

export default HomeService;