import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorite/Favorites";
import axios from "axios";
import AppContext from "./context";
import Orders from "./pages/Orders/Orders";
import Drawer from "./components/Drawer/Drawer";
import CardMain from "./pages/CardMain";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartRespons = await axios.get(
          "https://63a22b0da543280f776a749b.mockapi.io/cart"
        );
        const itemRespons = await axios.get(
          "https://63a22b0da543280f776a749b.mockapi.io/items"
        );

        setCartItems(cartRespons.data);
        setItems(itemRespons.data);
        setIsLoading(false);
      } catch (error) {
        alert("Упс не удалось...");
      }
    }

    fetchData();
  }, []);

  const onAddFavorite = async (obj) => {
    try {
      if (favorite.find((i) => i.id === obj.id)) {
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        setFavorite((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Добавление не случилось");
    }
  };

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        const cardID = cartItems.find(
          (item) => Number(item.id) === Number(obj.id)
        ).ItemID;
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
        await axios.delete(
          `https://63a22b0da543280f776a749b.mockapi.io/cart/${cardID}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          "https://63a22b0da543280f776a749b.mockapi.io/cart/",
          obj
        );
      }
    } catch (error) {
      alert("Упс.. добавить товар не удалось(");
    }
  };

  const onRemoveItem = async (ItemID) => {
    try {
      axios.delete(
        `https://63a22b0da543280f776a749b.mockapi.io/cart/${ItemID}`
      );
      setCartItems((prev) => prev.filter((item) => item.ItemID !== ItemID));
    } catch (error) {
      alert("Удаление не удалось");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
    e.preventDefault();
  };
  const onClearSearchInp = () => {
    setSearchValue("");
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id === id);
  };

  const isFavoriteAdded = (id) => {
    return favorite.find((i) => i.id === id);
  };

  const onClickOpened = () => {
    setCartOpened(!cartOpened);
  };

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorite,
        isItemAdded,
        onAddFavorite,
        isFavoriteAdded,
        setCartItems,
        setOrders,
        totalPrice,
        cartOpened,
        onRemoveItem,
        onClickOpened,
        onChangeSearchInput,
        onClearSearchInp,
        searchValue,
        onAddToCart,
        orders,
      }}
    >
      <Drawer />
      <div className="wrapper clear">
        <Header />
        <Routes>
          <>
            <Route path="/" element={<CardMain isLoading={isLoading} />} />
          </>
          <Route path="favorite" element={<Favorites />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
