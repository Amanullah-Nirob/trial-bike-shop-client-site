import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import './NewsArticle.css'
const NewsArticle = () => {

    return (
        <div className='news-article'> 
            <Container>
            <div className='news-article-titles'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <div className="ourworks-title ba">
           <h3>OUR NEWS</h3>
                            <h1>NEWS & ARTICLE</h1>
     </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className='title-btn'>
             <button disabled>all news</button>
         </div>
</Grid>
</Grid>
</div>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <div className='left-article-box b'>
                            <div className='left-article-box-img'>
                             <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/male-athlete-mountain-biker-e1621318507602.jpg" alt="" />
                            </div>
                            <div className='left-article-box-text'>
                           <h1>Ninja Mountains Bike Performance</h1> <br />
                           <small>May 12, 2021</small>
                           <p>The American Lance Armstrong holds the record of most victories in Tour de France with his 7 consecutive wins. Armstrong also won the 2001 the World CyclingThe American Lance Armstrong holds the record of most victories in Tour de France with his 7 consecutive wins.. </p>
                           <button disabled>read more</button>
                        </div>

                        </div>
                    </Grid>
                 
                    <Grid item xs={12} md={5}>
                        <div className='left-article-box a'>
                            <div className='left-article-box-img a'>
                             <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/tensioner-gear-of-a-bicycle-e1621318540239.jpg" alt="" />
                            </div>
                            <div className='left-article-box-text a'>
                           <h1>The Best Convertible Gear On The Market</h1> <br />
                           <small>May 12, 2021</small>
                           <p>The American Lance Armstrong holds the record of most victories in Tour de France holds the record of...</p>
                           <button disabled>read more</button>
                        </div>

                        </div>
                        <div className='left-article-box'>
                            <div className='left-article-box-img a'>
                             <img src="https://templatekit.jegtheme.com/trail/wp-content/uploads/sites/91/2021/05/back-rider-of-bicycle-e1621318545840.jpg" alt="" />
                            </div>
                            <div className='left-article-box-text a'>
                           <h1>Harness The Power Of Your Hormones</h1> <br />
                           <small>May 12, 2021</small>
                           <p>The American Lance Armstrong holds the record of most victories in Tour de France holds the record of...</p>
                           <button disabled>read more</button>
                        </div>

                        </div>
                    </Grid>
                 
                </Grid>
            </Container>
        </div>
    );
};

export default NewsArticle;