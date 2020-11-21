import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAtMqCxxer6ArSoaR28GI-gJZH9M7JultU',
  authDomain: 'auth-users-dev.firebaseapp.com',
  databaseURL: 'https://auth-users-dev.firebaseio.com',
  projectId: 'auth-users-dev',
  storageBucket: 'auth-users-dev.appspot.com',
  messagingSenderId: '12150355796',
  appId: '1:12150355796:web:6718ef113b33f8604b7ac1',
});

export const auth = app.auth();
export default app;
