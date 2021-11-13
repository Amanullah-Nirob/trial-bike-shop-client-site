import React from 'react';
import { Container,Grid } from '@mui/material';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
const HomeTopBenner = () => {
    return (
        <div className='home-Top-Banner'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}></Grid>

                    <Grid item xs={12} md={5}>
                        <div className='home-banner-text'>
                         <div className='price-rating'>
                             <div><h2>$165,00</h2></div>
                             <div className='rating-starts'>
                             <Rating
                                  initialRating={4.3}
                                  emptySymbol="fa fa-star-o fa-2x"
                                  fullSymbol="fa fa-star fa-2x"
                                    readonly
                                  />
                        </div>
                         </div>
                      <div className='banner-main-text'>
                          <h1>AXQUARONZ EX19 TRAILX BIKE</h1>
                          <p>We Think We Will Be Able To Get This Bike Off The Roads By 2025 And All Bike Lovers Will Feel Comfortable Riding It. We Believe That We Can Do Something Good For Bike Lovers.</p>
                      </div>
                    <div className='banner-models-area'>
                        <div className='banner-models'>
                            <h4>Model :</h4>
                            <h3>TRAIL CASCADE DXP-1600</h3>
                        </div>
                        <div className='banner-models'>
                            <h4>Color :</h4>
                            <h3>GREY RUST</h3>
                        </div>
                    </div>
                        <div className='home-banner-btn'>
                            <Link to='/explore'>
                            <button>explore</button>
                            </Link>
                        </div>
                        </div>
                    </Grid>
            
                </Grid>
            </Container>
        </div>
    );
};

export default HomeTopBenner;