import React from 'react';
import './main.scss';
import Catalog from '../catalog/catalog.jsx';
import Header from '../header/header';
import Footer from '../footer/footer';
// import {ReactComponent as LineHeader} from '../../img/line-header.svg';

const MainPage = () => {
//   const linesHeaderArray = [1, 2, 3, 4, 5, 6];
  return <>
    <Header isMainPage={true}/>
    <main className="main main--catalog">
      <h1 className="visually-hidden">Your Guitar Shop</h1>
      {/* <div className="main__lines-header">
        {linesHeaderArray.map((line) => {
          return <LineHeader key={line}/>;
        })}
      </div> */}
      <Catalog/>
    </main>
    <Footer isMainPage={true}/>
  </>;
};


export default MainPage;
