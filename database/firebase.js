// database/firebaseDb.js

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBbFzueRCkQwCOMI_alzJJzG4WK38AjPKY',
  authDomain: 'reactnativefirebase-b4211.firebaseapp.com',
  projectId: 'reactnativefirebase-b4211',
  storageBucket: 'reactnativefirebase-b4211.appspot.com',
  messagingSenderId: '258653206811',
  appId: '1:258653206811:web:023950c68bc816c0c57bbe',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
