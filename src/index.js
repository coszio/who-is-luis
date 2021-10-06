import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./i18n/i18n";
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0NgUIW052R0lPVKSlJL_85uOzbh55RMA",
  authDomain: "who-is-luis.firebaseapp.com",
  projectId: "who-is-luis",
  storageBucket: "who-is-luis.appspot.com",
  messagingSenderId: "240148161707",
  appId: "1:240148161707:web:8cfd3a3c789c43c00cc3ee",
  measurementId: "G-561RTNHYRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
