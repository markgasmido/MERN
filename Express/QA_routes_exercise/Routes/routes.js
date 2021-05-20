const ROUTER = require("express").Router();

const LOGGER = (req, res, next) => {
    console.log(new Date());
    next();
}
ROUTER.use(LOGGER);

// request handler for get requests at /
ROUTER.get("/", LOGGER, (req, res) => {
    res.send("Hello, my name is !");
});

//create a non-constant array containing names
let people = ["Mark", "Neel", "Lamarr", "Philip"];

// request handler for get requests /getAll
ROUTER.get("/getAll", (req, res) => {
    res.send(people);
});

// request handler - fetches person at index in url
ROUTER.get("/get/:id", (req, res) => {
    res.send(people[req.params.id]);
});

// request handler - deletes the name at the index in url
ROUTER.get("/delete/:id", (req, res) => {
    res.send(people.splice(req.params.id, 1));
});

// request handler - creates a new name - by sending json object
ROUTER.post("/create", (req, res) => {
    const person = req.query.name;
    people.push(person);
    res.status(201).send(`${person} successfully added`);
});

//same as above but using a req body instead of query
ROUTER.post("/createAlternative", (req, res) => {
    const person = req.body.name;
    people.push(person);
    res.status(201).send(`${req.body.name} successfully added`);
});

// request handler - replaces a name in the array 
ROUTER.patch("/update/:id", (req, res) => {
    const newPerson = "hello";
    const index = req.params.id;
    const toUpdate = people[index];
    people[index] = newPerson;
    res.status(202).send(`${toUpdate} updated to ${newPerson} `);
});

module.exports = ROUTER;
