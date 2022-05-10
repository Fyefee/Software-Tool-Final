const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nameLead: {
        type: String, 
        required: true,
        trim: true
    },
    firstName: {
        type: String, 
        required: true,
        trim: true
    },
    lastName: {
        type: String, 
        required: true,
        trim: true
    },
    personalCard: {
        type: String, 
        required: true,
        trim: true
    },
    cardNumber: {
        type: String, 
        required: true,
        trim: true
    },
    birthDate: {
        type: Date, 
        required: true
    },
    location: {
        type: String, 
        required: true,
        trim: true
    },
    province: {
        type: String, 
        required: true,
        trim: true
    },
    district: {
        type: String, 
        required: true,
        trim: true
    },
    subDistrict: {
        type: String, 
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String, 
        required: true,
        trim: true
    },
})

module.exports = mongoose.model("User", UserSchema);