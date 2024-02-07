
const express = require('express');
const router = express.Router();
//const User = require('./models/User');

let users = [
    { id: 1, name: 'John Doe' },
];

const getAllUsers = (req, res) => {
    res.render('users', { users });
};

const createUser = async (req, res)  => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.redirect('/users');
    // try {
    //    const newUser = { firstname, age} = req.body;
       
    //    const exist = await User.find({ email });

    //    if(exist) {
    //      consloe.log('Email already exist');
    //      res.status(400).json({
    //         message: 'Email already exits',
    //      })
    //    }

    //    newUser = { name, age};

    //    await newUser.save();
    // } catch (error) {
    //     res.status(500).json({
    //         message: "Server Error",
    //         error: error.message
    //     })
    // }
    
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
