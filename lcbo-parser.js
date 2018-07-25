const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"
const testUrl = "?where=is_vqa&where=has_value_added_promotion&per_page=40&page="
let pageNumber = 1
const file = "./wines.json"

if (fs.statSync(file)) {
  fs.unlinkSync(file);
  console.log(`${file} deleted`);
}

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
  if (response.data.pager.is_final_page === false) {
    let pageNumber = response.data.pager.next_page
    console.log(`page: ${pageNumber}`);
    axios.get(baseUrl + testUrl + pageNumber).then(getWines).catch(error => { console.log(error); });
  }
}

function writeJSONFile(wines) {
  let fileContent = JSON.stringify(wines)
  let wineTotal = wines.length;
  fs.appendFileSync(file, fileContent);
  console.log(`${file} created, ${wineTotal} wines written to file`);
}
