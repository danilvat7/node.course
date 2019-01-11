const request = require('request');

request({
    url: 'https://reqres.in/api/users?page=1',
    json: true
}, (err, response, body) => {
    console.log(JSON.stringify(body, undefined, 4));
    
})