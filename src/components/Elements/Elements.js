import React from 'react';
import Card from '../Card/Card';

function Elements({ cards }) {
  const cardsCounter = 10;
  return (
    <div className="elements">
      {cards.map((el, index) => {
        if (index <= cardsCounter) {
          return <Card card={el} key={el.cover} />
        }
        return null;
      })}
    </div>
  )
}

export default Elements;
