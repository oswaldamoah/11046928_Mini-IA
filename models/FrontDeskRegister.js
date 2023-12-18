const mongoose = require('mongoose')

// Making schema for the FrontDeskRegister model
const fdrSchema = mongoose.Schema (
     {
        PatientID: {
            
            type: String,
            default: "one", // randomize the default or it should be in an order
        },

        Surname: {
            type: String,
            required: true,
        },

        OtherNames: {
            type: String,
            required: true,
        },

        Gender: {
            type: String,
            required: true,
        },

        PhoneNumber: {
            type: String,
            required: false,
        },

        ResidentialAddress: {
            type: String,
            required: false,
        },

        EmergencyName: {
            type: String,
            required: false,
        },

        EmergencyContact: {
            type: String,
            required: false,
        },

        EmergencyContactRelationship: {
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
const FrontDeskRegister = mongoose.model('FrontDeskRegister', fdrSchema);

// Exporting the FrontDeskRegister model as a module
module.exports = FrontDeskRegister;

