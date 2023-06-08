import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectSortType,
  selectSearchQuery,
} from 'redux/selectors';
import axios from 'axios';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Sceleton';
import Categories from '../Categories';
import Sort from '../Sort';

const categories = ['Усі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі'];

const PizzaList = () => {
  const categoryId = useSelector(selectCategoryId);
  const sortVariant = useSelector(selectSortType);
  const searchQuery = useSelector(selectSearchQuery);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortVariant.value.includes('-') ? 'desc' : 'asc';
    const sort = `sortBy=${sortVariant.value.replace('-', '')}&order=${order}`;

    setIsLoading(true);

    axios
      .get(
        `https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?${category}&${sort}`
      )
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        throw new Error(e);
      });

    window.scroll(0, 0);
  }, [categoryId, sortVariant]);

  const normalizeValue = searchQuery.toLowerCase();
  const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);
  const pizzas = data
    .filter(item => item.title.toLowerCase().includes(normalizeValue))
    .map(item => <PizzaItem key={item.id} item={item} />);
  const pizzaLength = pizzas.length;
  const vegPizzas = `Піци ${categories[categoryId].toLocaleLowerCase()}`;

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        {categoryId === 2 ? vegPizzas : `${categories[categoryId]} піци`}
      </h2>
      <ul className="content__items">{isLoading ? skeleton : pizzas}</ul>

      {pizzaLength === 0 && (
        <h1>Sorry, but there are no results for your query</h1>
      )}
    </>
  );
};

export default PizzaList;
