import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selected, setSelected] = useState("");

  function handleFilterChange(event) {
    setSelected(event.target.value);
  }

  const filteredItems = items.filter((item) =>{
    if (selected === "") return true; 
    return item.category === selected;
});
  return (
    <div className="ShoppingList">
      <div className="Filter"> 
        <select name="filter" value= {selected} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} /> 
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
