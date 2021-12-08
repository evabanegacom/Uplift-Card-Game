import React from 'react';
import DealButton from '../../buttons/dealButton/DealButton';
import ResetButton from '../../buttons/resetButton/resetButton';
import Flash from 'react-reveal/Flash';
import Spin from 'react-reveal/Spin';

import Card1 from '../../cards/card1/Card1';
import Card2 from '../../cards/card2/Card2';
import Card3 from '../../cards/card3/Card3';
import Card4 from '../../cards/card4/Card4';
import Card5 from '../../cards/card5/Card5';
import './board.css';

const Board = ({ cardChange, count, card1, card2, card3, card4, card5 }) => {
  return (
    <div className='Board flex flex-col'>
      <div className='Board__card-header'>
        <div className='Board__card-number'>{count}</div>
        <div className='Board__card-details'>cards Left</div>
      </div>
      <div className='Board__cards flex justify-center'>
        <Flash spy={count}>
        <Card1 card1={card1}/>
        <Card2 card2={card2} />
        <Card3 card3={card3} />
        <Card4 card4={card4} />
        <Card5 card5={card5} />
        </Flash>
      </div>
      <DealButton count={count} cardChange={cardChange}/>
      <ResetButton />
    </div>
  )
}

export default Board;
