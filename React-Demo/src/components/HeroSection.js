import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/cairo.mp4' autoPlay loop muted />
      <h1>Cairo Pulse</h1>
      <p>A website that helps you in the big city</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED <i class="fas fa-arrow-alt-circle-right"></i>
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;