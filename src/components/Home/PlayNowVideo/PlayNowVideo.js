import { Container } from '@mui/material';
import React from 'react';
import './PlayNowVideo.css'
const PlayNowVideo = () => {
    return (
       
        <div className='play-now-video'>
             <div className='background-overlay'>
            <Container>
              <a href="https://www.youtube.com/watch?v=qqnwJLUa5Ac&list=RDqqnwJLUa5Ac&start_radio=1" target={'_blank'} rel={'noreferrer'}> <h2>play video</h2> </a>
            </Container>
        </div>
        </div>
    );
};

export default PlayNowVideo;