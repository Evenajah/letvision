// Firebase
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebase = admin.initializeApp(functions.config().firebase);


// ExpressJs
const express = require('express');
const cors = require('cors');
const user = express();

// USer REST APIs
user.use(cors({ origin: true }));

// CRUD
user.get('/:id', (req, res) => {
      firebase.database().ref(`/users/${req.params.id}/personaldata`).once('value', (data) => {
            res.send(data.toJSON())
      })
});

// add user
user.post('/', (req, res) => {

      //add data in db
      firebase
            .database()
            .ref(`/users/${req.body.id}/personaldata`)
            .set({
                  email: req.body.email,
                  account_type: req.body.account_type,
                  created_at: req.body.created_at,
                  last_logged_in: req.body.last_logged_in,
                  first_name: req.body.first_name,
                  last_name: req.body.last_name,
                  profile_picture: req.body.profile_picture
            })

      res.send(res.status)

});

// patch user
user.put('/', (req, res) => {

      switch (req.body.type) {

            // เปลี่ยนเมล
            case 'changeEmail':
                  firebase
                        .database()
                        .ref(`/users/${req.body.id}/personaldata`)
                        .update({
                              email: req.body.newEmail
                        })
                        .then(() => {
                              return res.status(200).send('success');
                        })
                        .catch((err) => {
                              res.status(400).send(err);
                        });
                        
                  break;

            case 'changeName':
                  // เปลีั่ยนชื่อ
                  firebase
                        .database()
                        .ref(`/users/${req.body.id}/personaldata`)
                        .update({
                              first_name: req.body.first_name,
                              last_name: req.body.last_name
                        })
                        .then(() => {
                              return res.status(200).send('success');
                        })
                        .catch((err) => {
                              res.status(400).send(err);
                        });
                  break;
      }

})


// Expose Express API as a single Cloud Function:
exports.user = functions.https.onRequest(user);