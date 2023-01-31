import { useContext } from "react";
import Card from "../../components/Card/Card";
import ItsNothingComp from "../../components/TextNothingComp/ItsNothingComp";
import AppContext from "../../context";

import "./style/style.scss";

const Favorites = () => {
  const { onAddFavorite, favorite, onAddToCart } = useContext(AppContext);
  return (
    <div className="myFavorite p-40">
      {favorite.length < 1 ? (
        <ItsNothingComp
          textH="Закладок нет :("
          textP="Вы ничего не добавляли в закладки"
          img="./img/NoFavorite.svg"
        />
      ) : (
        <div className="content">
        <div className="contentCard">
          <h1>Мои избранные</h1>
          <div className="d-flex flex-wrap">
            {favorite.map((item, index) => (
              <Card
                key={index}
                onAddFavorite={onAddFavorite}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
            ))}
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
