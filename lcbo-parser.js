const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"
const testUrl = "?where=is_vqa&where=has_value_added_promotion&per_page=55&page="
let pageNumber = 1
const file = "./wines.json"

axios.get(baseUrl + testUrl + pageNumber)
     .then(getWines)
     .catch(error => {
        console.log(error);
     });

function getWines(response) {
  let results = Object.values(response.data.result)
  console.log("Total number of results is " + results.length);
  let wines = results.filter(result => result.primary_category === "Wine");
  writeJSONFile(wines);
}

function writeJSONFile(wines) {
  let fileContent = JSON.stringify(wines)
  let wineTotal = wines.length;

  if (fs.statSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted`);
  }

  fs.appendFileSync(file, fileContent);
  console.log(`${file} created, ${wineTotal} wines written to file`);
}
