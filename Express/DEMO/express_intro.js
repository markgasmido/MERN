const express = require("express");
const app = express();
const server = app.listen(1371);

app.get('/', (req, res) => {
    res.send(`server started successfully on port number ${server.address().port}`);
})
