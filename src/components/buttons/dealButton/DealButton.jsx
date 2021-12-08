import React, { useState } from 'react';
import './dealButton.css';

const DealButton = ({ cardChange, count }) => {
    return (
        <div className='DealButton__deal flex justify-center items-center'>
            <button disabled={count === 0 ? true : false} onClick={cardChange} className='DealButton__deal-text'>DEAL</button>
        </div>
    )
}

export default DealButton;
