import React from 'react';
import './mainHome.css';
import { Slide } from '@mui/material';
import Slider from '../components/Slider/slider'
import OnTheTable from '../components/onTheTable/onTheTable';
const mainHome = () => {
  return (
    <div className='mainHome'>
    <Slider/>
    <OnTheTable/>
    </div>
  )
}

export default mainHome