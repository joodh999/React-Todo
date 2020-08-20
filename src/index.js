import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5uIU8Io477rT1VzTS9ElpoZKzamEgFCs",
  authDomain: "todoapp-b84d3.firebaseapp.com",
  databaseURL: "https://todoapp-b84d3.firebaseio.com",
  projectId: "todoapp-b84d3",
  storageBucket: "todoapp-b84d3.appspot.com",
  messagingSenderId: "108509386848",
  appId: "1:108509386848:web:e5e802709cdf1a4ab3cb05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

