import React from 'react';

import Filter from 'components/Filter/Filter';
import PizzaList from 'components/PizzaList/PizzaList';

const Home = () => {
  return (
    <>
      <Filter />
      <PizzaList />
    </>
  );
};

export default Home;
