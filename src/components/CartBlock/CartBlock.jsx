import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from '../../assets/img/empty-cart.png';

const CartBlock = () => {
  return (
    // <div className="content">
    //   <div className="container container--cart">
    //     {cart ? (
    //       <div>
    //         <ul>
    //           {cart.map(el => (
    //             <li>
    //               <p> {el.name}</p>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ) : (
    //       <div className="cart cart--empty">
    //         <h2>
    //           Корзина пустая <span>😕</span>
    //         </h2>
    //         <p>
    //           Вероятней всего, вы не заказывали ещё пиццу.
    //           <br />
    //           Для того, чтобы заказать пиццу, перейди на главную страницу.
    //         </p>
    //         <img src={CartImage} alt="Empty cart" />
    //         <Link to="/" className="button button--black">
    //           <span>Вернуться назад</span>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="content">
      <div className="container container--cart">
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
      </div>
    </div>
  );
};

export default CartBlock;
