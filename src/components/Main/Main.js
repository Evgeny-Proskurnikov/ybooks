import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import Spinner from '../Spinner/Spinner';
import Elements from '../Elements/Elements';

function Main({ cards, loading, handleCardClick }) {
  const isCardsFound = cards && cards.length ? true : false;

  return (
    <main className='main'>
      <section className='search'>
        <SearchForm />
      </section>
      <section className='grid-cards'>
        {loading && <Spinner />}
        {isCardsFound ? 
          <Elements cards={cards} handleCardClick={handleCardClick} /> :
          <p className='grid-cards__title'>
            A reader lives a thousand lives before he dies...
          </p>
        }
      </section>
    </main>
  )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  loading: state.loading
});

export default (connect(mapStateToProps))(Main);
