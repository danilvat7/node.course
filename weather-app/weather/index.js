const request = require('request');


// const getWeather = (lat, lnt, cb) => {
//     request({
//         url: `https://api.darksky.net/forecast/5e6023a4f7d8e180e1c033683e06b624/${lat},${lnt}`,
//         json: true
//     }, (err, res, body) => {
//         if (!err && res.statusCode === 200) {
//             cb(undefined, {
//                 temperature: body.currently.temperature,
//                 apparentTemperature: body.currently.apparentTemperature 
//             });
//         } else {
//             cb('Unable to fetch weather.');
//         }
//     });
// };
const getWeather = (lat, lnt) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/5e6023a4f7d8e180e1c033683e06b624/${lat},${lnt}`,
            json: true
        }, (err, res, body) => {
            if (!err && res.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                })
            } else {
                reject('Unable to fetch weather.')
            }
        });
    });
};
module.exports = {
    getWeather
};