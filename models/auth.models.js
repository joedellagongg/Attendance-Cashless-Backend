const database = require("../mysql");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
require("dotenv").config();

async function addAuthentication(data) {
    const { username, password } = data;

    console.log(username, password);

    const fetch = `SELECT * FROM studuser WHERE username = ?`;

    try {
        const [result] = await new Promise((resolve, reject) => {
            database.query(fetch, [username], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        // TEST QUERY
        // console.log(result);

        if (!result || result.length === 0) {
            return {
                success: false,
                message: "Incorrect Username or Password",
            };
        }

        const user = result[0];

        if (result.password !== password) {
            return {
                success: false,
                message: "Incorrect Username or Password",
            };
        }

        const payload = {
            time: new Date().toISOString(),
            userId: result.id,
        };

        let jwtSecretKey = process.env.SECRET_KEY;

        const token = jwt.sign(payload, jwtSecretKey);

        return {
            success: true,
            authenticated: true,
            message: "Authentication successful",
            token: token,
        };
        // if (username == "admin" && password == "admin") {
        //     let jwtSecretKey = "happiness";
        //     let datecommon = {
        //         time: Date(),
        //         userId: 12,
        //     };

        //     const token = jwt.sign(datecommon, jwtSecretKey);
        //     console.log(token);
        //     return {
        //         success: true,
        //         authenticated: true,
        //         message: "Authentication successful",
        //         token: token,
        //     };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "An error occurred during authentication",
            error: error,
        };
    }

    // const fetch = `SELECT * FROM studuser WHERE username = ?`;

    // database.query(fetch, [username], (err, result) => {
    //     if (err) {
    //         return res.status(500).send("Database error");
    //     }

    //     if (result.length === 0) {
    //         console.log("User not found");
    //         return res.json({ message: "Incorrect Username or Password" });
    //     }

    //     const user = result[0];
    //     console.log(user);

    //     if (user.password !== password) {
    //         console.log("Incorrect Username or Password");
    //         return res.json({ message: "Incorrect password" });
    //     }

    //     let jwtSecretKey = "happiness";
    //     let datecommon = {
    //         time: Date(),
    //         userId: 12,
    //     };
    //     const token = jwt.sign(datecommon, jwtSecretKey);

    //     return {
    //         success: true,
    //         authenticated: true,
    //         message: "Authentication successful",
    //         token: token,
    //     };
    //     // console.log("Good");
    // });
}

// if (username == "admin" && password == "admin") {
//     let jwtSecretKey = "happiness";
//     let datecommon = {
//         time: Date(),
//         userId: 12,
//     };

//     const token = jwt.sign(datecommon, jwtSecretKey);
//     console.log(token);
//     return {
//         success: true,
//         authenticated: true,
//         message: "Authentication successful",
//         token: token,
//     };
// } else {
//     console.log(err);
// }

module.exports = {
    addAuthentication,
};
