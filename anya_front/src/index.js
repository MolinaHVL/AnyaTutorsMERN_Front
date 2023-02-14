import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgTVH99-U2muXC_khEQsmqHutBVnFdnPc",
  authDomain: "anyatutors-f4803.firebaseapp.com",
  projectId: "anyatutors-f4803",
  storageBucket: "anyatutors-f4803.appspot.com",
  messagingSenderId: "529666740707",
  appId: "1:529666740707:web:b87e0c14239637d28750d6"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

