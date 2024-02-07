
const express = require('express');
const router = express.Router();
const usersController = require('./controllers/usersController');

const homepage = (req, res) => {
    res.render('index');
};
const addmoment = (req, res) => {
    res.render('add-moment');
};
const myarts = (req, res) => {
    res.render('my-arts');
};
const contact = (req, res) => {
    res.render('contact');
};
const login = (req, res) => {
    res.render('login');
};



router.get('/users', usersController.getAllUsers);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);


router.get('/', homepage);
router.get('/add-moment', addmoment);
router.get('/my-arts', myarts);
router.get('/contact', contact);
router.get('/login', login);



module.exports = router;
