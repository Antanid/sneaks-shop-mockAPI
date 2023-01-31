import React from "react";
import style from "./style/Drawer.module.scss";

const DrawerCart = ({ onRemoveItem, cartItems }) => {
  return (
    <div className={style.items}>
      {cartItems.map((item, id) => (
        <div className={style.cartItem} key={id}>
          <div
            style={{ backgroundImage: `url(${item.imgUrl})` }}
            className={style.cartItemImg}
          ></div>
          <div className={style.cartItemText}>
            <p>{item.name}</p>
            <b>{item.price} грн.</b>
          </div>
          <img
            onClick={() => onRemoveItem(item.ItemID)}
            className={style.removeBtn}
            src="./img/btn-remove.svg"
            alt="remove"
          />
        </div>
      ))}
    </div>
  );
};

export default DrawerCart;
