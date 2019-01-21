const yargs = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

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

geocode.geocodeAddress(argv['address'])
    .then(result => {
        console.log(result.address);
        weather.getWeather(result.latitude, result.longitude)
            .then(weatherResults => {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }, err => {
                console.log(errMsg);
            })
    }, err => {
        console.log(err);
    }).catch(err => {
        console.log(err);
    });