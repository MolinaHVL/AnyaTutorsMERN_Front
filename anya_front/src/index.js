import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgTVH99-U2muXC_khEQsmqHutBVnFdnPc",
  authDomain: "anyatutors-f4803.firebaseapp.com",
  projectId: "anyatutors-f4803",
  storageBucket: "anyatutors-f4803.appspot.com",
  messagingSenderId: "529666740707",
  appId: "1:529666740707:web:b87e0c14239637d28750d6"
};

// Inicializar la aplicación de Firebase con la configuración anterior
const app = initializeApp(firebaseConfig);

// Crear una raíz para renderizar la aplicación de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación de React en la raíz creada
root.render(
  // React.StrictMode es un componente que envuelve la aplicación y ayuda a encontrar problemas potenciales.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

