import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addCardsRequest } from '../../redux/actions';

function SearchForm({ searchCards, loading }) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({mode: 'onChange'});
  
  const currentValue = watch('search');

  React.useEffect(() => {
    let timerId;
    if (!currentValue) {
      clearTimeout(timerId);
      return;
    }
    if (currentValue.length > 3) {
      timerId = setTimeout(handleSubmit(onSubmit), 1000);
    }

    return () => clearTimeout(timerId);
  }, [currentValue]); // eslint-disable-line

  const onSubmit = data => {
    searchCards(data.search);
  };
  
  return (
    <form className='form' name='search-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        {...register("search", { required: true })}
        className='form__input'
        placeholder="Type a book or author name"
        autoComplete="off"
      />
      <button type="submit" className='form__button' disabled={errors.search}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  searchCards: (data) => dispatch(addCardsRequest(data)),
});

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default (connect(mapStateToProps, mapDispatchToProps))(SearchForm);
