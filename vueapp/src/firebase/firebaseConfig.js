import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: '<key>',
  authDomain: '<key>',
  projectId: ' <key>',
  storageBucket: '<key>',
  messagingSenderId: '<key>',
  appId: '<key>',
  measurementId: '<key>'
};

var fb = null;
if (firebase.apps.length === 0) {
  fb = firebase.initializeApp(config);
  console.log('Firebase [Vue] Initialized');
} else {
  console.log('Firebase [Vue] is already Initialized');
}

export default fb;