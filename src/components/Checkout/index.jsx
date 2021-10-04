import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct";
import SubTotal from "../SubTotal";
import "./styles.css";
export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://sliderpresents.co.uk/wp-content/uploads/2020/08/Amazon-header-image-08.png"
          alt="img"
        />
        {basket?.length === 0 ? (
          <div className="">
            <h2>Su cesta de la compra está vacía</h2>
            <p>
              No tienes artículos en tu cesta. Para comprar uno o "Agregar al
              carrito" junto al artículo
            </p>
          </div>
        ) : (
          <div className="">
            <h2 className="checkout__title">Su cesta de la compra</h2>
            {basket?.map(({ id, title, image, price, rating }) => (
              <CheckoutProduct
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}
