import React,{ useEffect, useState} from 'react';
import { CircularProgress, Container,Grid } from '@mui/material';
import HomeService from '../Home/HomeServices/HomeService/HomeService';


const Explore = () => {
  const [homeServices,setHomeServices]=useState([])

  useEffect(()=>{
      fetch(`https://cryptic-falls-79729.herokuapp.com/homeService`)
      .then(res=>res.json())
      .then(data=>setHomeServices(data))
  },[])

    return (
        <div className='home-services'>
            <Container>
      {  homeServices.length===0 ?<CircularProgress color="secondary" />
      :    <div className="home-service-all-content">
               <h1 style={{color:"#fff"}}>All Products</h1>
               <Grid container spacing={5}>
           
                  {
                      homeServices.map((x)=><HomeService card={x}/>)
                  }
               </Grid>

               </div>}
            </Container>
        </div>
    );
};

export default Explore;
