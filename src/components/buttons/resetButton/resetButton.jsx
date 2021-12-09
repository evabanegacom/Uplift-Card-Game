import React from 'react';
import './resetButton.css';

const displayButtons = (cardCount, reset, aceCount) => {
  if(cardCount > 0 && aceCount > 0) {
    return <button onClick={reset} className='ResetButton__button'>Reset</button>
  } else{
    return <button onClick={reset} className='Loser__button'>Play Again</button>
  }
}

const ResetButton = ({ reset, count, aceCount }) => {
    return (
        <div className='flex justify-center items-center'>
            {displayButtons(count, reset, aceCount)}
        </div>
    )
}

export default ResetButton;
