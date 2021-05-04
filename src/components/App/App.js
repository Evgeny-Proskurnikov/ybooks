import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

function App() {
  const [modalState, setModalState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  // открытие модалки изображения карточки
  function handleCardClick(card) {
    setSelectedCard(card);
    setModalState(true);
  }

  // закрытие всех модальных окон
  function closeAllPopups() {
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
