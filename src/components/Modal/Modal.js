import React from 'react';

function Modal({ card, modalState, onClose }) {
  const modalClass = modalState ? 'modal_opened' : '';

  function handleClose(evt) {
    if (evt.target.classList.contains('modal')) {
      onClose();
    }
  }

  return (
    <div className={`modal ${modalClass}`} onClick={handleClose}>
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={onClose}></button>
        <img src={card.cover ? card.cover : null} alt={card.name ? card.name : null} className="modal__image"/>
        <h3 className="modal__title">{card.title ? card.title : null}</h3>
        <p className="modal__text">{card ? card.author : null}</p>
        <p className="modal__text">{card ? `${card.year}, ${card.publisher}` : null}</p>
        <p className="modal__text">{card ? `ISBN: ${card.isbn}` : null}</p>
      </div>
    </div>
  );
}

export default Modal;
