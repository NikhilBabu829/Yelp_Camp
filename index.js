const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.unsplashUser)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/yelp-camp-git')
.then(()=>{
    console.log("database connected")
})
.catch((e)=>{
    console.log("Error connecting ",e)
})