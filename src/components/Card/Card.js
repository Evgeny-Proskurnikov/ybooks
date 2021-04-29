import React from "react";

function Card({ card }) {
  // function handleClick() {

  // }

  return (
    <div className="card">
      <div>
        <img src={card ? card.cover : ''} alt={card ? card.title : ''} className="card__image"/>
        <div className="card__container">
          <p className="card__date">{card ? card.year : ' '}</p>
          <h2 className="card__title">{card ? card.title : ''}</h2>
        </div>
      </div>
      <p className="card__author">{card ? card.author : ''}</p>
    </div>
  );
}

export default Card;
