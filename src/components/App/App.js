import React from 'react';
import { BOOKS_AMOUNT } from '../../utils/constants';
import booksRequest from '../../utils/OpenLibApi';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

function App() {
  const [cards, setCards] = React.useState([]);
  const [spinnerState, setSpinnerState] = React.useState(false);
  const [formLoadingState, setFormLoadingState] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  async function getCoverCallback(el) {
    try {
      const isbn = el.isbn ? el.isbn[0] : null;
      const title = el.title ? el.title : null;
      const author = el.author_name ? el.author_name[0] : null;
      const year = el.first_publish_year ? el.first_publish_year : null;
      const publisher = el.publisher ? el.publisher[0] : null;
      const img = await booksRequest.getCover(isbn);
      const url = URL.createObjectURL(img);
      return {title, author, year, publisher, isbn, cover: url}
    } catch(err) {
      console.log(err);
    }
  }

  async function onSearch(data) {
    setCards([]);
    setSpinnerState(true);
    setFormLoadingState(true);
    try {
      const res = await booksRequest.getBooks(data);
      if (!res.docs.length) {
        setSpinnerState(false);
        setFormLoadingState(false);
        return alert('Books are not found');
      }
      const resCards = res.docs.slice(0, BOOKS_AMOUNT);
      const promises = resCards.map(getCoverCallback);
      const newCards = await Promise.all(promises);
      setCards(newCards);
      setSpinnerState(false);
      setFormLoadingState(false);
    } catch(err) {
      console.log(err);
      setSpinnerState(false);
      setFormLoadingState(false);
    }
  }

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
      <Main
        onSearch={onSearch}
        cards={cards}
        setSpinnerState={setSpinnerState}
        spinnerState={spinnerState}
        formLoadingState={formLoadingState}
        handleCardClick={handleCardClick}
      />
      <Modal card={selectedCard} modalState={modalState} onClose={closeAllPopups} /> 
      <Footer />
    </div>
  );
}

export default App;
