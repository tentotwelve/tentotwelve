const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"

axios.get(baseUrl)
     .then(response => {
        let results = Object.values(response.data.result)
        console.log("Total number of results is " + results.length);
        let wines = results.filter(result => result.primary_category === "Wine");
        writeJSONFile(wines);
     })
     .catch(error => {
        console.log(error);
     });

function writeJSONFile(wines) {
  let fileContent = JSON.stringify(wines)
  let wineTotal = wines.length;
  fs.writeFileSync('wines.json', fileContent);
  console.log("file created, " + wineTotal + " wines written to file");
}
