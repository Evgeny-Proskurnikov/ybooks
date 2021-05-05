import React from 'react';
import Card from '../Card/Card';

interface ElementsProps {
  cards: any[],
  handleCardClick(card: object): void
}

const Elements: React.FC<ElementsProps> = ({ cards, handleCardClick }) => {
  return (
    <div className="elements">
      {cards.map(el => {
        return <Card card={el} key={el.cover} handleCardClick={handleCardClick} />
      })}
    </div>
  )
}

export default Elements;
