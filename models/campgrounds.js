const mongoose = require('mongoose')

const campgroundsSchema = mongoose.Schema({
    title : String,
    location : String,
    description : String,
    price : Number,
})

module.exports = mongoose.model('Campground',campgroundsSchema)