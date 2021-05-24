const EXPRESS = require("express");
const APP = EXPRESS();


APP.set("view engine", "pug");
APP.set("views", "./views");

APP.get("/demo", (req, res) => {
    res.render("pugpug", {
        user: {name:"eric",age:"20"},
    });
})


APP.listen(1371);