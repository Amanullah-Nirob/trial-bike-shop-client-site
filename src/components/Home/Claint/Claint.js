import { Container, Grid } from '@mui/material';
import React from 'react';
import './clint.css'
const Claint = () => {
    return (
        <div className='clints'>
            <Container>
                <Grid container spacing={12}>
                    <Grid item md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset2.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset3.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset4.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item  md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset5.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset6.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item  md={2}>
                        <div id="grayscale-img" className='clint-box'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/asset3.png" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Claint;