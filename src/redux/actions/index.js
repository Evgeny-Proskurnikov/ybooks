import { 
  ADD_CARDS_REQUESTED,
  ADD_CARDS_SUCCEEDED,
  ADD_CARDS_FAILED,
} from "../../utils/constants"

export const addCardsRequest = (data) => {
  return { type: ADD_CARDS_REQUESTED, payload: data }
};

export const addCardsSuccess = (data) => {
  return { type: ADD_CARDS_SUCCEEDED, payload: data }
};

export const addCardsError = (data) => {
  return { type: ADD_CARDS_FAILED, payload: data }
};
