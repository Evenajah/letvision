// Firebase
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebase = admin.initializeApp(functions.config().firebase);


// ExpressJs
const express = require('express');
const cors = require('cors');
const user = express();

// REST APIs
user.use(cors({ origin: true }));

// CRUD
user.get('/:id', (req, res) => {
      firebase.database().ref(`/users/${req.params.id}/personaldata`).once('value', (data) => {
            res.send(data.toJSON())
      })
});

user.post('/', (req, res) => {

      res.send(req.body)

});


// Expose Express API as a single Cloud Function:
exports.user = functions.https.onRequest(user);