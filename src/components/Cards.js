import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="card">
    <div className='cards'>
      <h1>What We Do</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/community.jpg'
              text='Needs Analysis with'
            />
            <CardItem
              src='/images/digital-lab.jpg'
              text='Entegrate your company'
            />
            <CardItem
              src='/images/join.jpg'
              text='Set Up R.I.C.K'            
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
