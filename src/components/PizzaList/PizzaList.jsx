import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoryId,
  selectSortType,
  selectSearchQuery,
  selectPizzaData,
  selectIsLoading,
} from 'redux/selectors';

import PizzaItem from '../PizzaItem';
import Skeleton from '../Sceleton';
import Categories from '../Categories';
import Sort from '../Sort';
import { fetchPizzas } from 'redux/slices/pizzasOperations';

const categories = ['Усі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі'];

const PizzaList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPizzaData);
  const isLoading = useSelector(selectIsLoading);
  const categoryId = useSelector(selectCategoryId);
  const sortVariant = useSelector(selectSortType);
  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortVariant.value.includes('-') ? 'desc' : 'asc';
    const sort = `sortBy=${sortVariant.value.replace('-', '')}&order=${order}`;

    dispatch(fetchPizzas({ category, sort }));
  }, [categoryId, dispatch, sortVariant.value]);

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
