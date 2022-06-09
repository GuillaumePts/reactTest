import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from '../src/footer/footer';
import Header from '../src/header/header';
import Emoji from '../src/Emoji/Emoji';
import Produit from '../src/Produit/Produit';
import Message from '../src/Message/Message';
import Produit1 from '../src/Produit1/Produit1';
import Titre from '../src/Titre/Titre';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Emoji/>
    <App />
    <App />
    <App />
    <Titre tittle='China'/>
    <Produit1/>
    <Titre tittle='China'/>
    <Produit />

    
    
<Message/>
<Message messagePasse="coucou"/>
<Message nom='mamie'/>
    <Footer/>

    
  </React.StrictMode>
);
