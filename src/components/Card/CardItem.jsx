import React from 'react'

const CardItem = ({
    onPlus,
    isFavoriteAdded,
    onClickFavorite,
    name,
    price,
    imgUrl,
    id,
    onClickPlus,
    isItemAdded,
    imgChecked,
    imgPlus,
    imgHeartLike,
    imgHeartUnlike
}) => {
  return (
    <>
    {onPlus && (
      <div className="cardFavorite">
        <img
          onClick={onClickFavorite}
          src={
            isFavoriteAdded(id)
              ? imgHeartLike
              : imgHeartUnlike
          }
          alt="unliked "
        />
      </div>
    )}

    <img className="sneakersImg" src={imgUrl} alt="sneaker" />
    <h5>{name}</h5>

    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} грн.</b>
      </div>
      {onPlus && (
        <img
          onClick={onClickPlus}
          className="cardButton"
          src={
            isItemAdded(id)
              ? imgChecked
              : imgPlus
          }
          alt="plus"
        />
      )}
    </div>
  </>
  )
}

export default CardItem