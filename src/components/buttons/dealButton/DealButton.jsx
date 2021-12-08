import React from 'react';
import './dealButton.css';

const DealButton = ({ cardChange }) => {
    return (
        <div className='DealButton__deal flex justify-center items-center'>
            <button onClick={cardChange} className='DealButton__deal-text'>DEAL</button>
        </div>
    )
}

export default DealButton;
