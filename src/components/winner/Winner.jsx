import React from 'react';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import './winner.css';
import banner from './Assets/Banner.svg';

const Winner = () => {
  return (
    <div className='Winner flex flex-col'>
      <div className='Winner__card-header flex justify-center items-center'>
        <div className='Winner__card-number'>0</div>
      </div>
      <div className='Winner__card-details'>
        <img src={banner} alt='banner' />
      </div>
      <div className='flex flex-wrap justify-center Winner__cards'>
        <Card1 />
        <Card2 />
      </div>
      <button className='Winner__button'>Play Again</button>
    </div>
  )
}

export default Winner;
