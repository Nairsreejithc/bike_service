const express = require('express');
const Bikedata = require('../models/Bikedata');
const bikeCategory = require('../models/bikeCategory');
const router = express.Router();

router.get('/bikeservice',async(req, res) => {
    try {
        const bikeData = await Bikedata.find({});
        const catData = await bikeCategory.find({});        
        return res.status(200).json({message:"success",bikeDatas:bikeData,bikeCategories:catData});
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

module.exports = router; 