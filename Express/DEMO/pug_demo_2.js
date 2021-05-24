const EXPRESS = require("express");
const APP = EXPRESS();


APP.set("view engine", "pug");
APP.set("views", "./views");

APP.get("/dynamic_view", (req, res) => {
    res.render("dynamic", {
        name: "QAC",
        url: "http://www.qa.com"
    });
})


APP.listen(1371);