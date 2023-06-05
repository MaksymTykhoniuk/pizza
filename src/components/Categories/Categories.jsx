import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGategoryId } from 'redux/slices/filterSlice';

const categories = ['Усі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі'];

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);

  const handleCategory = id => dispatch(setGategoryId(id));
  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => (
          <li
            key={idx}
            onClick={() => handleCategory(idx)}
            className={categoryId === idx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
