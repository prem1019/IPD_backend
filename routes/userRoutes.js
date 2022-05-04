const express = require("express");
// const userController = require("./../controllers/userController");

const router = express.Router();

require('../db/conn')
const User = require("../models/userSchema")

// router.route("/user").post(userController.storeInfo);

router.get('/', (req,res) => {
    res.send("Server userRoutes.js")
})

router.post('/', (req, res)=> {

    const { Entertainment, Social_media, Gaming, Education, Health_Fitness, Books_Music, Business_Finance, Other, Total} = req.body
    // console.log(req.body)
    // if(!Entertainment || !Social_mediaEntertainment || !GamingEntertainment || !EducationEntertainment || !Health_FitnessEntertainment || !Books_MusicEntertainment || !Business_FinanceEntertainment || !OtherEntertainment || !Total){
    //     return res.status(422).json({error: "Fill all the fields"})
    // }

    const user = new User({ Entertainment, Social_media, Gaming, Education, Health_Fitness, Books_Music, Business_Finance, Other, Total})

    user.save().then(()=>{
        res.status(201).json({message:"Input saved"})
    }).catch((err) => res.status(500).json({error:'Fail'}))
})

module.exports = router;
