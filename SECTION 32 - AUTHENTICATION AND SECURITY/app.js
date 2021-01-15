//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
//const encrypt = require('mongoose-encryption');
//const md5 = require('md5');
const bcrypt = require('bcrypt');

const saltRounds = 10;


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

//Level 2 = Database Encryption.
//userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });

const User = new mongoose.model('User', userSchema);

app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.get('/login', function (req, res) {
    res.render('login.ejs');
});

app.get('/register', function (req, res) {
    res.render('register.ejs');
});


app.listen(3000, function () {
    console.log('Server started on port 3000.')
});

//Level 1 - security - Email and Password.

app.post('/register', function (req, res) {
    const email = req.body.username;
    const password = req.body.password;
    //level 3 security - Hash Function.
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (!err) {
            const newUser = new User({
                email: email,
                password: hash
            });
            newUser.save(function (err) {
                if (!err) {
                    +
                        res.render('secrets.ejs')
                } else {
                    console.log(err);
                }
            });
        } else {
            res.render(err);
        }
    });
});

app.post('/login', function (req, res) {
    const userName = req.body.username;
    const password = req.body.password;

    User.findOne({ email: userName }, function (err, foundUser) {
        if (!err) {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result === true) {
                        res.render('secrets.ejs');
                    } else {
                        res.render("Password invalid")
                    }
                });
            }
        } else {
            console.log(err);
        }
    });
});

