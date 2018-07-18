const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"


axios.get(baseUrl + '?where=is_vqa')
  .then(response => {
    // console.log(response.data);
    let jsonData = JSON.stringify(response.data)
    fs.writeFileSync('wines.json', jsonData);
    console.log("file created");
  })
  .catch(error => {
    console.log(error);
  });
