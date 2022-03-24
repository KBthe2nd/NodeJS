const path = require('path');
const fs = require('fs');



const dataPath = path.join(__dirname, 'chirps.json');
fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {

    var person = JSON.parse(data);

    console.log(person);

})