import { useContext } from "react";
import AppContext from "../../context";
import CardItem from "./CardItem";
import CardLoader from "./CardLoader";
import "./style/Card.scss";

function Card({ name, price, imgUrl, onPlus, id, isLoading = false }) {
  const { isItemAdded, onAddFavorite, isFavoriteAdded } =
    useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ name, price, imgUrl, id });
  };

  const onClickFavorite = () => {
    onAddFavorite({ name, price, imgUrl, id });
  };

  return (
    <div className="card" key={id}>
      {isLoading ? (
        <CardLoader />
      ) : (
       <CardItem
       onClickPlus={onClickPlus}
       onPlus={onPlus}
       onClickFavorite={onClickFavorite}
       isFavoriteAdded={isFavoriteAdded}
       name={name}
       price={price}
       imgUrl={imgUrl}
       id={id}
       isItemAdded={isItemAdded}
       imgChecked="./img/button-checked.SVG"
       imgPlus= "./img/button-plus.SVG"
       imgHeartLike="./img/heart-liked.svg"
       imgHeartUnlike="./img/heart-unliked.svg"
       />
      )}
    </div>
  );
}

export default Card;
