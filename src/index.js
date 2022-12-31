import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/CartContext';


const firebaseConfig = {
  apiKey: "AIzaSyBUi2Lfnx2ItfpbyGCngXEC9ZyABXK9jEQ",
  authDomain: "claro-36894.firebaseapp.com",
  projectId: "claro-36894",
  storageBucket: "claro-36894.appspot.com",
  messagingSenderId: "155048300020",
  appId: "1:155048300020:web:b14005889465fe1ad8bda1",
  measurementId: "G-ME4V0XB1DJ"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();