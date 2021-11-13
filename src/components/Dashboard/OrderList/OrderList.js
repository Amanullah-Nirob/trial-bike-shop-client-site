import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth'
import './OrderList.css'
const OrderList = () => {
const {user}=UseAuth()

 const [orders,setOrders]=useState([])
  useEffect(()=>{
      fetch(`https://cryptic-falls-79729.herokuapp.com/orders/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[user?.email])


  const deleteFunction=(id)=>{
      const confirm=window.confirm(`are you sure you want to delete?`)
      if(confirm){
        fetch(`https://cryptic-falls-79729.herokuapp.com/orders/${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert(`your product successfully deleted`)
                const remainingOrders=orders.filter((x)=>x._id !==id)
                setOrders(remainingOrders)
            }
        })
      }
    }
    



    return (
        <div style={{color:"#fff"}}>
          <h1>Your Orders List</h1>
              <Grid container spacing={2}>
                  {
                      orders.map((x)=><Grid item xs={6} md={2}>
                      <div className="order-list-card">
                      <div className="order-list-card-img">
                          <img src={x.img} alt="" />
                          </div>
                          <div className="order-list-card-text">
                              <span>Name: {x.name}</span> <br />
                              <span>Email: {x.email}</span><br />
                              <span>ProductName: {x.Product}</span><br />
                              <span>Price: ${x.price}</span><br />
                              <span>Date: {x.date}</span><br />
                              <span>Status: {x.status}</span><br />
                          </div>
                          <div className="deletebtn">
                          <button className='deleteBtn' onClick={()=>deleteFunction(x._id)}>Delete</button>
                          </div>
                      </div>
                      </Grid>)
                  }
              </Grid>
        </div>
    );
};

export default OrderList;