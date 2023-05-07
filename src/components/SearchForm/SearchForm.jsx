import React, { useState } from 'react';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <input
      className={styles.searchForm}
      placeholder="Введите название пиццы..."
      name="search"
      type="text"
      value={searchQuery}
      onChange={evt => setSearchQuery(evt.target.value)}
    />
  );
};

export default SearchForm;
