import React from 'react';
import './mainHome.css';
import { Slide } from '@mui/material';
import Slider from '../components/Slider/slider'
import OnTheTable from '../components/onTheTable/onTheTable';
import ReactPlayer from 'react-player'
const mainHome = () => {
  return (
    <div className='mainHome'>
    <Slider/>
    <OnTheTable/>
    <ReactPlayer className="video-player" url='https://youtu.be/R6Meet7Fm2Y' width="1280px" height="720px" light="true" controls="true" />
    </div>
  )
}

export default mainHome