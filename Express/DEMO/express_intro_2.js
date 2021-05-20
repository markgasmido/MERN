const express = require("express"); // import express module

const app = express(); // call express function

app.get('/', (req, res) => {
    res.send("quack quack");
})



app.listen(3000);
