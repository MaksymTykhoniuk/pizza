import React, { useState, useEffect, useContext } from 'react';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Sceleton';
import Categories from '../Categories';
import Sort from '../Sort';
import { SearchValue } from 'components/App';
import { useSelector, useDispatch } from 'react-redux';
import { setGategoryId, setSortVariant } from 'redux/slices/filterSlice';

const categories = ['Усі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі'];

const PizzaList = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);
  const selctedSortVariant = useSelector(state => state.filter.sort);

  const { searchQuery } = useContext(SearchValue);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategory = id => dispatch(setGategoryId(id));
  const handleSortVariant = value => dispatch(setSortVariant(value));

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = selctedSortVariant.value.includes('-') ? 'desc' : 'asc';
    const sort = `sortBy=${selctedSortVariant.value.replace(
      '-',
      ''
    )}&order=${order}`;
    setIsLoading(true);
    fetch(
      `https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?${category}&${sort}`
    )
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
  }, [categoryId, selctedSortVariant]);

  const normalizeValue = searchQuery.toLowerCase();
  const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);
  const pizzas = data
    .filter(item => item.title.toLowerCase().includes(normalizeValue))
    .map(item => <PizzaItem key={item.id} item={item} />);
  const pizzaLength = pizzas.length;

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={id => handleCategory(id)}
        />
        <Sort
          value={selctedSortVariant}
          onChangeSort={value => handleSortVariant(value)}
        />
      </div>
      <h2 className="content__title">{categories[categoryId]} піци</h2>
      <ul className="content__items">{isLoading ? skeleton : pizzas}</ul>

      {pizzaLength === 0 && (
        <h1>Sorry, but there are no results for your query</h1>
      )}
    </>
  );
};

export default PizzaList;
