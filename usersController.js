
const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'John Doe' },
];

const getAllUsers = (req, res) => {
    res.render('users', { users });
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.redirect('/users');
};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedName = req.body.name;
		
    const userToUpdate = users.find(user => user.id === userId);
    if (userToUpdate) {
        userToUpdate.name = updatedName;
        res.json(userToUpdate);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);

    users = users.filter(user => user.id !== userId);

    res.json({ message: 'User deleted successfully' });
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
