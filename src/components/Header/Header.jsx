import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import HeaderLogo from '../../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';
import '../../scss/app.scss';
import SearchForm from 'components/SearchForm';
import { useSelector } from 'react-redux';
import { selectCartTotalCount, selectCartTotalPrice } from 'redux/selectors';

const Header = () => {
  const totalCount = useSelector(selectCartTotalCount);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={HeaderLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza</h1>
              <p>найсмачніша піца в усьому всесвіті</p>
            </div>
          </div>
        </Link>

        <SearchForm />

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₴</span>
            <div className="button__delimiter"></div>

            <BsCart2 size={22} />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
