import React, { useState } from 'react';
const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Categories = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleActiveCat = idx => {
    setActiveIdx(idx);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => (
          <li
            key={idx}
            onClick={() => handleActiveCat(idx)}
            className={activeIdx === idx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
