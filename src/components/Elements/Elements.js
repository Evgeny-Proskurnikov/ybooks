import React from 'react';
import Card from '../Card/Card';

function Elements({ cards, handleCardClick }) {
  return (
    <div className="elements">
      {cards.map(el => {
        return <Card card={el} key={el.cover} handleCardClick={handleCardClick} />
      })}
    </div>
  )
}

export default Elements;
