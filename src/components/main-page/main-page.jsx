import React from 'react';
import './main.scss';
import Catalog from '../catalog/catalog.jsx';
import Header from '../header/header';
import Footer from '../footer/footer';

const MainPage = () => {
  return <>
    <Header isMainPage={true}/>
    <main className="main main--catalog">
      <h1 className="visually-hidden">Your Guitar Shop</h1>
      <Catalog/>
    </main>
    <Footer isMainPage={true}/>
  </>;
};


export default MainPage;
