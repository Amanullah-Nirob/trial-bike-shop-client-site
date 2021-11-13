import React,{useEffect,useState,useRef} from 'react';
import { useParams } from 'react-router';
import { CircularProgress, Container,Grid,TextField } from '@mui/material';
import './OrderPlace.css'
import UseAuth from '../../Hooks/UseAuth'

const OrderPlace = () => {
    const {id}=useParams()
const [singleService,setSingleService]=useState({})
const {user}=UseAuth()
    useEffect(()=>{
        fetch(`https://cryptic-falls-79729.herokuapp.com/homeService/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleService(data))
    },[])


    const nameRef=useRef()
    const emailRef=useRef()
    const addressRef=useRef()
    const phoneRef=useRef()
    const dateRef=useRef()
    const pruductRef=useRef()
     const formSubmited=(e)=>{
         e.preventDefault()
         const name=nameRef.current.value;
         const email=emailRef.current.value;
         const address=addressRef.current.value;
         const Product=pruductRef.current.value;
         const phone=phoneRef.current.value;
         const date=dateRef.current.value;

          const loadData={name,email,address,Product,phone,date,img:singleService.img,status:'pending',price:singleService.price}

       fetch(`https://cryptic-falls-79729.herokuapp.com/orders`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },

          body:JSON.stringify(loadData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert(`your order successfully accepted`)
               e.target.reset()
           }
       })


     }
    

    return (
        <div className='orderPlace'>
          <Container>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                <div className='single-service-review-area'>
                <div className='single-service-review'>
                         <img src={singleService.img} alt="" />
                          <div className='single-service-review-text'>
                          <h1>{singleService.title}</h1>
                         <p>{singleService.dic}</p>
                         <h3>${singleService.price}</h3>
                          </div>
                     </div>
                </div>
                 </Grid> 
   
                 <Grid item xs={12} md={6}>
                  <div className='order-Place-form'>
                      <h1>Confirm orders now</h1>
                  <form onSubmit={formSubmited}>
                  <input type="name"  ref={nameRef} value={user?.displayName} placeholder='Name'/>
                                <input type="email" value={user?.email} ref={emailRef}placeholder='Email'/>
                                <input type="text"  ref={addressRef} placeholder='Address'/>
                                <input type="text" value={singleService?.title} ref={pruductRef} placeholder='Product Name'/>
                                <input type="number"ref={phoneRef} placeholder='Phone'/>
                                <input type="date"  ref={dateRef} placeholder='Date'/>
                            <input type="submit" value="Place order" />
            
          </form>
                  </div>
                 </Grid> 
               
   
   
                 </Grid>
       
          </Container>
        </div>
    );
};

export default OrderPlace;