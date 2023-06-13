import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from '../../assets/img/empty-cart.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalCount,
  selectCartTotalPrice,
} from 'redux/selectors';
import { addItem, clearItems } from 'redux/slices/cartSlice';

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
              <h2 className="content__title">Корзина</h2>
              <div className="cart__clear">
                <span onClick={() => dispatch(clearItems())}>
                  Очистить корзину
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
                      <div className="button button--outline button--circle cart__item-count-minus">
                        <p>-</p>
                      </div>
                      <b>{el.count} шт.</b>
                      <div
                        onClick={() => dispatch(addItem())}
                        className="button button--outline button--circle cart__item-count-plus"
                      >
                        <p>+</p>
                      </div>
                    </div>
                    <div className="cart__item-price">
                      <b>{el.price} грн</b>
                    </div>
                    <div className="cart__item-remove">
                      <div className="button button--outline button--circle">
                        <p>X</p>
                      </div>
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
                  <span>Розрахуватись одразу</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <span>😕</span>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={CartImage} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBlock;
