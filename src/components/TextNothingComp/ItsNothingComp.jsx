import React from "react";
import { Link } from "react-router-dom";
import "./style/style.scss";

const ItsNothingComp = ({textH, textP, img}) => {
  return (
    <div className="textNothing">
      <div>
        <img src={img} alt="no_orders sad" />
      </div>
      <div className="textH4">
        <h4>{textH}</h4>
        <p>{textP}</p>
      </div>
      <div>
        <Link to='/'>
        <button className="greenButton">
        <img src="./img/arrowBtn.svg" alt="arrow" />
          Оформить заказ
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ItsNothingComp;
