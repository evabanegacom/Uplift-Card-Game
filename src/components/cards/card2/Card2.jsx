import React from 'react';
import './card2.css';
import Fade from 'react-reveal/Fade';

const Card2 = ({ card2, changeFlower }) => {
  const styles = {
    color:  changeFlower.props.children.props.fill
  }

  return (
    <>
      <Fade left cascade>
        <div className='SecondCard__cards-card1'>
          <div className='SecondCard__card-text' style={styles}><p>{card2}</p>
            <div className='svg'>
            { changeFlower }
            </div>
          </div>
          <div className='SecondCard__bigSVG flex justify-center'>
          { changeFlower }
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Card2
