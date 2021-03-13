import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
var fb = null;
// Check how many times the firebase app is initialized.
if (firebase.apps.length === 0) {
  fb = firebase.initializeApp(config);
  console.log('Firebase [Auth] Initialized');
} else {
  console.log('Firebase [Auth] is already Initialized');
}

export default fb;
