export class OpenLibApi {
  constructor(config) {
    this._url = config.url;
    this._coverUrl = config.coverUrl;
  }

  getBooks(query) {
    return fetch(
      `${this._url}q=${query}`,
      {
        method: 'GET',
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getCover(query) {
    return fetch(
      `${this._coverUrl}/isbn/${query}-L.jpg`,
      {
        method: 'GET',
      }
    )
      .then(res => {
        if (res.ok) {
          return res.blob();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

const booksRequest = new OpenLibApi({
  url: 'http://openlibrary.org/search.json?',
  coverUrl: 'http://covers.openlibrary.org/b'
})

export default booksRequest;
