import React, { useContext } from 'react';
import styles from './SearchForm.module.scss';
import { SearchValue } from 'components/App';
import { FiDelete } from 'react-icons/fi';

const SearchForm = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchValue);

  return (
    <div className={styles.searchFormWrapper}>
      <input
        className={styles.searchForm}
        placeholder="Введіть назву піци..."
        name="search"
        type="text"
        value={searchQuery}
        onChange={evt => setSearchQuery(evt.target.value)}
      />

      {searchQuery && (
        <FiDelete
          onClick={() => setSearchQuery('')}
          type="button"
          className={styles.searchFormClear}
        />
      )}
    </div>
  );
};

export default SearchForm;
