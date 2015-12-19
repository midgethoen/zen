'use strict';
var bodyParser = require('body-parser')
var express = require('express')
var mongoose = require('mongoose')

var app = express()
app.use(bodyParser.json())

var User = require('./models/user')
var Zentry = require('./models/zentry')

var userRoute = require('./routes/user')(User)
var zenpointRoute = require('./routes/zenpoint')(User, Zentry)

app.use('/user', userRoute)
app.use('/zenpoints', zenpointRoute)

var db = mongoose.connect('mongodb://localhost/develop')
mongoose.connection
.on('error', err=>console.error('MongoDB connection error:', err.message) )
.once('open', ()=>{
  console.log('Connected to database')
  app.listen(8080, function(err) {
    if (err) {
      return console.error('unable to start webserver', err.message)
    }
    console.log('listening on port 8080')
  })
})

