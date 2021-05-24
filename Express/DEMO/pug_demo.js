const EXPRESS = require("express");
const APP = EXPRESS();  


APP.set("view engine","pug");
APP.set("views","./views");

APP.get("/first_template", (req,res) => {
    res.render("first_view");
});

APP.listen(1371);