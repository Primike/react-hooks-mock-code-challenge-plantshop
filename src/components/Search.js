import React from "react";

function Search({setPlants, plantsData}) {

  function searchPlants(e) {
    let list = plantsData.current.filter(plant => {
      return plant.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setPlants(list)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchPlants}
      />
    </div>
  );
}

export default Search;
