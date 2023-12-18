const mongoose = require('mongoose')

// Making schema for the PatientVitals model
const pvSchema = mongoose.Schema (
     {
        PatientID: {
            
            type: String,
            default: "one", // randomize the default or it should be in an order
        },

        BloodPressure: {
            type: String,
            required: true,
        },

        Temperature: {
            type: String,
            required: true,
        },

        Pulse: {
            type: String,
            required: true,
        },

        SP02: {
            type: String,
            required: false,
        },
    },

    // Adding timestamps in schema to track when data is saved and modified in the database.
    {
        timestamps: true,
    },
)


// Finally declaring the model
const PatientVitals = mongoose.model('PatientVitals', pvSchema);

// Exporting the PatientVitals model as a module
module.exports = PatientVitals;

