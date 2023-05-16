import React, { useContext } from 'react';
import styles from './SearchForm.module.scss';
import { SearchValue } from 'components/App';

const SearchForm = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchValue);

  return (
    <div>
      <input
        className={styles.searchForm}
        placeholder="Введіть назву піци..."
        name="search"
        type="text"
        value={searchQuery}
        onChange={evt => setSearchQuery(evt.target.value)}
      />
      <button
        onClick={() => setSearchQuery('')}
        type="button"
        className={styles.searchFormClear}
      >
        X
      </button>
    </div>
  );
};

export default SearchForm;
