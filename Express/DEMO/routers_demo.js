const EXPRESS = require("express");
const APP = EXPRESS();

const ROUTES = require("./Routes/routes");

APP.use(EXPRESS.json());
APP.use(ROUTES);

APP.listen(1371);