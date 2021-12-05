import React from 'react';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import Card3 from '../cards/card3/Card3';
import Card4 from '../cards/card4/Card4';
import Card5 from '../cards/card5/Card5';
import './dealHand.css';

const DealHand = () => {
  return (
    <div className='DealHand flex flex-col'>
      <div className='DealHand__card-header'>
        <div className='DealHand__card-number'>47</div>
        <div className='DealHand__card-details'>cards Left</div>
      </div>
      <div className='flex flex-wrap justify-center DealHand__cards'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
      <div className='DealHand__deal flex justify-center items-center'>
        <div className='DealHand__deal-text'>DEAL</div>
      </div>
      <button className='DealHand__button'>Reset</button>
    </div>
  )
}

export default DealHand;
