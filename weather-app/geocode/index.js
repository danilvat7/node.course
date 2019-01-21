const request = require('request');


const API_KEY = 'AIzaSyC76SCjRWUlSa11bn7d3aZmz4NYmjR8ekM';

const geocodeAddress = (userInputs) => {

    return new Promise((resolve, reject) => {
        const queryParams = userInputs ? encodeURIComponent(userInputs) : '';
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${queryParams}&key=${API_KEY}`,
            json: true
        }, (err, response, body) => {

            if (err) {
                reject('Unable to connect to Google servers')
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    });
};

module.exports = {
    geocodeAddress
};