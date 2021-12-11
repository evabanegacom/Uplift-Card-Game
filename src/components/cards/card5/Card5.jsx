import React from 'react';
import './card5.css';
import Fade from 'react-reveal/Fade';

const Card5 = ({ card5, changeLeaf }) => {
    const styles = {
        color:  changeLeaf.props.children.props.fill
      }
    return (
        <>
        <Fade top cascade>
            <div className='FifthCard__cards-card1'>
                <div className='FifthCard__card-text card5' style={styles}><p>{card5}</p>
                    <div className='svg'>
                        { changeLeaf }
                    </div>
                </div>
                <div className='FifthCard__bigSVG flex justify-center'>
                    { changeLeaf}
                </div>
            </div>
            </Fade>
        </>
    )
}

export default Card5
