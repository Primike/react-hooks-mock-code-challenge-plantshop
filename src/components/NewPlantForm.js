import React from "react";

function NewPlantForm({numberOfPlants, fetchPlants}) {
  const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

    if(!!urlPattern.test(urlString)) {
      console.log(urlString)
      return urlString
    }

    return undefined;
 }

  function createPlant(e) {
    e.preventDefault()

    if(e.target[0].value == '' || e.target[1].value == '' || e.target[2].value == '') {
      alert('Please fill out the form')
      return
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: numberOfPlants.current + 1,
        name: e.target[0].value,
        image: isValidUrl(e.target[1].value) ?? 'https://cdn2.vectorstock.com/i/1000x1000/22/06/plant-pot-cartoon-isolated-blue-lines-vector-24932206.jpg',
        price: e.target[2].value,
      }),
    })
    .then(() => {
      fetchPlants()
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {createPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
