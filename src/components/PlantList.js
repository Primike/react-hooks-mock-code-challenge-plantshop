import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  let list = plants.map(plant => {
    return (
      <PlantCard plant = {plant} key = {plant.id}/>
    )
  })

  return (
    <ul className="cards">{list}</ul>
  );
}

export default PlantList;
