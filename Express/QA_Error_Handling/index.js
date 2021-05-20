const EXPRESS = require("express");
const APP = EXPRESS();



APP.get("/endPoint",(req,res,next) => {
    const ERR = new Error("throw throw throw");
    next(ERR);
});

const STACK = (err,req,res,next) => {
    console.log(err.stack);
    next(err);
}
APP.use(STACK);

const PROMPT = (err,req,res,next) => {
    res.status(500).send(`yo something went wrong - ${err.message}`);
    next(err);
}
APP.use(PROMPT);

APP.listen(4000);


