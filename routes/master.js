const express = require("express");
const router = express.Router();
const cors = require("cors");

const login = require("./login.route");

const corsSetting = {
    credentials: true,
    origin: "http://192.168.1.101:8081/",
};

const registeredRoute = (app) => {
    app.use(cors(corsSetting));
    app.use("/login", login);
};

module.exports = registeredRoute;
