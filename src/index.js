import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDo9_xWm8gdhv-dJwS3rNhl4eV1EZGV22A",
    authDomain: "react-with-firebase-254322.firebaseapp.com",
    databaseURL: "https://react-with-firebase-254322.firebaseio.com",
    projectId: "react-with-firebase-254322",
    storageBucket: "",
    messagingSenderId: "589279448507",
    appId: "1:589279448507:web:8ba62020210ebbe5f0089e",
    measurementId: "G-RF4CEJX9JJ"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
