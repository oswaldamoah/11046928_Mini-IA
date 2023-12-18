/// Creating express variable and requiring its package
const express = require('express')
const mongoose = require('mongoose')
const nodemon = require('nodemon')

const FrontDeskEncounter = require('./models/FrontDeskEncounter')
const FrontDeskRegister = require('./models/FrontDeskRegister')
const PatientVitals = require('./models/PatientVitals')



/// Declaring the app variable
const app = express()
// to be able to input json
app.use(express.json())
// to be able to input form type
app.use(express.urlencoded({extended: false}))


// Front Desk Executive Register:
app.post('/fdr', async(req, res) => {
    try{
         const fdr = await FrontDeskRegister.create(req.body);
         res.status(200).json(fdr);
    }
    catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
    }
 })
 
// Front Desk Executive Encounter:
app.post('/fde', async(req, res) => {
    try{
         const fde = await FrontDeskEncounter.create(req.body);
         res.status(200).json(fde);
    }
    catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
    }
 })

  
// Nurse's Patient Vitals:
app.post('/pv', async(req, res) => {
    try{
         const pv = await PatientVitals.create(req.body);
         res.status(200).json(pv);
    }
    catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
    }
 })











/// Linking node to MongoDB
mongoose.
connect('mongodb+srv://admin:1234admin@ofreezyapi.alrdfbb.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    // Using the app variable to listen to (declare) our port)
    app.listen(3000, ()=> {
    console.log("Node API is running on port "+v)
});
}).catch((error) => {
    console.log(error)
})


