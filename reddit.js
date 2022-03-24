const request = require('request');
const fs = require('fs');
const path = require('path');

const dataTrail = path.join(__dirname, 'popular-articles.json');
request('https://www.reddit.com/r/popular.json', (err, res, body) => {
    
if(err) console.log(err);

JSON.parse(body).data.children.forEach(item => {
fs.appendFileSync(dataTrail,`Title:${item.data.title}  Author:${item.data.name} URL:${item.data.url}` + '\n' );
})



})