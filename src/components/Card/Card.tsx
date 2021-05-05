import React from "react";
import { ICard } from "../../utils/interfaces";

interface CardProps {
  card: ICard,
  handleCardClick(card: ICard): void
}

const Card: React.FC<CardProps> = ({ card, handleCardClick }) => {
  const handleClick = () => {
    handleCardClick(card)
  }

  return (
    <div className="card" onClick={handleClick}>
      <div>
        <img src={card.cover!} alt={card.title!} className="card__image"/>
        <div className="card__container">
          <p className="card__date">{card.year}</p>
          <h2 className="card__title">{card.title}</h2>
        </div>
      </div>
      <p className="card__author">{card.author}</p>
    </div>
  );
}

export default Card;
