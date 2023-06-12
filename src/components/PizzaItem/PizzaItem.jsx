import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/slices/cartSlice';

const typeNames = ['традициіне', 'тонке'];

const PizzaItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, imageUrl, title, types, sizes, price, ingredients } = item;
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(26);
  const [infoVisible, setInfoVisible] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleInfoVisible = () => setInfoVisible(prev => !prev);

  const handleActiveType = el => setActiveType(el);
  const handleActiveSize = idx => setActiveSize(idx);
  const handleFullPrice = () => {
    if (activeSize === 30) {
      return Math.round(price * 1.2);
    } else if (activeSize === 40) {
      return Math.round(price * 1.35);
    } else {
      return price;
    }
  };

  const handleCartAdd = () => {
    const item = {
      id,
      title,
      price: handleFullPrice(),
      imageUrl,
      type: activeType,
      size: activeSize,
      count: 1,
    };

    setIsAddedToCart(true);

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);

    dispatch(addItem(item));
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

          <button
            onClick={handleInfoVisible}
            className="pizza-block__info"
            type="button"
          >
            i
          </button>

          {infoVisible && (
            <div className="pizza-block__overlay">
              <p className="pizza-block__overlay-desc">Склад: {ingredients}</p>
            </div>
          )}
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
          <div className="pizza-block__price">{`${handleFullPrice()}₴`}</div>
          {!isAddedToCart ? (
            <button
              onClick={handleCartAdd}
              className="button button--outline button--add"
            >
              <AiOutlinePlus size={20} />
              <span>Додати</span>
            </button>
          ) : (
            <button className="button--added ">
              <AiOutlineCheck size={20} fill="white" />
              <span>Додано</span>
            </button>
          )}
        </div>
      </li>
    </div>
  );
};

export default PizzaItem;
