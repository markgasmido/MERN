const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;


const PRODUCTSCHEMA = new SCHEMA({
    name: String,
    price: String,

})

module.exports = MONGOOSE.model("products",PRODUCTSCHEMA);