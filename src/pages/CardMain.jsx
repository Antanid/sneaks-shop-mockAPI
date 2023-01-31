import "../components/Card/style/Card.scss";
import Card from "../components/Card/Card";
import CardText from "../components/Card/CardText";
import { useContext } from "react";
import AppContext from "../context";

function CardMain({ isLoading }) {
  const { searchValue, items, onAddToCart } = useContext(AppContext);

  const renderItems = () => {
    const itemFilter = items.filter((i) =>
      i.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : itemFilter).map((item, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)}
        {...item}
        isLoading={isLoading}
      />
    ));
  };

  return (
    <div className="content">
      <CardText
        search="Поиск..."
        searhTo="Поиск по:"
        defText="Все кроссовки"
        imgSearch="./img/search.svg"
        imgBtn="./img/btn-remove.svg"
      />
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default CardMain;
