import React,{ useEffect, useState} from 'react';
import { CircularProgress, Container,Grid } from '@mui/material';
import HomeService from './HomeService/HomeService';


const HomeServices = () => {
  const [homeServices,setHomeServices]=useState([])

  useEffect(()=>{
      fetch(`https://cryptic-falls-79729.herokuapp.com/homeService`)
      .then(res=>res.json())
      .then(data=>setHomeServices(data.slice(0,6)))
  },[])

    return (
        <div className='home-services'>
            <Container>

            <div className="ourworks-title">
           <h3>SALABALE PRODUCTS</h3>
            <h1>OUR BEST PRODUCTS</h1>
           </div>


      {  homeServices.length===0 ?<CircularProgress color="secondary" />
      :    <div className="home-service-all-content">
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

export default HomeServices;