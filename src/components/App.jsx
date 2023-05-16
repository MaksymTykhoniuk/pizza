import React, { createContext, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';

import '../scss/app.scss';
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const SearchValue = createContext(null);

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchValue.Provider value={{ searchQuery, setSearchQuery }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SearchValue.Provider>
  );
};
