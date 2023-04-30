import React from 'react';
import Categories from 'components/Categories/Categories';
import Sort from 'components/Sort/Sort';
const Filter = () => {
  return (
    <div className="content__top">
      <Categories />
      <Sort />
    </div>
  );
};

export default Filter;
