import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC-ARk35w3Hc79_yspPogWpg297DCqdSKo',
  authDomain: 'crown-clothing-7e185.firebaseapp.com',
  projectId: 'crown-clothing-7e185',
  storageBucket: 'crown-clothing-7e185.appspot.com',
  messagingSenderId: '1092548661459',
  appId: '1:1092548661459:web:b91bd7735290c0b5c34426',
  measurementId: 'G-30R9L4663P',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
