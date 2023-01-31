import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import AppContext from "../../context";
import DrawerCart from "./DrawerCart";
import DrawerText from "./DrawerText";
import Info from "./Info";

import style from "./style/Drawer.module.scss";

const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer() {
  const {
    onClickOpened,
    setCartItems,
    setOrders,
    cartItems,
    totalPrice,
    cartOpened,
    onRemoveItem,
  } = useContext(AppContext);

  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const body = document.querySelector("body");

  cartOpened
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "auto");

  useEffect(() => {
    async function fetchData() {
      const cartRespons = await axios.get(
        "https://63a22b0da543280f776a749b.mockapi.io/cart"
      );
      setCartItems(cartRespons.data);
    }
    fetchData();
  }, [cartOpened, setCartItems]);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      setIsOrderCompleted(true);
      setOrders((prev) => [...prev, cartItems]);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://63a22b0da543280f776a749b.mockapi.io/cart/${item.ItemID}`
        );
        await deley(1000);
      }
    } catch (error) {
      alert("Заказ не создался");
    }
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div
      className={`${style.overlay} ${cartOpened ? style.overlayVisible : ""}`}
    >
      <div className={style.drawer}>
        <div className={style.cartText}>
          <h2>Корзина</h2>
          <img
            onClick={onClickOpened}
            className="removeBtn"
            src="./img/btn-remove.svg"
            alt="remove"
          />
        </div>

        {cartItems.length > 0 ? (
          <>
            <DrawerCart cartItems={cartItems} onRemoveItem={onRemoveItem} />
            <DrawerText totalPrice={totalPrice} onClickOrder={onClickOrder} />
          </>
        ) : (
          <Info
            isLoading={isLoading}
            image={
              isOrderCompleted
                ? "./img/complete-order.svg"
                : "./img/empty-cart.jpeg"
            }
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            onClose={onClickOpened}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
