const axios = require('axios');
const fs = require('fs');

const baseUrl = "http://lcboapi.com/products"

axios.get(baseUrl + '?where=is_vqa')
     .then(response => {
        let results = Object.values(response.data.result)
        console.log(typeof results);
        let wines = results.filter(result => result.secondary_category = "Red Wine");

        // console.log(wines[0]);
        // stringify the response to write it to a file
        let fileContent = JSON.stringify(wines)
        fs.writeFileSync('wines.json', fileContent);
        console.log("file created");
     })
     .catch(error => {
        console.log(error);
     });
