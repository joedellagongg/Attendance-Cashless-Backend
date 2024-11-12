const Authentication = require("../models/auth.models");

exports.addAuthentication = async function (req, res) {
    const data = req.body;
    console.log(data);
    try {
        const result = await Authentication.addAuthentication(data);
        res.status(200).json({
            // message: "From: [ CONTROLLERS ], Data successfully added",
            result,
        });
    } catch (error) {
        res.status(500).json({
            message: "From: [ CONTROLLERS ], Error adding Authentication",
            error: error.message,
        });
    }
};
