import axios from 'axios';
const serverUrl = 'https://hs-remember.herokuapp.com';

// ACTION TYPE
const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';
const LOG_OUT = 'LOG_OUT';



// ACTION CREATORS
const log_in = user => ({type: LOG_IN, user});
const sign_up = user => ({type: SIGN_UP, user});
const log_out = () => ({type: LOG_OUT});
//const edit_user = user => ({type: EDIT_USER, user});


// THUNK


export const loginThunk = () => dispatch =>
  axios.post(`${serverUrl}/auth/login`)
    .then( res => dispatch(log_in(res.data)))
    .catch( () => console.warn('error from login thunk'));

export const signupThunk = user => dispatch =>
  axios.post(`${serverUrl}/auth/signup`, user)
       .then( res => dispatch(sign_up(res.data)))
       .catch( () => console.warn('error from signup thunk'));

export const logout = () => dispatch =>
  axios.post(`${serverUrl}/auth/logout`)
       .then( () => dispatch(log_out()))
       .catch( () => console.warn('error from logout thunk'));



// REDUCER

export default function (state = {}, action) {
  switch(action.type) {
    case LOG_IN:
      return action.user;
    case SIGN_UP:
      return action.user;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}
