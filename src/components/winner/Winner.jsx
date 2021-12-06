import React from 'react';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card2';
import './winner.css';

const Winner = () => {
  return (
    <div className='Winner flex flex-col'>
      <div className='Winner__card-header'>
        <div className='Winner__card-number'>0</div>
      </div>
      {/* <div className='Winner__card-details'>
          <svg className='Winner__leftSVG' width="84" height="53" viewBox="0 0 84 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.678955H83.3638V52.6303H0L23.5719 26.6546L0 0.678955Z" fill="#ED973E" />
          </svg>

          <div className='Winner__label'><p>WINNER!</p>
            <svg width="319" height="54" viewBox="0 0 319 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M318.076 1H0.326843V52.9514H318.076V1Z" fill="#ED973E" stroke="#A15A0D" stroke-width="0.5" />
          </svg>
          </div>

          <svg className='Winner__rightSVG' width="84" height="53" viewBox="0 0 84 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M84 52.6304H0.636185V0.679008H84L60.4281 26.6547L84 52.6304Z" fill="#ED973E" />
          </svg>


        </div> */}
        <div class="ribbon">
  CSS Animated Ribbon
  <i></i>
  <i></i>
  <i></i>
  <i></i>
</div>
      <div className='flex flex-wrap justify-center Winner__cards'>
        <Card1 />
        <Card2 />
      </div>
      <button className='Winner__button'>Play Again</button>
    </div>
  )
}

export default Winner;
