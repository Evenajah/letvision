// Firebase
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const firebase = admin.initializeApp(functions.config().firebase);


// ExpressJs
const express = require('express');
const cors = require('cors');
const user = express();
const story = express();

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

/**************************************************End User API******************************************************* */

// USer REST APIs
story.use(cors({ origin: true }));

// CRUD
// add story
story.post('/', (req, res) => {

      //add data in db
      firebase
            .database()
            .ref(`/stories/`)
            .push({
                  userId: req.body.userId,
                  topic: req.body.topic,
                  detail: req.body.detail,
                  created_at: req.body.created_at,
                  photoUrl: req.body.photoUrl
            })

      res.status(200).send('success');

});

// get all story
story.get('/', (req, res) => {

      var userStory = firebase.database().ref('/users/');
      var story = firebase.database().ref('/stories/');
      

      story.once('value', (storyData) => {

            var objStory = [];
            
            storyData.forEach((items => {

                  // ดึง key มาทำ object
                  var fk = storyData.child(items.key).val();

                  // ยิงหา user ที่ตรงกับ key
                  userStory.child(`${fk.userId}/personaldata/`).on('value', (userData) => {

                        // เพิ่ม object user ที่ผูกกับ story แล้ว
                        objStory.push({
                              storyId: items.key,
                              storyItem: fk,
                              userCreate: userData
                        })
                  })
            }))

            res.status(200).send(objStory);
      }
      
      )



});






// Expose Express API as a single Cloud Function:
exports.user = functions.https.onRequest(user);
exports.story = functions.https.onRequest(story);