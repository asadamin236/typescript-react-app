import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
  const [items, setItems] = useState([
    { name: "Biryani", quantity: 2 },
    { name: "Pulao", quantity: 5 },
    { name: "Nihari", quantity: 6 },
  ]);

  // Update quantities after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setItems((prevItems) =>
        prevItems.map(
          (item) =>
            item.name.toLowerCase() === "pulawo" // match only Pulao/Pulawo
              ? { ...item, quantity: item.quantity + 1 } // increas quantity
              : item // leave others unchanged
        )
      );
    }, 3000);
  }, []);

  // Log whenever items update
  useEffect(() => {
    console.log("Updated Items:", items);
  }, [items]);

  const handleSubmit = () => {
    console.log("Submitting all items:");
    items.forEach((item) =>
      console.log(`Item Name: ${item.name}, Quantity: ${item.quantity}`)
    );
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Cart;
