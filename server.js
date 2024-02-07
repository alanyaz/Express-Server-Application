
const express = require('express');
const bodyParser = require('body-parser');
const { customMiddleware1, customMiddleware2, errorHandler } = require('./middleware');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(customMiddleware1);
app.use(customMiddleware2);

app.use('/', routes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
