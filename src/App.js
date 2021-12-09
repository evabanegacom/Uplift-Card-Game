import React, { useState } from 'react';
import './App.css';
import { DealHand, Board } from './components';
import banner from './Assets/Banner.svg';

const App = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'K', 'J', '4', '9', '6', '1', '5', '7', 'ACE', 'Q'];
  const [count, setCount] = useState(52);
  const [cardContentOne, setContentOne] = useState('A')
  const [cardContentTwo, setContentTwo] = useState('7')
  const [cardContentThree, setContentThree] = useState('k')
  const [cardContentFour, setContentFour] = useState('9')
  const [cardContentFive, setContentFive] = useState('4')
  const [aceCount, setAceCount] = useState(4)

  const WinningElement = () => (
    <div className='Winner__card-details'>
      <img src={banner} alt='banner' />
    </div>
  )

  const LoserElement = () => (
    <div className='Loser__deal'>
        <p>Game Over.</p>
        <p>Better luck next time</p>
      </div>
  )
  
  const winnerCheck = () => {
    if(cardContentTwo === 'ACE' && count === 0) {
      return <WinningElement />
    }else if(cardContentTwo === 'ACE' && count === 0){
      return <WinningElement />
    }else if(cardContentThree === 'ACE' && count === 0){
      return <WinningElement />
    }else if(cardContentFour === 'ACE' && count === 0){
      return <WinningElement />
    }else if(cardContentFive === 'ACE' && count === 0){
      return <WinningElement />
    }
    return null
  }

  const acesCounts = () => {
    if(cardContentOne === 'ACE' && aceCount > 0) {
      setAceCount(aceCount - 1 )
    }else if(cardContentTwo === 'ACE' && aceCount > 0){
      setAceCount(aceCount - 1 )
    }else if(cardContentThree === 'ACE' && aceCount > 0){
      setAceCount(aceCount - 1 )
    }else if(cardContentFour === 'ACE' && aceCount > 0){
      setAceCount(aceCount - 1 )
    }else if(cardContentFive === 'ACE' && aceCount > 0){
      setAceCount(aceCount - 1 )
    }
    return aceCount
  }

  const loserCheck = () => {
      if(cardContentTwo !== 'ACE' && count === 0) {
        return <LoserElement />
      }else if(cardContentTwo !== 'ACE' && count === 0){
        return <LoserElement />
      }else if(cardContentThree !== 'ACE' && count === 0){
        return <LoserElement />
      }else if(cardContentFour !== 'ACE' && count === 0){
        return <LoserElement />
      }else if(cardContentFive !== 'ACE' && count === 0){
        return <LoserElement />
      }
      return null
  }

  const cardChange = () => {
    setTimeout(()=>{
      setContentOne(arr[Math.floor(Math.random() * arr.length)]);
      setContentTwo(arr[Math.floor(Math.random() * arr.length)]);
      setContentThree(arr[Math.floor(Math.random() * arr.length)]);
      setContentFour(arr[Math.floor(Math.random() * arr.length)]);
      setContentFive(arr[Math.floor(Math.random() * arr.length)]);
    }, 700)
acesCounts()
    if (count > 0) {
      setCount(count - 5)
    }

    if (count === 2) {
      setCount(count - 2)
    }

    if (count === 0) {
      console.log(count)
      return
    }
  }

const reset = () => {
  setAceCount(4)
  setCount(52)
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
       aceCount={aceCount}
       reset={reset}
       winnerCheck={winnerCheck}
       loserCheck={loserCheck}
       />
      <Board count={count} reset={reset} aceCount={aceCount} cardChange={cardChange}
      card1={cardContentOne}
      card2={cardContentTwo}
      card3={cardContentThree}
      card4={cardContentFour}
      card5={cardContentFive}
      winnerCheck={winnerCheck}
      loserCheck={loserCheck} 
      />
      {/* <Winner />
      <Loser /> */}
    </div>
  );
}

export default App;
