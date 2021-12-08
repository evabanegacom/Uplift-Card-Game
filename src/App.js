import React, { useState } from 'react';
import './App.css';
import { Winner, DealHand, Loser, Board } from './components';

const App = () => {
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
      <DealHand count={count} cardChange={cardChange} />
      <Board count={count} cardChange={cardChange} />
      {/* <Winner />
      <Loser /> */}
    </div>
  );
}

export default App;
