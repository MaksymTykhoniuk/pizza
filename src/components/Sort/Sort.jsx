import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortVariant } from 'redux/slices/filterSlice';
import { selectSortType } from 'redux/selectors';

export const sortVariantList = [
  { name: 'популярності', value: 'rating' },
  { name: 'ціні ⬇', value: '-price' },
  { name: 'ціні ⬆', value: 'price' },
  { name: 'алфавіту', value: 'title' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sortRef = useRef();
  const sortVariant = useSelector(selectSortType);
  const [isVisible, setIsVisible] = useState(false);

  const handleSortVariant = value => dispatch(setSortVariant(value));
  const toggleVisible = () => setIsVisible(prev => !prev);

  const handleActiveVariant = obj => {
    handleSortVariant(obj);
    setIsVisible(prev => !prev);
  };

  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(sortRef.current)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={isVisible ? 'sort__svg--active' : 'sort__svg'}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортувати по:</b>
        <span onClick={toggleVisible}>{sortVariant.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortVariantList.map((el, idx) => (
              <li
                key={idx}
                onClick={() => handleActiveVariant(el)}
                className={sortVariant.name === el.name ? 'active' : ''}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
