// const yargs = require('yargs');

// const geocode = require('./geocode')
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv['address'], (errMsg, results) => {
//     if (errMsg) {
//         console.log(errMsg);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));  
//     }
// });

const request = require('request');


request({
    url: 'https://api.darksky.net/forecast/5e6023a4f7d8e180e1c033683e06b624/49.9935,36.230383',
    json: true
}, (err, res, body) => {
    if (!err && res.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }

})
// 5e6023a4f7d8e180e1c033683e06b624
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]