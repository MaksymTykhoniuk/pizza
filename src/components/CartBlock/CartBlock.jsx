import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { IoTrashBinOutline } from 'react-icons/io5';

import CartImage from '../../assets/img/empty-cart.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalCount,
  selectCartTotalPrice,
} from 'redux/selectors';
import {
  clearItems,
  decrementItemCount,
  deleteItem,
  incrementItemCount,
} from 'redux/slices/cartSlice';

const pizzaType = ['тратційне', 'тонке'];

const CartBlock = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalCount = useSelector(selectCartTotalCount);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="container container--cart">
      <div className="cart">
        {items.length !== 0 ? (
          <>
            <div className="cart__top">
              <h2 className="content__title">
                <BsCart2 /> Кошик
              </h2>
              <div className="cart__clear">
                <IoTrashBinOutline />
                <span onClick={() => dispatch(clearItems())}>
                  Очистити кошик
                </span>
              </div>
            </div>
            <div>
              <ul>
                {items.map((el, idx) => (
                  <li key={idx} className="cart__item">
                    <div className="cart__item-img">
                      <img
                        className="pizza-block__image"
                        src={el.imageUrl}
                        alt="Pizza"
                      />
                    </div>
                    <div className="cart__item-info">
                      <h3>{el.title}</h3>
                      <p>
                        {pizzaType[el.type]} тісто, {el.size} см.
                      </p>
                    </div>

                    <div className="cart__item-count">
                      {el.count === 1 ? (
                        <AiOutlineCloseCircle
                          onClick={() => dispatch(deleteItem(el))}
                          className="button button--outline button--circle button__item-remove"
                        />
                      ) : (
                        <AiOutlineMinusCircle
                          onClick={() => dispatch(decrementItemCount(el))}
                          className="button button--outline button--circle cart__item-count-minus"
                        />
                      )}
                      <b>{el.count} шт.</b>
                      <AiOutlinePlusCircle
                        onClick={() => dispatch(incrementItemCount(el))}
                        className="button button--outline button--circle cart__item-count-plus"
                      />
                    </div>
                    <div className="cart__item-price">
                      <b>{el.price} грн</b>
                    </div>
                    <div className="cart__item-remove">
                      <AiOutlineCloseCircle
                        onClick={() => dispatch(deleteItem(el))}
                        className="button button--outline button--circle"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Усього піц: <b> {totalCount} шт.</b>
                </span>
                <span>
                  Сума замовлення: <b>{totalPrice} грн</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link
                  to="/"
                  className="button button--outline button--add go-back-btn"
                >
                  Повернутись назад
                </Link>
                <div className="button pay-btn">
                  <span>Оплатити замовлення</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cart cart--empty">
            <h2>
              Кошик пустий <span>😕</span>
            </h2>
            <p>
              Скоріш за все, ви ще не замовляли піцу.
              <br />
              Для того, щоб замовити піцу, перейдіть на головну сторінку.
            </p>
            <img src={CartImage} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Повернутись назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBlock;
