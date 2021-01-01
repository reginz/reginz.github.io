import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Button.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function HeroSection() {
  return (
    
    <div className='hero-container'>
      <img src='./images/aixbrainson.png' />
        
         <h1 >AIX</h1>
         <p>AI Lab for engineers and scientists.</p>
      
      <div className='hero-btns'>
      <AnchorLink href='#sign-up'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET RICK
        
        
        </AnchorLink>

        
        <AnchorLink href='#sign-up'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          JOIN COMMUNITY
        
        
        </AnchorLink>
        
      </div>
    </div>
    
  );
}

export default HeroSection;
