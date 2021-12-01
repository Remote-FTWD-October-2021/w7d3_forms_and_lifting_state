import React from "react";

import "../Product/Product.css";

const Product = (props) => {
  const { name, price, currency, state } = props.product;

  const getPrice = () => {
    const symbol = currency === "EUR" ? "€" : "$";
    return price + symbol;
  };

  const getBorderColor = () => {
    if (state === "new") {
      return "green";
    } else if (state === "almost-new") {
      return "cyan";
    } else if (state === "used") {
      return "tomato";
    } else {
      return "black";
    }
  };

  return (
    <div className="Product" style={{ borderColor: getBorderColor() }}>
      <h3>{name}</h3>
      <p>{getPrice()}</p>
      <button onClick={() => props.deleteProductAndUpdate(name)}>Borrar</button>
    </div>
  );
};

export default Product;
