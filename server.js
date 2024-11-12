const express = require("express");
const database = require("./mysql");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 5050;

app.use(express.json());
routes(app);

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

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     const foundUser = users.find(
//         (u) => u.user === username && u.pass === password,
//     );

//     if (foundUser) {
//         console.log("\x1b[30m\x1b[47m%s\x1b[0m", "Great! User authenticated.");
//         return res.json({ message: "Login Successful", userId: foundUser.id });
//     } else {
//         console.log("Invalid username or password.");
//     }
// });

app.listen(port, () => {
    console.log("\x1b[32m%s\x1b[0m", "[ MOBILE APP SERVER ] listening on", {
        port,
    });
});
