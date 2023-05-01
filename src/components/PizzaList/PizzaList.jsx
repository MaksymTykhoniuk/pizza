import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import data from '../../assets/data/pizzas.json';

const PizzaList = () => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__items">
        {data.map(item => (
          <PizzaItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default PizzaList;
