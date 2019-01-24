const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Not found'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Jhon',
        age: 30
    }]);
})
app.listen(3000);

module.exports.app = app;