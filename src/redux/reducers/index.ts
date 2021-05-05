import { 
  ADD_CARDS_REQUESTED,
  ADD_CARDS_SUCCEEDED,
  ADD_CARDS_FAILED,
} from '../../utils/constants';
import { ICard, IState } from '../../utils/interfaces';
import { ActionTypes } from '../actions';

const initialState: IState = {
  cards: [],
  currentCard: {} as ICard,
  loading: false,
  error: false,
  errMsg: '',
}

const reducer = (state = initialState, action: ActionTypes): IState => {
  switch (action.type) {
    case ADD_CARDS_REQUESTED: {
      return  { ...state, cards: [], loading: true, error: false }
    }
    case ADD_CARDS_SUCCEEDED: {
      return  { ...state, cards: action.payload, loading: false, error: false, errMsg: '' }
    }
    case ADD_CARDS_FAILED: {
      return  { ...state, loading: false, error: true, errMsg: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
