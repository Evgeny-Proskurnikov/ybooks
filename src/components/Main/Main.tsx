import React from 'react';
import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import Spinner from '../Spinner/Spinner';
import Elements from '../Elements/Elements';
import { ICard, IState } from '../../utils/interfaces';

interface MainProps {
  handleCardClick(card: ICard): void
}

const Main: React.FC<MainProps> = ({ handleCardClick }) => {
  const { cards, loading } = useSelector((state: IState) => state);
  
  const isCardsFound: boolean = cards && cards.length ? true : false;

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

export default Main;
