const express = require("express");
const router = express.Router();

const users = [
    {
        id: 1,
        user: "240001",
        pass: "super-admin",
    },
    {
        id: 2,
        user: "240002",
        pass: "super-admin",
    },
];

router.post("/", (req, res) => {
    const { username, password } = req.body;

    const foundUser = users.find(
        (u) => u.user === username && u.pass === password,
    );

    if (foundUser) {
        console.log("\x1b[30m\x1b[47m%s\x1b[0m", "Great! User authenticated.");
        return res.json({ message: "Login Successful", userId: foundUser.id });
    } else {
        console.log("Invalid username or password.");
    }
});

module.exports = router;
