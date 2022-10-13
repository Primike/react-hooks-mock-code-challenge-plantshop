import React, { useState } from "react";

function PlantCard({plant}) {
  const [stock, setStock] = useState(true)

  function changeStock(e) {
    stock === true ? setStock(false) : setStock(true)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button className="primary" onClick = {changeStock}>In Stock</button>
      ) : (
        <button onClick = {changeStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
