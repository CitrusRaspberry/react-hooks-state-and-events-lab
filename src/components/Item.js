import React, { useState } from "react";

function Item({ name, category }) {
  const [cartClass, setCartClass] = useState("");
  function handleClick() {
    console.log(cartClass);
    cartClass ? setCartClass("") : setCartClass("in-cart");
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className={cartClass}>{category}</span>
      <button onClick={handleClick} className={cartClass ? "remove" : "add"}>{cartClass ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
