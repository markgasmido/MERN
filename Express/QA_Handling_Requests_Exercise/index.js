const express = require("express");
const app = express();

const LOGGER = (req,res,next) => {
    console.log(new Date());
    next();
}
app.use(LOGGER);


// request handler for get requests at /
app.get("/",LOGGER,(req,res) => {
    res.send("Hello, my name is !");
});

//create a non-constant array containing names
let people = ["Mark","Neel","Lamarr","Philip"];

// request handler for get requests /getAll
app.get("/getAll",(req,res) =>{
    res.send(people);
});

// request handler - fetches person at index in url
app.get("/get/:id",(req,res)=>{
    res.send(people[req.params.id]);
});

// request handler - deletes the name at the index in url
app.get("/delete/:id",(req,res) => {
    res.send(people.splice(req.params.id,1));
});

// request handler - creates a new name - by sending json object
app.use(express.json());
app.post("/create",(req,res)=>{
    const person = req.query.name;
    people.push(person);
    res.status(201).send(`${person} successfully added`);
});

//same as above but using a req body instead of query
app.use(express.json());
app.post("/createAlternative",(req,res) =>{
    const person = req.body.name;
    people.push(person);
    res.status(201).send(`${req.body.name} successfully added`);
});

// request handler - replaces a name in the array 
app.use(express.json());
app.patch("/update/:id",(req,res) =>{
    const newPerson = "hello";
    const index = req.params.id;
    const toUpdate = people[index];
    people[index] = newPerson;
    res.status(202).send(`${toUpdate} updated to ${newPerson} `);
});


app.listen(1371);