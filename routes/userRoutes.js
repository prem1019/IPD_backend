const express = require("express");
const router = express.Router();

require('../db/conn')
const User = require("../models/userSchema")

router.get('/', (req, res) => {
    try {
        const users = User.find();
        res.status(200).json({
            status: "success",
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            data: {
                err,
            },
        });
    }
    res.send("Server userRoutes.js")
})

router.post('/', (req, res) => {

    const { Entertainment, Social_media, Gaming, Education, Health_Fitness, Books_Music, Business_Finance, Other, Total } = req.body
    // console.log(req.body)  
    const user = new User({ Entertainment, Social_media, Gaming, Education, Health_Fitness, Books_Music, Business_Finance, Other, Total })
    user.save().then(() => {
        res.status(201).json({ message: "Input saved" })
    }).catch((err) => res.status(500).json({ error: 'Fail' }))
})

module.exports = router;