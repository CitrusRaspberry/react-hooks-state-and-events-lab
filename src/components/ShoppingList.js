import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [foodFilter, setFoodFilter] = useState("All");
  function handleFilterChange(e) {
    setFoodFilter(e.target.value);
  }
  const filteredItems = items.filter(({ category }) => {
    return (foodFilter === "All" ? true : category === foodFilter)
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
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
