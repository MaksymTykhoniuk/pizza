import React, { useRef } from 'react';
import styles from './SearchForm.module.scss';

import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from 'redux/slices/filterSlice';
import { searchQueryValue } from 'redux/selectors';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQueryValue);
  const inputRef = useRef();

  const handleSearchQuery = value => dispatch(setSearchQuery(value));
  const clearSearchInput = () => {
    dispatch(setSearchQuery(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.searchFormWrapper}>
      <input
        ref={inputRef}
        className={styles.searchForm}
        placeholder="Введіть назву піци..."
        name="search"
        type="text"
        value={searchQuery}
        onChange={evt => handleSearchQuery(evt.target.value)}
      />

      {searchQuery && (
        <FiDelete
          onClick={clearSearchInput}
          type="button"
          className={styles.searchFormClear}
        />
      )}
    </div>
  );
};

export default SearchForm;
