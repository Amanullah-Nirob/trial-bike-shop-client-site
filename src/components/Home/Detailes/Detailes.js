import { Container, Grid } from '@mui/material';
import React from 'react';
import './Detailes.css'
const Detailes = () => {
    return (
        <div className='details-area'>
            <Container>
                <div className='details-title'>
                    <h2>Details</h2>
                </div>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={4}>
                        <div className='details-box'>
                        <div className='details-box-wreaper'>
                            <div>
                            <div  className='fram-box a'>
                                <h3>Frame</h3>
                                <p>MTB TRAIL FULL SUSP. 27.5″</p>
                            </div>
                            <div>
                                <h3>Frame</h3>
                                <p>MTB TRAIL FULL SUSP. 27.5″</p>
                            </div>
                            </div>
                            <div>
                               <div>
                               <h3>Size</h3>
                                <p>19”</p>
                               </div>
                               <div className='bottom-size'>
                               <h3>Chain</h3>
                                <p>TRX</p>
                               </div>
                            </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='details-box'>
                        <div className='details-box-wreaper'>
                            <div>
                            <div  className='fram-box'>
                                <h3>Forks</h3>
                                <p>RECON SILVER AIR</p>
                            </div>
                            <div>
                                <h3>Bottom Bracket</h3>
                                <p>TRAIL WHEEL</p>
                            </div>
                            </div>
                            <div>
                               <div>
                               <h3>Pedals</h3>
                                <p>TRAILX ALLORED</p>
                               </div>
                               <div className='bottom-size'>
                               <h3>Rims</h3>
                                <p>TRX CELESTIAL .5″</p>
                               </div>
                            </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='details-box'>
                        <div className='details-box-wreaper'>
                            <div>
                            <div  className='fram-box'>
                                <h3>Freewheel/Cassette</h3>
                                <p>TRX M7000 11-46T</p>
                            </div>
                            <div>
                                <h3>Tires</h3>
                                <p>MAXXIS 27.5″ X 2.35″</p>
                            </div>
                            </div>
                            <div>
                               <div>
                               <h3>Shifters</h3>
                                <p>TRX S6000 10 SPEED</p>
                               </div>
                               <div className='bottom-size'>
                               <h3>Rear Shock</h3>
                                <p>11.11s</p>
                               </div>
                            </div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Detailes;