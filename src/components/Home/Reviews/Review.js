import { Grid } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
const Review = (props) => {
    const {img,name,email,dic,rating}=props.card
    return (
        <Grid item xs={12} md={4}>
        <div className='review-box'>
        <div className='review-box-text'>
             <p>{dic}</p>
          </div>
          <div className='review-starts'>
          <Rating
                  initialRating={rating}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                    readonly
                  />
          </div>
          <div className='review-box-image'>
             <div className="icon-content">
            <img src="https://i.ibb.co/syzXSNg/png-clipart-quotation-mark-computer-icons-quotation-angle-image-file-formats-removebg-preview.png" alt="" />
             </div>
             <div className='review-user'>
                 <div className='review-user-img'>
             <img src={img} alt="" />
                 </div>
                 <div className='review-user-text'>
                     <h4>{name}</h4>
                     <p>{email}</p>
                 </div>
             </div>
          </div>
         
        </div>
    </Grid>
    );
};

export default Review;