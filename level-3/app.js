const { log } = require('console');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

const operationRoutes = require("./routes/operations")

mongoose.connect(process.env.DATABASE).then((data) => {
    log("Database is connected!")
});

app.use("/api", operationRoutes);

app.get("/", (req, res)=> {
    res.send("<h1>Working</h1>")
});


app.listen(5000, () => {
    log("Server is running at port 5000")
})