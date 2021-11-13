import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './MnageOrders.css'
const ManageOrders = () => {
const [allOrders,setAllOrders]=useState([])
const [shipted,setShipted]=useState(false)
    useEffect(()=>{
        fetch(`https://cryptic-falls-79729.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[shipted])


   const deleteOrder=(id)=>{
       const confirm=window.confirm(`are you sure you want to delete?`)
       if(confirm){
        fetch(`https://cryptic-falls-79729.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount>0){
                alert(`product deleted successfully`)
                const remainingOrders=allOrders.filter((x)=>x._id !==id)
                setAllOrders(remainingOrders)
             }
         })
       }


   } 


  const statusUpdateFunction=(id)=>{
      fetch(`https://cryptic-falls-79729.herokuapp.com/orders/${id}`,{
          method:"PUT"
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount>0){
              alert(`order successfully approved`)
              setShipted(true)
          }
      })

  }


    return (
        <div style={{color:"#fff"}} className='all-product-manage'>
               <div className='manage-product-title'>
                       <h1>Manage All Orders</h1>
                   </div>
            <Grid container spacing={4}>
              {
                  allOrders.map((x)=><Grid item xs={6} md={3}>
                  <div className="manage-all-orders-area">
                  <div className='manage-all-order-image'>
                           <img src={x.img} alt="" />
                       </div>
                       <div className="manage-all-order-text">
                           <span>Name: {x.name}</span> <br />
                           <span>Email: {x.email}</span> <br />
                           <span>Address: {x.address}</span> <br />
                           <span>Product: {x.Product}</span> <br />
                           <span>Phone: {x.phone}</span> <br />
                           <span>Date: {x.date}</span> <br />
                           <span>Status: {x.status}</span> <br />
                       <div className='button-group'>
                       <button onClick={()=>deleteOrder(x._id)}>delete</button>
                           <button onClick={()=>statusUpdateFunction(x._id)}>approved</button>
                       </div>
                       </div>
                  </div>
                   </Grid>)
              }
           
            </Grid>
        </div>
    );
};

export default ManageOrders;