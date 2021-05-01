import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearch, formLoadingState, setSpinnerState }) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({mode: 'onChange'});
  
  const currentValue = watch('search');

  React.useEffect(() => {
    let timerId;
    if (!currentValue) {
      clearTimeout(timerId);
      setSpinnerState(false);
      return;
    }
    if (currentValue.length > 3) {
      timerId = setTimeout(handleSubmit(onSubmit), 1000);
    }

    return () => clearTimeout(timerId);
  }, [currentValue]); // eslint-disable-line

  const onSubmit = data => {
    onSearch(data.search);
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
        {formLoadingState ? 'Loading...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchForm;
