const express = require("express");
const app = express();

const LOGGER = (req, res, next) => {
    console.log(new Date());
    next();
}
// request handler for get requests at / - middleware implemented.
app.get("/", LOGGER, (req, res) => {
    res.send("Hello, my name is !");
});

app.listen(1371);