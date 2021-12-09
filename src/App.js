import React, { useState } from 'react';
import './App.css';
import { DealHand, Board } from './components';
import banner from './Assets/Banner.svg';

const App = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'K', 'J', '4', '9', '6', '1', '10', '8', 'Q', 'ACE'];
  const leaf = <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2291 0.840942C31.4653 4.73094 36.526 8.09921 39.4112 10.9457C44.2826 15.7518 48.3698 21.6123 48.3698 28.7267C48.3698 35.3251 45.8574 39.3539 39.4112 40.134C35.2862 40.6332 30.4639 38.1747 24.9443 32.7584C24.9425 32.9544 24.9417 33.1529 24.9417 33.3533C24.9417 37.21 25.2396 42.0417 25.8355 47.8483H22.3245C22.8883 41.1214 23.1703 36.2897 23.1703 33.3533L23.1698 33.2761C18.4999 38.331 14.0692 40.617 9.87753 40.134C3.10777 39.3539 0.088501 35.5286 0.088501 28.7267C0.088501 21.5202 4.85981 15.7837 9.87753 10.9457C12.7688 8.15811 17.5526 4.78984 24.2291 0.840942Z" fill="black" />
</svg>
const flower = <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2292 0.306885C30.8954 0.306885 36.2995 5.40393 36.2995 11.6915C36.2995 13.2765 35.956 14.7859 35.3355 16.1571C35.6533 16.1315 35.9749 16.1188 36.2995 16.1188C42.9657 16.1188 48.3698 21.499 48.3698 28.1358C48.3698 34.7727 42.9657 40.1529 36.2995 40.1529C31.2879 40.1529 26.9897 37.1121 25.1647 32.7826L25.1647 32.6385C25.1647 36.8255 25.4882 42.071 26.135 48.3751H22.3233C22.9187 41.2715 23.2246 36.1146 23.2408 32.9044C21.3875 37.1692 17.1232 40.1529 12.1589 40.1529C5.49262 40.1529 0.088562 34.7727 0.088562 28.1358C0.088562 21.499 5.49262 16.1188 12.1589 16.1188C12.4834 16.1188 12.805 16.1315 13.1231 16.1566C12.5023 14.786 12.1589 13.2765 12.1589 11.6915C12.1589 5.40393 17.5629 0.306885 24.2292 0.306885Z" fill="black" />
</svg>
  const leafFlower = [leaf, flower]
  const [count, setCount] = useState(52);
  const [cardContentOne, setContentOne] = useState('A')
  const [cardContentTwo, setContentTwo] = useState('7')
  const [cardContentThree, setContentThree] = useState('k')
  const [cardContentFour, setContentFour] = useState('9')
  const [cardContentFive, setContentFive] = useState('4')
  const [aceCount, setAceCount] = useState(4)
  const [changeLeaf, setChangeLeaf] = useState(leaf)

  const WinningElement = () => (
    <div className='Winner__card-details'>
      <img src={banner} alt='banner' />
    </div>
  )

  const LoserElement = () => (
    <div className='Loser__deal'>
        <p>You Lose..</p>
        <p>Better luck next time</p>
      </div>
  )

  const winnerCheck = () => {
    if(count === 0) {
      if(cardContentOne !== 'ACE' && cardContentTwo !== 'ACE' && cardContentThree !== 'ACE' && cardContentFour !== 'ACE' && cardContentFive !== 'ACE') {
        return null
    }else {
      return <WinningElement />
    }
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
    if(count === 0) {
      if(cardContentOne !== 'ACE' && cardContentTwo !== 'ACE' && cardContentThree !== 'ACE' && cardContentFour !== 'ACE' && cardContentFive !== 'ACE') {
        return <LoserElement />
    }else {
      return null
    }
  }
  return null
}

const counters = () => {
  setTimeout(() => {
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
}, 1000)
  return
}


  const cardChange = async () => {
    counters()
    setTimeout(()=>{
      setContentOne(arr[Math.floor(Math.random() * arr.length)]);
      setContentTwo(arr[Math.floor(Math.random() * arr.length)]);
      setContentThree(arr[Math.floor(Math.random() * arr.length)]);
      setContentFour(arr[Math.floor(Math.random() * arr.length)]);
      setContentFive(arr[Math.floor(Math.random() * arr.length)]);
      setChangeLeaf(leafFlower[Math.floor(Math.random() * leafFlower.length)]);
    }, 700)

acesCounts()
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
       changeLeaf={changeLeaf} 
       />
      <Board count={count} reset={reset} aceCount={aceCount} cardChange={cardChange}
      card1={cardContentOne}
      card2={cardContentTwo}
      card3={cardContentThree}
      card4={cardContentFour}
      card5={cardContentFive}
      winnerCheck={winnerCheck}
      loserCheck={loserCheck}
      changeLeaf={changeLeaf} 
      />
    </div>
  );
}

export default App;
