import { useContext } from "react";
import AppContext from "../../context";
import HeaderMenu from "./HeaderMenu";
import HeadLogo from "./HeadLogo";

import "./style/style.scss";

function Header() {
  const { totalPrice, onClickOpened } = useContext(AppContext);

  return (
    <header className="d-flex justify-between align-center">
      <HeadLogo 
      logoImg="./img/logo.svg"
      h3='REACT SNEAKERS'
      p='Магазин лучших кроссовок'
      />
      <HeaderMenu
      onClickOpened={onClickOpened}
      totalPrice={totalPrice}
      imgFavorite="./img/favorite.svg"
      imgUser="./img/user.svg"
      cartImg="./img/cart.svg"
      />
    </header>
  );
}
export default Header;
