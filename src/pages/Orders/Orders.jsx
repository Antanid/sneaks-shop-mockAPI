import React from "react";
import { useContext } from "react";
import Card from "../../components/Card/Card";
import ItsNothingComp from "../../components/TextNothingComp/ItsNothingComp";
import AppContext from "../../context";

import "./style/style.scss";

const Orders = () => {
  const { orders } = useContext(AppContext);
  const arrayOrders = orders.reduce((prev, obj) => [...prev, ...obj], []);
  return (
    <div className="orderText content p-40">
      {orders.length < 1 ? (
        <ItsNothingComp
          textH="У вас нет заказов"
          textP="Оформите хотя бы один заказ."
          img="./img/no-orders.svg"
        />
      ) : (
        <>
          <h1>Мои заказы</h1>
          <div className="d-flex flex-wrap">
            {arrayOrders.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
