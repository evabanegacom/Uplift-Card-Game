import React from 'react';
import './card3.css';
import Fade from 'react-reveal/Fade';

const Card3 = ({ card3, changeStar }) => {
  const styles = {
    color:  changeStar.props.children.props.fill
  }
  return (
    <>
      <Fade top cascade>
        <div className='ThirdCard__cards-card1'>
          <div className='ThirdCard__card-text card3' style={styles}><p>{card3}</p>
            <div className='svg'>
              { changeStar }
            </div>
          </div>
          <div className='ThirdCard__bigSVG flex justify-center'>
          { changeStar }
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Card3
