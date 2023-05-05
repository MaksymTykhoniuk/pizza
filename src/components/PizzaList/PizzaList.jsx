import React, { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Sceleton';
import Categories from '../Categories';
import Sort from '../Sort';

const PizzaList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(e => {
        throw new Error(e);
      });
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
          : data.map(item => <PizzaItem key={item.id} item={item} />)}
      </ul>
    </>
  );
};

export default PizzaList;
