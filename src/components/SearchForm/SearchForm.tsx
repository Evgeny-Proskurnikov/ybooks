import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCardsRequest } from '../../redux/actions';
import { IState } from '../../utils/interfaces';

interface FormValues {
  search: string
}

const SearchForm: React.FC = () => {
  const { loading } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm<FormValues>();
  
  const currentValue: string = watch('search');

  React.useEffect(() => {
    let timerId: number;
    if (!currentValue) {
      clearTimeout(timerId!);
      return;
    }
    if (currentValue.length > 3) {
      timerId = setTimeout(onSubmit, 1000);
    }

    return () => clearTimeout(timerId);
  }, [currentValue]); // eslint-disable-line

  const onSubmit = handleSubmit((data) => {
    dispatch(addCardsRequest(data.search));
  });
  
  return (
    <form className='form' name='search-form' onSubmit={onSubmit} noValidate>
      <input
        type="text"
        {...register("search", { required: true })}
        className='form__input'
        placeholder="Type a book or author name"
        autoComplete="off"
      />
      <button type="submit" className='form__button' disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchForm;
