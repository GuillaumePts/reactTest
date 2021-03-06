import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from '../src/footer/footer';
import Header from '../src/header/header';
import Emoji from '../src/Emoji/Emoji';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Emoji/>
    <App />

    <Footer/>
    
  </React.StrictMode>
);
