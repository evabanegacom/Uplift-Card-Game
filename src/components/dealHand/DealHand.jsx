import React, { useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import Card3 from '../cards/card3/Card3';
import Card4 from '../cards/card4/Card4';
import Card5 from '../cards/card5/Card5';
import './dealHand.css';
import DealButton from '../buttons/dealButton/DealButton';
import ResetButton from '../buttons/resetButton/resetButton';

const DealHand = ({ cardChange, count }) => {
  return (
    <div className='DealHand flex flex-col'>
      <div className='DealHand__card-header'>
        <div className='DealHand__card-number'>{count}</div>
        <div className='DealHand__card-details'>cards Left</div>
      </div>
      <div className='flex flex-wrap justify-center DealHand__cards'>
        <LightSpeed>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        </LightSpeed>
      </div>
      <DealButton cardChange={cardChange}/>
      <ResetButton />
    </div>
  )
}

export default DealHand;
