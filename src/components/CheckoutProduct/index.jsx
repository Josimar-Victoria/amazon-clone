import React from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./styles.css";
export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removerFromBasket = () => {
    dispatch({
      type:actionTypes.REMOVE_ITEM,
      id: id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="img" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removerFromBasket}>Eliminar producto</button>
      </div>
    </div>
  );
}
