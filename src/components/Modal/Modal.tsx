import React from 'react';
import { ICard } from '../../utils/interfaces';

interface ModalProps {
  card: ICard,
  modalState: boolean,
  onClose(): void
}

const Modal: React.FC<ModalProps> = ({ card, modalState, onClose }) => {
  const modalClass: string = modalState ? 'modal_opened' : '';

  const handleClose = (evt: React.MouseEvent) => {
    if ((evt.target as Element).classList.contains('modal')) {
      onClose();
    }
  }

  return (
    <div className={`modal ${modalClass}`} onClick={handleClose}>
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={onClose}></button>
        <img src={card.cover!} alt={card.title!} className="modal__image"/>
        <h3 className="modal__title">{card.title}</h3>
        <p className="modal__text">{card.author}</p>
        <p className="modal__text">{`${card.year}, ${card.publisher}`}</p>
        <p className="modal__text">{`ISBN: ${card.isbn}`}</p>
      </div>
    </div>
  );
}

export default Modal;
