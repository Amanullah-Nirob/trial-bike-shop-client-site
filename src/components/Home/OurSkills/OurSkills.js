import { Container, Grid } from '@mui/material';
import React from 'react';
import './OurSkills.css'
const OurSkills = () => {
    return (
        <div className='main-prof'>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <div className="ourSkills-Simple-img">
                      <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/josh-nuttall-zkVi57UYHIQ-unsplash-5.png" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                     <div className='our-skills-prof'>
                          <div className='ourSkill-prof-title'>
                               <h3>BEST TRAIL BIKE</h3>
                              <h1>TRAIL VIGILLON ALLEZ TX-86 MOUNTAINS BIKE</h1>
                          </div>                     
<div class="our-skills-prof-main">
<div className='single-progress-item'>
<div class="min-content">
<span id="om">Tuneups & Builds</span>
<span id="oma">80%</span>
</div>
<div class="line"></div>
</div>

<div className='single-progress-item'>
<div class="min-content1">
    <span class="oma">Adjust & Install</span>
    <span class="omaa">96%</span>
    </div>
    <div class="line1"></div>
</div>

  <div className='single-progress-item'>
  <div class="min-content2">
        <span class="jan1">Personal Bike Fit</span>
        <span class="jan2">75%</span>
        </div>
        <div class="line2"></div>
  </div>
</div>

<div className='skill-item-area a'>
                       <div className='skill-item'>
                             <h3>Shifters</h3>
                             <p>TRX S6000 10 SPEED</p>
                         </div>
                       <div className='skill-item a'>
                             <h3>F/R Brakes</h3>
                             <p>MTR200 HYDRAULIC</p>
                         </div>
                       <div className='skill-item'>
                             <h3>Rear Shock</h3>
                             <p>RAIDEN TR AIR, 184 X</p>
                         </div>
         </div>

                      </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default OurSkills;