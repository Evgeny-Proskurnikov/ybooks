import { takeLatest, put, call } from 'redux-saga/effects';
import { ADD_CARDS_REQUESTED, BOOKS_AMOUNT } from '../../utils/constants';
import { ICard } from '../../utils/interfaces';
import booksRequest from '../../utils/OpenLibApi';
import { addCardsError, addCardsSuccess } from '../actions';

export function* fetchCardsWatcher() {
  yield takeLatest(ADD_CARDS_REQUESTED, fetchCardsWorker);
}

type AddCardsReqAction = {type: typeof ADD_CARDS_REQUESTED, payload: string};

function* fetchCardsWorker(action: AddCardsReqAction) {
  try {
    const recievedCards: ICard[] = yield call(onSearch, action.payload);
    yield put(addCardsSuccess(recievedCards));
  } catch (err) {
    yield put(addCardsError(err));
    alert(err);
  }
}

async function getCoverCallback(el: any): Promise<ICard> {
  try {
    const isbn = el.isbn ? el.isbn[0] : null;
    const title = el.title ? el.title : null;
    const author = el.author_name ? el.author_name[0] : null;
    const year = el.first_publish_year ? el.first_publish_year : null;
    const publisher = el.publisher ? el.publisher[0] : null;
    const img = await booksRequest.getCover(isbn);
    const url = URL.createObjectURL(img);
    const card: ICard = {title, author, year, publisher, isbn, cover: url};
    return card;
  } catch(err) {
    console.log(err);
    throw new Error(err);
  }
}

async function onSearch(data: string): Promise<ICard[]> {
  try {
    const res = await booksRequest.getBooks(data);
    if (!res.docs.length) {
      throw new Error('Ooops! No books found...');
    }
    const resCards = res.docs.slice(0, BOOKS_AMOUNT);
    const promises = resCards.map(getCoverCallback);
    const newCards: ICard[] = await Promise.all(promises);
    return newCards;
  } catch(err) {
    console.log(err);
    throw new Error(err.message);
  }
}
