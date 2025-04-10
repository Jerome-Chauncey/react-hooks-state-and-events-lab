import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCartToggle(){
    setInCart((prevInCart) => !prevInCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {handleCartToggle} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
