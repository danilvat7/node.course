const request = require('request');
const yargs = require('yargs');

const API_KEY = 'AIzaSyC76SCjRWUlSa11bn7d3aZmz4NYmjR8ekM';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const queryParams = encodeURIComponent(argv['address']);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${queryParams}&key=${API_KEY}`,
    json: true
}, (err, response, body) => {
    console.log(`Addres: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
})