import React from 'react';
import { ICard } from '../../utils/interfaces';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

const App: React.FC = () => {
  const [modalState, setModalState] = React.useState<boolean>(false);
  const [selectedCard, setSelectedCard] = React.useState<ICard>(Object);

  // открытие модалки изображения карточки
  const handleCardClick = (card: ICard) => {
    setSelectedCard(card);
    setModalState(true);
  }

  // закрытие всех модальных окон
  const closeAllPopups = () => {
    setModalState(false);
  }

  return (
    <div className="page">
      <Header />
      <Main handleCardClick={handleCardClick} />
      <Modal card={selectedCard} modalState={modalState} onClose={closeAllPopups} /> 
      <Footer />
    </div>
  );
}

export default App;
