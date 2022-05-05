const User = require("../models/userSchema")

exports.storeInfo = async (req, res) => {

    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}