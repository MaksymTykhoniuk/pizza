import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const typeNames = ['традициіне', 'тонке'];

const PizzaItem = ({ item }) => {
  const { imageUrl, title, types, sizes, price, ingredients } = item;
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(26);

  const handleActiveType = el => setActiveType(el);
  const handleActiveSize = idx => setActiveSize(idx);
  const handleFullPrice = () => {
    if (activeSize === 30) {
      return `${Math.round(price * 1.2)} ₴`;
    } else if (activeSize === 40) {
      return `${Math.round(price * 1.35)} ₴`;
    } else {
      return `${price} ₴`;
    }
  };

  return (
    <div className="pizza-block-wrapper">
      <li className="pizza-block">
        <div className="pizza-block__image-wrapper">
          <LazyLoadImage
            className="pizza-block__image"
            src={imageUrl}
            width={260}
            height={260}
            effect="blur"
            alt="Pizza"
          />
          <div className="pizza-block__overlay">
            <p className="pizza-block__overlay-desc">Склад: {ingredients}</p>
          </div>
        </div>

        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map(el => (
              <li
                key={el}
                onClick={() => handleActiveType(el)}
                className={activeType === el ? 'active' : ''}
              >
                {typeNames[el]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map(el => (
              <li
                key={el}
                onClick={() => handleActiveSize(el)}
                className={activeSize === el ? 'active' : ''}
              >
                {el} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{handleFullPrice()}</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            <i>0</i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default PizzaItem;
