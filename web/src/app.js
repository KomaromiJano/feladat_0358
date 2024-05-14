var adatok = [];

axios.get('http://localhost:8000/products')
  .then(function (response) {
    // handle success
    adatok = response.data;

    // Call tableFill after the data has been fetched
    let table = document.querySelector("#table");
    tableFill(adatok, table);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });