// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { customMiddleware1, customMiddleware2, errorHandler } = require('./middleware');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(customMiddleware1);
app.use(customMiddleware2);

// Routes
app.use('/', routes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
