import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/pizza-slices';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const SharedLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Suspense
            fallback={
              <Lottie width={360} height={360} options={defaultOptions} />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
