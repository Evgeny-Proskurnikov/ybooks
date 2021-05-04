import { takeLatest, put, call } from 'redux-saga/effects';
import { ADD_CARDS_REQUESTED, BOOKS_AMOUNT } from '../../utils/constants';
import booksRequest from '../../utils/OpenLibApi';
import { addCardsError, addCardsSuccess } from '../actions';

export function* fetchCardsWatcher() {
  yield takeLatest(ADD_CARDS_REQUESTED, fetchCardsWorker);
}

function* fetchCardsWorker(action) {
  try {
    const payload = yield call(onSearch, action.payload);
    yield put(addCardsSuccess(payload));
  } catch (err) {
    yield put(addCardsError(err));
    alert(err);
  }
}

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
  try {
    const res = await booksRequest.getBooks(data);
    if (!res.docs.length) {
      alert('Ooops! No books found...');
      return [];
    }
    const resCards = res.docs.slice(0, BOOKS_AMOUNT);
    const promises = resCards.map(getCoverCallback);
    const newCards = await Promise.all(promises);
    return newCards;
  } catch(err) {
    console.log(err);
  }
}
