import React from 'react';
import './card4.css';
import Fade from 'react-reveal/Fade';

const Card4 = ({ card4, changeLove }) => {
    const styles = {
        color:  changeLove.props.children.props.fill
      }
    return (
        <>
        <Fade right cascade>
            <div className='FourthCard__cards-card1'>
                <div className='FourthCard__card-text card4' style={styles}><p>{card4}</p>
                    <div className='svg'>
                    { changeLove }
                    </div>
                </div>
                <div className='FourthCard__bigSVG flex justify-center'>
                { changeLove }
                </div>
            </div>
            </Fade>
        </>
    )
}

export default Card4
