import React from 'react';
import { BOOKS_AMOUNT } from '../../utils/constants';
import booksRequest from '../../utils/OpenLibApi';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [cards, setCards] = React.useState([]);
  const [spinnerState, setSpinnerState] = React.useState(false);

  async function getCoverCallback(el) {
    let isbn;
    try {
      if (el.isbn) {
        isbn = el.isbn[0];
      }
      const img = await booksRequest.getCover(isbn);
      const url = URL.createObjectURL(img);
      return {
        title: el.title,
        author: el.author_name[0],
        year: el.first_publish_year,
        publisher: el.publisher[0],
        isbn: isbn,
        cover: url
      }
    } catch(err) {
      console.log(err);
    }
  }

  async function onSearch(data) {
    setCards([]);
    setSpinnerState(true);
    try {
      const res = await booksRequest.getBooks(data.search);
      if (res.docs.length === 0) {
        setSpinnerState(false);
        return alert('Books are not found');
      }
      const resCards = res.docs.slice(0, BOOKS_AMOUNT);
      const promises = resCards.map(getCoverCallback);
      const newCards = await Promise.all(promises);
      setCards(newCards);
      setSpinnerState(false);
    } catch(err) {
      console.log(err);
      setSpinnerState(false);
    }
  }

  return (
    <div className="page">
      <Header />
      <Main onSearch={onSearch} cards={cards} spinnerState={spinnerState} />
      <Footer />
    </div>
  );
}

export default App;
