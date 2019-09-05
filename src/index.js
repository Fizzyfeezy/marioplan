import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
//import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
//import {reduxFirestore, getFirestore} from 'redux-firestore';
//import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnAkUh02GoGTPkZRfpusdemezl70kLyc8",
    authDomain: "marioplan-4c16a.firebaseapp.com",
    databaseURL: "https://marioplan-4c16a.firebaseio.com",
    projectId: "marioplan-4c16a",
    storageBucket: "",
    messagingSenderId: "104976630311",
    appId: "1:104976630311:web:66e637e12ae0bc87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true})
  
  
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
 const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }
ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));


// const store = createStore(rootReducer,
//     compose(applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
//         reactReduxFirebase(fbConfig),
//         reduxFirestore(fbConfig)
//     )
// );

//ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
