import React, { useState } from 'react';
import Flash from 'react-reveal/Flash';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import Card3 from '../cards/card3/Card3';
import Card4 from '../cards/card4/Card4';
import Card5 from '../cards/card5/Card5';
import './dealHand.css';
import banner from './Assets/Banner.svg'
import DealButton from '../buttons/dealButton/DealButton';
import ResetButton from '../buttons/resetButton/resetButton';

const DealHand = ({ loserCheck, winnerCheck, reset, aceCount, cardChange, count, card1, card2, card3, card4, card5 }) => {
  return (
    <div className='DealHand flex flex-col'>
      <div className='DealHand__card-header'>
        <div className='DealHand__card-number'>{count}</div>
        <div className='DealHand__card-details'>cards Left</div>
      </div>
      <div className='text-dark text-center'>{aceCount} Aces Left</div>
      <div>{winnerCheck()}</div>
      <div className='flex flex-wrap justify-center DealHand__cards'>
        {count >= 5 ? <Flash spy={count}>
          <Card1 card1={card1} />
          <Card2 card2={card2} />
          <Card3 card3={card3} />
          <Card4 card4={card4} />
          <Card5 card5={card5} />
        </Flash>
          :
          <Flash spy={count}>
            <Card1 card1={card1} />
            <Card2 card2={card2} />
          </Flash>
          ||
          <Flash spy={count}>
            <Card3 card3={card3} />
            <Card4 card3={card4} />
          </Flash>
          ||
          <Flash spy={count}>
            <Card4 card4={card4} />
            <Card3 card5={card5} />
          </Flash>
        }
      </div>
      {aceCount === 0 || count === 0 ? (<div className='Loser__deal'>
        <p>Game Over.</p>
      </div>) :
        <DealButton count={count} cardChange={cardChange} />
      }

      <div>{loserCheck()}</div>
      <ResetButton aceCount={aceCount} count={count} reset={reset} />
    </div>
  )
}

export default DealHand;
