import React, { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Sceleton';
import Categories from '../Categories';
import Sort from '../Sort';
import Pagination from 'components/Pagination';

const PizzaList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setAactiveCategory] = useState(0);
  const [selectedSortVariant, setSelectedSortVariant] = useState({
    name: 'популярності',
    value: 'rating',
  });

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = selectedSortVariant.value.includes('-') ? 'desc' : 'asc';
    const sort = `sortBy=${selectedSortVariant.value.replace(
      '-',
      ''
    )}&order=${order}`;

    setIsLoading(true);
    fetch(
      `https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?page=${page}&limit=4&${category}&${sort}`
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
  }, [activeCategory, selectedSortVariant, page]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategory}
          onChangeCategory={id => setAactiveCategory(id)}
        />
        <Sort
          value={selectedSortVariant}
          onChangeSort={value => setSelectedSortVariant(value)}
        />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <ul className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
          : data.map(item => <PizzaItem key={item.id} item={item} />)}
      </ul>

      <Pagination onChangePage={number => setPage(number)} />
    </>
  );
};

export default PizzaList;
