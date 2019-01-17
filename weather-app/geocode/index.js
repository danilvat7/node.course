const request = require('request');


const API_KEY = 'AIzaSyC76SCjRWUlSa11bn7d3aZmz4NYmjR8ekM';

const geocodeAddress = (userInputs, cb) => {
    const queryParams = userInputs ? encodeURIComponent(userInputs) : '';
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${queryParams}&key=${API_KEY}`,
        json: true
    }, (err, response, body) => {
        if (err) {
            cb('Unable to connect to Google servers')
        } else if (body.status === 'ZERO_RESULTS') {
            cb('Unable to find that address')
        } else if (body.status === 'OK') {
            cb(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    })
};

module.exports = {
    geocodeAddress
};