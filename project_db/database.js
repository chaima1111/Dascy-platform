const express = require('express');
const mysql = require('mysql2');

//Create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: 'ing2secbgrp1',
    password: 'mondorosa2392004',
    database: 'website'
});

//Connect

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });

// Function to register a new user
const registerUser = (name, yearOfStudy, university, email, password, callback) => {
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return callback(err);

            // Insert user into database
            db.query('INSERT INTO users (name, yearOfStudy, university, email, password) VALUES (?, ?, ?, ?, ?)',
                [name, yearOfStudy, university, email, hash],
                (err, result) => {
                    if (err) return callback(err);
                    callback(null, result);
                });
        });
    });
};

module.exports = { registerUser };




