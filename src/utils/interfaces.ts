export interface ICard {
  title: string | null,
  author: string | null,
  year: string | null,
  publisher:string | null,
  isbn: string | null,
  cover: string | null
}

export interface IState {
  cards: ICard[],
  currentCard: ICard,
  loading: boolean,
  error: boolean,
  errMsg: string,
}
