import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const plantsData = useRef([])
  const numberOfPlants = useRef(0)

  useEffect(() => {
    fetchPlants()
  }, [])

  function fetchPlants() {
    fetch(`http://localhost:6001/plants`)
      .then(response => response.json())
      .then((json) => {
        setPlants(json)
        plantsData.current = json
        numberOfPlants.current = json.length
      })
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants} setPlants = {setPlants} 
        plantsData = {plantsData} numberOfPlants = {numberOfPlants} 
        fetchPlants = {fetchPlants}/>
    </div>
  );
}

export default App;
