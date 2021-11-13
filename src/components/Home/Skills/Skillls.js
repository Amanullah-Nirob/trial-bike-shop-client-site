import { Container, Grid } from '@mui/material';
import React from 'react';
import './Skills.css'
const Skillls = () => {
    return (
        <>
        <div className='skill-section'>
            <Container>
                <Grid container spacing={15}>
                    <Grid item xs={12} md={6}>
                        <div className="skill-section-img">
                            <div className='skill-section-img1'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/handsome-bearded-traveler-dressed-in-a-trendy-camouflage-jacket-standing-with-sports-bicycle-e1620723643548.jpg" alt="" />
                            </div>
                            <div className='skill-section-img2'>
                            <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/handsome-bearded-traveler-dressed-in-a-trendy-camouflage-jacket-standing-with-sports-bicycle-1-e1620723636535.jpg" alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className='skill-section-content'>
                     <div className='skill-content-text-title'>
                        <h3>FIND OUT MORE</h3>
                        <h1>THE HEART OF OUR HUMAN CENTERED DESIGN SKILLS</h1>
                     </div>
                     <div className='skill-section-intro'>
                            <div><p>It Is Not A Thing To Be Crushed.us and  Undoubtedly, I Believe That Everyone Will Get A Lot Of Comfort By Running ItWe Are The First and To Hit The RoadI Believe That Everyone </p></div>
                            <div><p>Lorem ipsum dolor sit amet consec tetur adipiscing elit sed do eius mod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam magna aliqua eiusmod.</p></div>
                     </div>
                       <div className='skill-item-area'>
                       <div className='skill-item'>
                             <h3>FRAME</h3>
                             <p>TRAIL R3ACT 180MM</p>
                         </div>
                       <div className='skill-item a'>
                             <h3>HANDLEBAR</h3>
                             <p>CARBON BB : 35MM</p>
                         </div>
                       <div className='skill-item'>
                             <h3>SHIFTER</h3>
                             <p>TRAIL XTR SL-M9100</p>
                         </div>
                       </div>

                      </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    
       <div className='prof'>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>57 <span>+</span> </h1>
                        <p>YEARS EXPERIENCE</p>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>745 <span>+</span> </h1>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>32 <span>+</span> </h1>
                        <p>FREE RETURNS</p>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>592 <span>+</span> </h1>
                        <p>PRODUCTS SOLD</p>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>97 <span>+</span> </h1>
                        <p>YEARS EXPERIENCE</p>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className='customer-prof'>
                        <h1>78 <span>+</span> </h1>
                        <p>GIFT COLLECTIONS</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
       </div>

        </>
    );
};

export default Skillls;