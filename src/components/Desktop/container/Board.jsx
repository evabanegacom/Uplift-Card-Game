import React, { useState } from 'react';
import DealButton from '../../buttons/dealButton/DealButton';
import ResetButton from '../../buttons/resetButton/resetButton';
import Flash from 'react-reveal/Flash';
import Card1 from '../../cards/card1/Card1';
import Card2 from '../../cards/card2/Card2';
import Card3 from '../../cards/card3/Card3';
import Card4 from '../../cards/card4/Card4';
import Card5 from '../../cards/card5/Card5';
import './board.css';

const Board = ({ changeLeaf, loserCheck, winnerCheck, aceCount, cardChange, reset, count, card1, card2, card3, card4, card5 }) => {
  return (
    <div className='Board flex flex-col'>
      <div className='Board__card-header'>
        <div className='Board__card-number'>{count}</div>
        <div className='Board__card-details'>cards Left</div>
      </div>
      <div className='text-dark text-center'>{aceCount} Aces Left</div>
      <div className='flex justify-center'>{winnerCheck()}</div>
      <div className='Board__cards flex justify-center'>
        { count >=5 ?<Flash spy={count}>
          <Card1 changeLeaf={changeLeaf} card1={card1} />
          <Card2 card2={card2} />
          <Card3 card3={card3} />
          <Card4 card4={card4} />
          <Card5 card5={card5} />
        </Flash>
        :
        <Flash spy={count}>
          <Card1 changeLeaf={changeLeaf} card1={card1} />
          <Card2 card2={card2} />
          </Flash>
          ||
          <Flash spy={count}>
          <Card3 card3={card3} />
          <Card4 card4={card4} />
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
      <div className='Board__button-div'><ResetButton aceCount={aceCount} count={count} reset={reset} /></div>
    </div>
  )
}

export default Board;
