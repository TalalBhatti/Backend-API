// Importing the required modules
const express = require("express");
const app = express();
const cors = require("cors");

// Setting the port number
const Port = 3000;

// Adding middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parsing JSON bodies
app.use(express.json());

// Parsing URL-encoded bodies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Root route
app.get("/", (req, res) => {
    console.log("Root API Hit");
    res.send({
        course: "Getting Started with NodeJs"
    });
});

// Todo route
app.get("/todo", (req, res) => {
    console.log("API hitted for /todo");
    res.send("Get to learn about Git, GitHub, Nodejs, Version-controlling");
});

// Starting the server
app.listen(Port, () => {
    console.log(`Server is running on Node.js port ${Port}`);
});