import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from '../src/footer/footer';
import Header from '../src/header/header';
import Emoji from '../src/Emoji/Emoji';
import Produit from '../src/Produit/Produit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Emoji/>
    <App />
    <Produit/>

    <Footer/>

    
  </React.StrictMode>
);
