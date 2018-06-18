// import firebase from "react-native-firebase";
import * as firebase from 'firebase';
import * as c from '../.secret';

const config = {
  apiKey: c.FIREBASE_API_KEY,
  authDomain: c.FIREBASE_AUTH_DOMAIN,
  projectId: c.FIREBASE_PROJECT_ID
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const provider = new firebase.auth.FacebookAuthProvider;
