import React from 'react';
import Footer from '../../Footer/Footer';
import Claint from '../Claint/Claint';
import Detailes from '../Detailes/Detailes';
import HomeServices from '../HomeServices/HomeServices';
import HomeTopBenner from '../HomeTopBenner/HomeTopBenner';
import OurSkills from '../OurSkills/OurSkills';
import OurWorks from '../OurWorks/OurWorks';
import PlayNowVideo from '../PlayNowVideo/PlayNowVideo';
import Reviews from '../Reviews/Reviews';
import Skillls from '../Skills/Skillls';
import Subscribe from '../Subscribe/Subscribe';
import NewsArticle from '../NewsArticle/NewsArticle'
import './Home.css'
const Home = () => {
    return (
        <div>
            
            <HomeTopBenner></HomeTopBenner>
            <OurWorks></OurWorks>
            <Skillls></Skillls>
            <Subscribe></Subscribe>
            <HomeServices></HomeServices>
            <OurSkills></OurSkills>
            <Detailes></Detailes>
            <PlayNowVideo></PlayNowVideo>
            <Reviews></Reviews>
            <Claint></Claint>
            <NewsArticle></NewsArticle>
            <Footer></Footer>
        </div>
    );
};

export default Home;