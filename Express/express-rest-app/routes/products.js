const ROUTER = require("express").Router();
const PRODUCT = require("../models/product");

// get all products
ROUTER.get("/products", async (req, res) => {
    const PROD = await PRODUCT.find();
    res.send(PROD);
})

// Get one Product
ROUTER.get("/products/:name", async (req, res) => {
    const PROD = await PRODUCT.findOne({ name: req.params.name },
        (err, prod) => {
            if (err) {
                console.error("error occured: ", err);
                res.send(err.stack);
            } else {
                console.log("product found: ", prods.name, prods.price);
            }
        });
    res.send(PROD);
    //.findById(req.params.id);
    /**
     * res.status(204).send("${name} was not found");
     * 
     *res.status  
     * */

    // const PRODTEST = await PRODUCT.findOne({name: req.params.name}, (err, prod) => {

    // })
})

// find by ID
ROUTER.get("/products/find/:id", async (req, res) => {
    const PROD = await PRODUCT.find(
        { _id: req.params.id },
        "name price",
        (err, prod) => {
            if (err) {
                console.error(err);
                res.send(err.stack);
            } else {
                console.log("product found: ", prod.name, prod.price);
                res.send(prod);
            }
        }
    );
})

// create products
ROUTER.post("/products", async (req, res) => {
    const PROD = new PRODUCT({
        name: "carrots",
        price: 1.23
    });
    await PROD.save();
    res.send(PROD);
})

// update products

ROUTER.put("/products/:name", async (req, res) => {

    const PROD = await PRODUCT.findOne({ name: req.params.name }),
    (err, prod) => {
        if (err) {
            console.log("error", err);
            res.send(err.stack);
        } else {
            prod.name - "banana";
            await PROD.save();

            res.status(202).send(`${PROD} has been updated`);
        }
    }



})

//update products with find 
ROUTER.put("/products/:id", async (req, res) => {
    const PROD = await PRODUCT.find(
        { _id: req.params.id },
        "name price",
        (err, prod) => {
            if (err) {
                console.log("error", err);
                res.send(err.stack);
            } else {
                let newName = "banana";
                let oldNamme = prod.name;
                prod.name = newName;
                await prod.save();
                res.status(202).send(`${oldName} updated to ${prod.name}`);
            }
        }
    )
})

// delete products
ROUTER.delete("/products/del", async (req, res) => {
    const NAME = req.query.name;
    // await PRODUCT.deleteOne({ name: NAME });
    await PRODUCT.findOneAndDelete({ name: NAME }, (err, prod) => {
        if (err) {
            res.status(404).send(`${NAME} was not found in database.`);
        } else {
            res.status(204).send(`${NAME} has been deleted from products database`);

        }
    });

})

//delete products with id
ROUTER.delete("/products/delete", async (req, res) => {
    const PROD = await PRODUCT.find(
        { _id: req.params.id },
        "name price",
        (err, prod) => {
            if (err) {
                console.log("error occurd: ", err);
                res.send(err.stack);
            } else {
                PROD.deleteOne({ _id: req.params.id });
                res.send("delete success");
            }
        })
})


module.exports = ROUTER;