import React, { useState } from 'react';
import './card1.css';
import Fade from 'react-reveal/Fade';

const Card1 = ({ card1, changeLeaf}) => {
  
  return (
    <>
    <Fade bottom cascade>
      <div className='DealHand__cards-card1'>
        <div className='DealHand__card-text card1'><p>{card1}</p>
          <div className='svg'>
            { changeLeaf}
          </div>
        </div>
        <div className='DealHand__bigSVG flex justify-center'>
          {changeLeaf}
        </div>
      </div>
      </Fade>
    </>
  )
}

export default Card1
