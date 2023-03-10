const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/yelp-camp-git')
.then(()=>{
    console.log("database connected")
})
.catch((e)=>{
    console.log("Error connecting ",e)
})

const Campgrounds = require('../models/campgrounds')

const citiesFile = require('./cities')
const {descriptors , places} = require('./seedHelpers')

const unsplashApi = async()=>{
    try{
        await Campgrounds.deleteMany({})
        const firstRequest = await fetch(`https://api.unsplash.com/collections/2029045//photos/?client_id=e-Yt6lqFXrKDbPDVpNgjKHlsZgY4Phddk_TelUaeQpY&per_page=30`)
        const dataFromFirstRequest = await firstRequest.json()
        const secondRequest = await fetch('https://api.unsplash.com/collections/2029045//photos/?client_id=e-Yt6lqFXrKDbPDVpNgjKHlsZgY4Phddk_TelUaeQpY&per_page=30&page=2')
        const dataFromSecondRequest = await secondRequest.json()
        for(let i=0; i <= 50 ; i++){
            const randomNumberForCities = Math.floor(Math.random() * 1000)
            const randomNumberForTitle = Math.floor(Math.random() * 20)
            const campground =  new Campgrounds({
                title : `${places[randomNumberForTitle]} ${descriptors[randomNumberForTitle]}`,
                location : `${citiesFile[randomNumberForCities]}`,
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                price : 12,
            })
            campground.save()
        }
    }
    catch(e){
        console.log("Error handled ",e)
    }
}

unsplashApi()