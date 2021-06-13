import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [light, setLight] = useState(false);

  // this data(items) will be passed down to the ShoppingList as a prop
  // console.log(items);


  // console.log(light);

const toggleLights = () => {
     setLight(light => !light)
  }

  return (
    <div className={"App " + (light ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleLights}>{light ? "Sark" : "Light"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
