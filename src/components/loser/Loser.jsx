import React from 'react';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import './loser.css';

const Loser = () => {
  return (
    <div className='Loser flex flex-col'>
      <div className='Loser__card-header'>
        <div className='Loser__card-number'>0</div>
        <div className='Loser__card-details'>cards Left</div>
      </div>
      <div className='flex flex-wrap justify-center Loser__cards'>
        <Card1 />
        <Card2 />
      </div>
      <div className='Loser__deal'>
        <p>You Lose.</p>
        <p>Better luck next time</p>
      </div>
      <button className='Loser__button'>Play Again</button>
    </div>
  )
}

export default Loser;
