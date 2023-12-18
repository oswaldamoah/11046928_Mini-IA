const mongoose = require('mongoose')

// Making schema for the FrontDeskEncounter model
const fdeSchema = mongoose.Schema (
     {
        PatientID: {
            
            type: String,
            required: true,
        },

        Date: {
            type: String,
            required: true,
        },

        Time: {
            type: String,
            required: true,
        },

        EncounterType: {
            type: String,
            required: true,
        },

    },

    // Adding timestamps in schema to track when data is saved and modified in the database.
    {
        timestamps: true,
    },
)


// Finally declaring the model
const FrontDeskEncounter = mongoose.model('FrontDeskEncounter', fdeSchema);

// Exporting the FrontDeskEncounter model as a module
module.exports = FrontDeskEncounter;

