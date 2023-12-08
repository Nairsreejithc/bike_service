const mongoose = require('mongoose');
const fs = require('fs');
const Bikedata = require('./models/Bikedata');
const bikeCategory = require('./models/bikeCategory');
require('dotenv').config()

module.exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CLOUD_URI);
        console.log(`MongoDB Connected: ${conn.connection.host} 🫙`);

        const data = JSON.parse(fs.readFileSync('./bikeData2.json','utf-8'))
        const catdata = JSON.parse(fs.readFileSync('./bikeCategory.json','utf-8'))
        // console.log(data)

        const  importData = async () => {
            try {
                await Bikedata.create(data)
                console.log('Data Imported')
                process.exit()
            } catch (error) {
                console.log(error)
            }
        }

        const  importCatData = async () => {
            try {
                await bikeCategory.create(catdata)
                console.log('Data Imported')
                process.exit()
            } catch (error) {
                console.log(error)
            }
        }
        // importCatData()
        //importData()
        
        // const fetched_data = await mongoose.connection.db.Collection("bike_data");
        // fetched_data.find({}).toArray(async function(err, data){
        //     const bikeservice= await mongoose.connection.db.Collection("bike_category");
        //     bikeservice.find({}).toArray(function(err, catdata){
        //     if(err) console.log(err);
        //     else{
        //         global.bikeservice = data
        //         global.bikecategory = catdata
        //     }
        //     })
        // })
    } catch (error) {
        console.error(`Error: ${error.message}`);

       
    }
}
