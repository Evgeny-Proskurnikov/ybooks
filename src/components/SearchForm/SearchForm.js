import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ submitForm, formLoadingState }) {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

  const onSubmit = data => {
    submitForm(data);
  };

  return (
    <form className='form' name='search-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        {...register("search", { required: true })}
        className='form__input'
        placeholder="Введите название книги или автора"
        autoComplete="off"
      />
      <button type="submit" className='form__button' disabled={errors.search}>
        {formLoadingState ? 'Загрузка...' : 'Искать'}
      </button>
    </form>
  )
}

export default SearchForm;
