// middleware.js

const customMiddleware1 = (req, res, next) => {
    // Custom middleware logic for logging request information
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
};

const customMiddleware2 = (req, res, next) => {
    // Custom middleware logic for logging response information
    res.on('finish', () => {
        console.log(`[${new Date().toLocaleString()}] Status ${res.statusCode} - ${req.method} ${req.url}`);
    });

    next();
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

module.exports = {
    customMiddleware1,
    customMiddleware2,
    errorHandler
};
