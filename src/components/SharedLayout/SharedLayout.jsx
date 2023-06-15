import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Suspense fallback={<h1>Loading .... 🙄 </h1>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
