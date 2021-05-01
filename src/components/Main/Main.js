import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Spinner from '../Spinner/Spinner';
import Elements from '../Elements/Elements';

function Main({ onSearch, cards, spinnerState, formLoadingState, setSpinnerState, handleCardClick }) {
  const isCardsFound = cards.length > 0;

  return (
    <main className='main'>
      <section className='search'>
        <SearchForm
          onSearch={onSearch}
          formLoadingState={formLoadingState}
          setSpinnerState={setSpinnerState}
        />
      </section>
      <section className='grid-cards'>
        {spinnerState && <Spinner />}
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

export default Main;
