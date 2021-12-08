import React, { useState } from 'react';
import './App.css';
import { Winner, DealHand, Loser, Board } from './components';

const App = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'K', 'J', '4', '9', '6', '1', '5', '7', 'ACE', 'Q'];
  const [count, setCount] = useState(52);
  const [cardContentOne, setContentOne] = useState('A')
  const [cardContentTwo, setContentTwo] = useState('7')
  const [cardContentThree, setContentThree] = useState('k')
  const [cardContentFour, setContentFour] = useState('9')
  const [cardContentFive, setContentFive] = useState('4')

  const cardChange = () => {
    setTimeout(()=>{
      setContentOne(arr[Math.floor(Math.random() * arr.length)]);
      setContentTwo(arr[Math.floor(Math.random() * arr.length)]);
      setContentThree(arr[Math.floor(Math.random() * arr.length)]);
      setContentFour(arr[Math.floor(Math.random() * arr.length)]);
      setContentFive(arr[Math.floor(Math.random() * arr.length)]);
    }, 700)

    console.log(document.querySelector('.card1 p'))
    if (count > 0) {
      setCount(count - 5)
    }

    if (count === 2) {
      setCount(count - 2)
    }

    if (count == 0) {
      console.log(count)
      return
    }
  }
  return (
    <div className="App">
      <DealHand 
      count={count}
       cardChange={cardChange}
       card1={cardContentOne}
       card2={cardContentTwo}
       card3={cardContentThree}
       card4={cardContentFour}
       card5={cardContentFive}
       />
      <Board count={count} cardChange={cardChange}
      card1={cardContentOne}
      card2={cardContentTwo}
      card3={cardContentThree}
      card4={cardContentFour}
      card5={cardContentFive} 
      />
      {/* <Winner />
      <Loser /> */}
    </div>
  );
}

export default App;
