import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants, plantsData, numberOfPlants, fetchPlants}) {
  return (
    <main>
      <NewPlantForm numberOfPlants = {numberOfPlants} fetchPlants = {fetchPlants}/>
      <Search setPlants = {setPlants} plantsData = {plantsData}/>
      <PlantList plants = {plants}/>
    </main>
  );
}

export default PlantPage;
