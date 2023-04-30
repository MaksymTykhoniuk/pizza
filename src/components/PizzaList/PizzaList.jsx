import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

const PizzaList = () => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>

      <ul className="content__items">
        <PizzaItem />
      </ul>
    </>
  );
};

export default PizzaList;
