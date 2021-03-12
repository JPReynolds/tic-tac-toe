const express = require("express");
const cors = require("cors");
const router = require("./routes/route");
const { handleErrors } = require("./errors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/games", router);

app.use(handleErrors);


module.exports = app;