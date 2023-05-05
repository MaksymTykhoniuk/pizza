import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        NotFound <span>😣</span>
      </h1>
      <Link to="/" className="button button--black">
        <span>Вернуться на главную</span>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
