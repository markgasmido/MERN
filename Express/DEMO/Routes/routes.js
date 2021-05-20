const ROUTER = require("express").Router();

//DEMO 2A
ROUTER.get("/read", (req, res) => {
    console.log("fetch");
});
//curl http://localhost:1371/get

//
ROUTER.get("/name", (req, res) => {
    res.send("hello,my name is mark");
});
//curl http://localhost:1371/name

const fruits = ["banana", "mango", "durian"];
//DEMO 2B
ROUTER.get("/getAll", (req, res) => {
    res.send(fruits);
});
//curl http://localhost:1371/getAll

//DEMO 2C
ROUTER.get("/get/:id", (req, res) => {
    res.send(fruits[req.params.id]);
});
//curl http://localhost:1371/get/1

ROUTER.get("/delete/:id", (req, res) => {
    res.send(fruits.splice(req.params.id, 1));
})
//curl http://localhost:1371/delete/1

//DEMO 2D

ROUTER.post("/create", (req, res) => {
    const name = req.body.name;
    fruits.push(name);
    res.status(201).send(`${name} added successfully`);
})
//curl -X post "http://localhost:1371/create"

//DEMO 2E
ROUTER.post("/replace/:index", (req, res) => {
    const name = "apple";
    const index = req.params.index;
    const old = fruits[index];
    fruits[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
})
//curl -X post "http://localhost:1371/replace/1"


//EXPORT
module.exports = ROUTER;