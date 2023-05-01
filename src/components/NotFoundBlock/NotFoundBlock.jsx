import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        NotFound <span>😣</span>
      </h1>
    </div>
  );
};

export default NotFoundBlock;
