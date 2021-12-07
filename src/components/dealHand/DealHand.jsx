import React, { useState } from 'react';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import Card3 from '../cards/card3/Card3';
import Card4 from '../cards/card4/Card4';
import Card5 from '../cards/card5/Card5';
import './dealHand.css';

const DealHand = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'K', 'J', '4', '9', '6', '1', '5', '7', 'ACE', 'Q'];
  const [count, setCount] = useState(52);

  const cardChange = () => {
    document.querySelector('.card1 p').innerHTML =
      arr[Math.floor(Math.random() * arr.length)];

      document.querySelector('.card2 p').innerHTML =
      arr[Math.floor(Math.random() * arr.length)];

      document.querySelector('.card3 p').innerHTML =
      arr[Math.floor(Math.random() * arr.length)];

      document.querySelector('.card4 p').innerHTML =
      arr[Math.floor(Math.random() * arr.length)];

      document.querySelector('.card5 p').innerHTML =
      arr[Math.floor(Math.random() * arr.length)];
        if(count > 0){
           setCount(count-5)
        }

        if(count ===2){
          setCount(count-2)
        }

        if(count == 0){
          console.log(count)
          return
        }
  }
  return (
    <div className='DealHand flex flex-col'>
      <div className='DealHand__card-header'>
        <div className='DealHand__card-number'>{count}</div>
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
        <button onClick={cardChange} className='DealHand__deal-text'>DEAL</button>
      </div>
      <button className='DealHand__button'>Reset</button>
    </div>
  )
}

export default DealHand;
