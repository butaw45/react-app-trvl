import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import image1 from '../assets/images/img-1.jpg';
import vid1 from '../assets/videos/video-1.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <img src={image1} alt="" /> */}
            <video src={vid1} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
