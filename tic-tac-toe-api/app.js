const express = require("express");
const app = express();
app.use(express.json());
const router = require("./routes/route");
const { handleErrors } = require("./errors");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/games", router);

app.use(handleErrors);


module.exports = app;