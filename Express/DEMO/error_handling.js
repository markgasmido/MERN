const EXPRESS = require("express");
const APP = EXPRESS();



const ERR = new Error("There is an error");


// Method 1 - creating an error object
APP.get("/error",(req,res,next) => {
    const ERR2 = new Error("Useful error message");
    next(ERR2);
});


// Method 2 - error middleware
const ERRORLOGGER = (err,req,res,next) => {
    console.log(err.stack);
    next(err);
};
APP.use(ERRORLOGGER);

// Method 3 - error status 
const SENDERROR = (err,req,res) => {
    req.status(500).send(err.message);
};
APP.use(SENDERROR);



// Method 4 - throwing an error
APP.get("/error2",(req,res,next)=>{
    throw new ERROR("ANOTHER ERROR MESSAGE!!");
    next();
});




APP.listen(1371);