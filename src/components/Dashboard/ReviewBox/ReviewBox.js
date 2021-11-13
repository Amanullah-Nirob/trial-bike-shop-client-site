import { Container, Grid } from '@mui/material';
import React, { useRef } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import './ReviewBox.css'
const ReviewBox = () => {
    const {user}=UseAuth()
    
    const nameRef=useRef()
    const emailRef=useRef()
    const imgRef=useRef()
    const RatingRef=useRef()
    const disRef=useRef()


   const formSubmit=(e)=>{
    e.preventDefault()
       const name=nameRef.current.value;
       const email=emailRef.current.value;
       const img=imgRef.current.value;
       const dic=disRef.current.value;
       const rating=RatingRef.current.value;

       const data={name,email,dic,img,rating}
     
fetch(`https://cryptic-falls-79729.herokuapp.com/reviews`,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        alert(`your review successfully accepted `)
        e.target.reset()
    }
})


   }

    return (
        <div className='review-form-area'>
           <Container>
           <div className="ourworks-title r">
           <h3>PRODUCTS</h3>
            <h1>Give reviews based on your personal opinion</h1>
           </div>

               <Grid container spacing={3}>

                   <Grid item xs={12} md={6}>
                    <div className='review-form'>
                     <h1>Review form</h1>
                    <form onSubmit={formSubmit}>
                    <input ref={nameRef}  type="text" placeholder='Name' value={user.displayName} /> 
                         <input ref={emailRef} type="email" placeholder='email' value={user.email} />  
                         <input ref={RatingRef}  type="number" placeholder='Rating'  /> 
                         <input ref={imgRef}  type="text" placeholder='image URL'  /> 
                          <div className='text-area'>
                          <textarea ref={disRef} cols="30" rows="10"></textarea> 
                          </div>
                        <input type="submit" value="Submit" />
                     </form>

                    </div>
                   </Grid>

                   

                   <Grid item xs={12} md={6}>
                    <div className="review-box-images">
                    <img src="https://i.ibb.co/2qf0422/5360730-removebg-preview.png" alt="" />
                    </div>
                   </Grid>
               </Grid>
           </Container>
        </div>
    );
};

export default ReviewBox;