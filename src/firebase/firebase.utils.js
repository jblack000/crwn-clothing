import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWn564zpf33wUXqzcrope4a21kfDkgsD8",
    authDomain: "crwn-db-96644.firebaseapp.com",
    projectId: "crwn-db-96644",
    storageBucket: "crwn-db-96644.appspot.com",
    messagingSenderId: "674254567446",
    appId: "1:674254567446:web:66e0ddad844e148fa39d37",
    measurementId: "G-4XFK0X5P6L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;