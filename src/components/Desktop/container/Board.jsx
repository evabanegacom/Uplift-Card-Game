import React from 'react';
import DealButton from '../../buttons/dealButton/DealButton';
import ResetButton from '../../buttons/resetButton/resetButton';
import Card1 from '../../cards/card1/Card1';
import Card2 from '../../cards/card2/Card2';
import Card3 from '../../cards/card3/Card3';
import Card4 from '../../cards/card4/Card4';
import Card5 from '../../cards/card5/Card5';
import './board.css';

const Board = ({ cardChange, count }) => {
  return (
    <div className='Board flex flex-col'>
      <div className='Board__card-header'>
        <div className='Board__card-number'>{count}</div>
        <div className='Board__card-details'>cards Left</div>
      </div>
      <div className='Board__cards flex justify-center'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
      <DealButton cardChange={cardChange}/>
      <ResetButton />
    </div>
  )
}

export default Board;
