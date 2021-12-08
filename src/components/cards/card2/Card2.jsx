import React from 'react';
import './card2.css';
import Fade from 'react-reveal/Fade';

const Card2 = ({ card2 }) => {
    return (
        <>
        <Fade left cascade>
            <div className='SecondCard__cards-card1'>
                <div className='SecondCard__card-text text-primary card2'><p>{ card2}</p>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.509277 11.6931C3.71749 9.70985 5.96223 8.08043 7.24348 6.80483C8.52472 5.52924 10.0733 3.38207 11.8893 0.363339C13.8897 3.41639 15.5696 5.61965 16.9291 6.97315C18.2886 8.32664 20.402 9.89997 23.2693 11.6931C20.3224 13.784 18.1509 15.5244 16.7548 16.9143C15.3588 18.3042 13.7369 20.3404 11.8893 23.0229C10.2071 20.3628 8.60042 18.2705 7.06918 16.746C5.53795 15.2215 3.35131 13.5372 0.509277 11.6931Z" fill="#F64242" />
                        </svg>

                    </div>
                </div>
                <div className='SecondCard__bigSVG flex justify-center'>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.212402 27.3409C7.69824 22.7133 12.9359 18.9113 15.9255 15.9349C18.9151 12.9586 22.5285 7.94851 26.7657 0.904795C31.4333 8.02857 35.3532 13.1695 38.5254 16.3277C41.6975 19.4858 46.6287 23.1569 53.3191 27.3409C46.4429 32.2197 41.3762 36.2806 38.1187 39.5237C34.8612 42.7668 31.0769 47.518 26.7657 53.7771C22.8407 47.5701 19.0917 42.6881 15.5188 39.131C11.946 35.5739 6.84382 31.6439 0.212402 27.3409Z" fill="#F64242" />
                    </svg>

                </div>
            </div>
            </Fade>
        </>
    )
}

export default Card2
