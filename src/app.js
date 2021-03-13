const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Setup express and port
const app = express();
const port = process.env.PORT || 4000;

// Setup hbs view engine
app.set('view engine', 'hbs');

// Define paths
const publicDir = path.join(__dirname, '../pub');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsGlobal = path.join(__dirname, '../templates/partials/global');
const partialsHome = path.join(__dirname, '../templates/partials/home');
const partialsPortfolio = path.join(__dirname, '../templates/partials/portfolio');

// Setup paths
app.use(express.static(publicDir));
app.set('views', viewsPath);
hbs.registerPartials(partialsGlobal);
hbs.registerPartials(partialsHome);
hbs.registerPartials(partialsPortfolio);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
        name: 'SB Illustrates'
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})