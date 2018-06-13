import axios from 'axios';
import user from './user';
const serverUrl = 'https://hs-remember.herokuapp.com';

// action type
const ALL_USERS = 'ALL_USER'
const NEW_USER = 'NEW_USER'
const REMOVE_USER = 'REMOVE_USER'
//const EDIT_USER = 'EDIT_USER'

// action creator
const all_users = users => ({type: ALL_USERS, users})
const new_user = user => ({type: NEW_USER, user});
const rm_user = id => ({type: REMOVE_USER, id});
//const edit_user = id => ({type: EDIT_USER, id});

// thunk
export const fetchAllUserThunk = () => dispatch => {
  return axios.get(`${serverUrl}/api/users`)
       .then( res => dispatch(all_users(res.data)))
       .catch( err => console.error('errors from fetchAllUserThunk', err))
}

export const createNewUserThunk = user => dispatch => {
  return axios.post(`${serverUrl}/api/users`, user)
       .then( res => dispatch(new_user(res.data)))
       .catch( err => console.error('errors from createNewUserThunk', err))
}

export const removeUserThunk = id => dispatch => {
  return axios.delete(`${serverUrl}/api/users/${id}`)
              .then( () => dispatch(rm_user(id)))
              .catch( err => console.error('error from removeUserThunk', err))
}

// reducer
export default function(state=[], action){
  switch (action.type) {
    case ALL_USERS:
      return action.users;
    case NEW_USER:
      return [...state, action.user];
    case REMOVE_USER:
      return state.filter( user => user.id !== action.id)
    default:
      return state;
  }
}
