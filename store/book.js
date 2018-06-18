import axios from 'axios';
const serverUrl = 'https://hs-remember.herokuapp.com';

// action type
const ALL_BOOKS = 'ALL_BOOKS';
const NEW_BOOK = 'NEW_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creator
const findAllBooks = books => ({type: ALL_BOOKS, books});
const newBook = book => ({type: NEW_BOOK, book});
const removeBook = id => ({type: REMOVE_BOOK, id});

// action thunk
export const allBooksThunk = () => dispatch =>
  axios.get(`${serverUrl}/api/books`)
       .then( res => dispatch(findAllBooks(res.data)))
       .catch( err => console.log('errors from fetchAllBooks thunk', err));

export const newBookThunk = book => dispatch =>
  axios.post(`${serverUrl}/api/books`, book)
       .then( res => dispatch(newBook(res.data)))
       .catch( err => console.log('errors from createNewBook thunk', err))

export const deleteBookThunk = id => dispatch =>
  axios.delete(`${serverUrl}/api/books/${id}`)
       .then(() => dispatch(removeBook(id)))
// reducer

export default function (state=[], action){
  switch (action.type){
    case ALL_BOOKS:
      return action.books;
    case NEW_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter( book => book.id !== action.id);
    default:
      return state;

  }
}
