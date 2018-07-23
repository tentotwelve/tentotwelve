const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"

axios.get(baseUrl + '?where=is_vqa')
     .then(response => {
        let results = Object.values(response.data.result)
        console.log("Total number of wines is " + results.length);
        let redWines = results.filter(result => result.secondary_category === "Red Wine");
        let whiteWines = results.filter(result => result.secondary_category === "White Wine");
        let redWineTotal = redWines.length;
        let whiteWineTotal = whiteWines.length;
        console.log("Red Wines: " + redWineTotal);
        console.log("White Wines: " + whiteWineTotal);

        // stringify the response to write it to a file
        let fileContent = JSON.stringify(redWines)
        fs.writeFileSync('wines.json', fileContent);
        console.log("file created, " + redWineTotal + " red wines written to file");

     })
     .catch(error => {
        console.log(error);
     });
