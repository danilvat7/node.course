const yargs = require('yargs');
const axious = require('axios');

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

const API_KEY = 'AIzaSyC76SCjRWUlSa11bn7d3aZmz4NYmjR8ekM';

const queryParams = argv.address ? encodeURIComponent(argv.address) : '';
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${queryParams}&key=${API_KEY}`;

axious(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }
        const lat = response.data.results[0].geometry.location.lat;
        const lnt = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.darksky.net/forecast/5e6023a4f7d8e180e1c033683e06b624/${lat},${lnt}`;
        return axious(weatherUrl)
    })
    .then(response => {
        const temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
    })
    .catch(err => {
        if (err.code === 'ENOTFOUND') {
            console.log('Enable to connect to api servers!');
        } else {
            console.log(err.message);
        }
    });