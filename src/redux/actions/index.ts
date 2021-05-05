import { 
  ADD_CARDS_REQUESTED,
  ADD_CARDS_SUCCEEDED,
  ADD_CARDS_FAILED,
} from "../../utils/constants"
import { ICard } from "../../utils/interfaces";

export type ActionTypes = 
  | { type: typeof ADD_CARDS_REQUESTED, payload: string }
  | { type: typeof ADD_CARDS_SUCCEEDED, payload: ICard[] }
  | { type: typeof ADD_CARDS_FAILED, payload: string };

export const addCardsRequest = (data: string): ActionTypes => {
  return { type: ADD_CARDS_REQUESTED, payload: data }
};

export const addCardsSuccess = (data: ICard[]): ActionTypes => {
  return { type: ADD_CARDS_SUCCEEDED, payload: data }
};

export const addCardsError = (data: string): ActionTypes => {
  return { type: ADD_CARDS_FAILED, payload: data }
};
