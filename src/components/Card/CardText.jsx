import { useContext } from "react";
import AppContext from "../../context";
import "./style/Card.scss";
function CardText({search, imgSearch,imgBtn,searhTo, defText}) {
  const {
    onClearSearchInp,
    onChangeSearchInput,
    searchValue,
  } = useContext(AppContext);
  return (
    <div className="contentInput">
      <h1>{searchValue ? `${searhTo} ${searchValue}` : defText}</h1>
      <div className="searchBlock">
        <img src={imgSearch} alt="Search" />
        <input
          onChange={onChangeSearchInput}
          placeholder={search}
          value={searchValue}
        />
        {searchValue && (
          <img
            onClick={onClearSearchInp}
            className="removeBtnInput"
            src={imgBtn}
            alt="clear"
          />
        )}
      </div>
    </div>
  );
}

export default CardText;
