const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const MOVIESCHEMA = new SCHEMA({
    title: String,
    description: String,
    release_date: { type: Date, default: Date.now },
    actors: [{ name: String, age: Number }]
})

mondule.exports = MONGOOSE.model("movies", MOVIESCHEMA);