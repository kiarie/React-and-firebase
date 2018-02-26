const functions = require('firebase-functions');
const express =  require('express');
const fs = require('fs');


var app = express(),html='';
fs.readFile(__dirname+'/src/index.html','utf8',(err,data)=>{ 
        html  = (data)?data:'';
})
app.get('/',(req, res) => {
    res.send(html)
})
app.get('/app',(req, res) => {
    res.send('hello from firebase')
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
