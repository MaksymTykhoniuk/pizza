import React from 'react';
const categories = ['Усі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі'];

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
