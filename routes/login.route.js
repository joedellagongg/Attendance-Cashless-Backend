const express = require("express");
const router = express.Router();

const AuthenticationControllers = require("../controllers/auth.controller.js");

// const users = [
//     {
//         id: 1,
//         user: "240001",
//         pass: "super-admin",
//     },
//     {
//         id: 2,
//         user: "240002",
//         pass: "super-admin",
//     },
// ];
// function queryDatabase(sql, params) {
//     return new Promise((resolve, reject) => {
//         database.query(sql, params, (err, result) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(result);
//         });
//     });
// }
router.post("/", AuthenticationControllers.addAuthentication);

module.exports = router;
