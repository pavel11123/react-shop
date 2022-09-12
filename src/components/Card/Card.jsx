import React from "react";
import { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const [isAded, setIsAded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const onClickPlus = () => {
    setIsAded(!isAded);
  };

  const onClickFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="sale__product-cart d-fl-col">
      <div className="favorite favorite__catalog" onClick={onClickFavorite}>
        <img
          src={
            isFavorited
              ? "/img/icon/favorite-success.svg"
              : "/img/icon/favorite.png"
          }
          alt="plus"
        />
      </div>
      <div className="sale__product-img">
        <img src={props.cardImg} alt="Product-1" />
      </div>
      <h5 className="title__product">{props.cardTitle}</h5>
      <div className="sale__product-bottom d-fl">
        <div className="sale__product-price d-fl-col">
          <span>Цена:</span>
          <span>{props.cardPrice} руб.</span>
        </div>
        <button className="plus" onClick={onClickPlus}>
          <img
            src={isAded ? "/img/icon/btn-success.svg" : "/img/icon/plus.svg"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export { Card };
