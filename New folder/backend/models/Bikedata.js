const mongoose = require('mongoose');

const {Schema} = mongoose;
const bikeSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [{
        half:{
            type: String,
            required: true
        },
        full:{
            type: String,
            required: true
        }
 } ],
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Bikedata', bikeSchema); 