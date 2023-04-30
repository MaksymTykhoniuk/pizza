import React from 'react';
import Header from './Header/Header';
import PizzaList from './PizzaList/PizzaList';
import Filter from './Filter/Filter';
import '../scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Filter />
          <PizzaList />
        </div>
      </div>
    </div>
  );
};
