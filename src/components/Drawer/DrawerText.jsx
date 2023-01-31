import React from "react";
import style from "./style/Drawer.module.scss";


const DrawerText = ({totalPrice, onClickOrder}) => {
  return (
      <div className={style.cartTotalBlock}>
        <ul>
          <li>
            <span>Итого: </span>
            <div></div>
            <b>{totalPrice} грн.</b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>{Math.ceil((totalPrice / 100) * 5)} грн.</b>
          </li>
        </ul>
        <button className={style.greenButton} onClick={onClickOrder}>
          Оформить заказ
          <img src="./img/arrowBtn.svg" alt="arrow" />
        </button>
      </div>
  );
};

export default DrawerText;
