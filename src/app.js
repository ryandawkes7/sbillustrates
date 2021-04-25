const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Setup express and port
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup hbs view engine
app.set('view engine', 'hbs');

// Define paths
// const publicDir = path.join(__dirname, '../pub');
// const viewsPath = path.join(__dirname, '../templates/views');
// const partialsGlobal = path.join(__dirname, '../templates/partials/global');
// const partialsHome = path.join(__dirname, '../templates/partials/home');
// const partialsPortfolio = path.join(__dirname, '../templates/partials/portfolio');

// Setup paths
// app.use(express.static(publicDir));
// app.set('views', viewsPath);
// hbs.registerPartials(partialsGlobal);
// hbs.registerPartials(partialsHome);
// hbs.registerPartials(partialsPortfolio);


// Home
app.get('', (req, res) => {
    res.render('index');
})

app.get('/api/hello', (req, res) => {
    res.send({
        express: 'Hello from express'
    });
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send({
        express: `I received your POST request. This is what you sent to me: ${req.body.post}`
    });
});

// Portfolio
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
})

// API endpoint for portfolio JSON data
app.get('/data', (req, res) => {
    // Setup path to JSON file
    const dataPath = path.join(__filename, '../data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data))
    })
})

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})