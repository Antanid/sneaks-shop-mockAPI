import React from 'react'
import { Link } from 'react-router-dom';

const HeaderMenu = ({
  onClickOpened, 
  totalPrice,
  imgFavorite,
  imgUser,
  cartImg
}) => {
  return (
    <ul className="d-flex">
    <li>
      <Link to="/favorite">
        <span className="favorite_icon">
          <img src={imgFavorite} alt="favorite" />
        </span>
      </Link>
    </li>
    <li className="cartPrice mr-30">
      <span onClick={onClickOpened}>
        <img src={cartImg} alt="cart" />
        <span>{totalPrice} грн.</span>
      </span>
    </li>
    <Link to="/orders">
      <li>
        <img src={imgUser} alt="user" />
      </li>
    </Link>
  </ul>
  )
}

export default HeaderMenu;