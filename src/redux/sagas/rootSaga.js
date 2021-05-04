import { fork } from 'redux-saga/effects';
import { fetchCardsWatcher } from './fetchCardsSaga';

export function* rootSaga() {
  yield fork(fetchCardsWatcher);
}
