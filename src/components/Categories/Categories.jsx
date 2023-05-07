import React from 'react';
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

const Categories = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => (
          <li
            key={idx}
            onClick={() => onChangeCategory(idx)}
            className={value === idx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
