import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
const ManageProducts = () => {
    
   const [allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        fetch(`https://cryptic-falls-79729.herokuapp.com/homeService`)
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
 
    const deleteProduct=(id)=>{
        const confirm=window.confirm(`are you sure you want to delete?`)
        if(confirm){
            fetch(`https://cryptic-falls-79729.herokuapp.com/homeService/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert(`product successfully deleted`)
                    const remainingProduct=allProducts.filter((x)=>x._id !==id)
                    setAllProducts(remainingProduct)
                }
            })
        }
    }

    return (
        <div className='all-product-manage'>
                   <div className='manage-product-title'>
                       <h1>Manage All Products</h1>
                   </div>
               <Grid container spacing={5}>
                   {
                      allProducts.map((x)=><Grid item xs={6} md={3}>
                      <div className='all-product '>
                     <div className='all-product-img'>
                         <img src={x.img} alt="" />
                     </div>
                     <div className='all-product-description'>
                         <h2>{x.title}</h2>
                         <p>{x.dic}</p>
                      <div className='priceAndButton'>
                      <h3>${x.price}</h3>
                         <button onClick={()=>deleteProduct(x._id)}> DELETE</button>
                      </div>
                     </div>
                      </div>
                  </Grid>) 
                   }
                 
               </Grid>
          
        </div>
    );
};

export default ManageProducts;