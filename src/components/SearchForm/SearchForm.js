import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearch, formLoadingState }) {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    onSearch(data);
  };

  return (
    <form className='form' name='search-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        {...register("search", { 
          required: true,
          // pattern: /[A-Za-z\s]/
        })}
        className='form__input'
        placeholder="Type a name of book or author"
        autoComplete="off"
      />
      <button type="submit" className='form__button' disabled={errors.search}>
        {formLoadingState ? 'Loading...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchForm;
