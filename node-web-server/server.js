const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Andrew',
        liking: ['Biking', 'Cities']
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errMsg: 'Something went wrong!'
    });
});

app.get('/*', (req, res) => {
    res.send({
        errMsg: '404'
    });
});
app.listen(3000, () => console.log('Server is working on localhost:3000'));