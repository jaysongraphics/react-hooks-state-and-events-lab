import React, { useState } from "react";

function Item({key, name, category}) {
  // console.log(name);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartClick = () =>{
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}




export default Item;