const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.testing = functions.https.onRequest((request, response) => {
  response.send("First test with Cloud Function, here's a random number: " + Math.random());
});

exports.query = functions.https.onRequest((request, response) => {
  var first = request.query.first;
  var second = request.query.second;
  const queryResult = `${first} + ${second} = ${first + second}`
  response.send(queryResult);
});