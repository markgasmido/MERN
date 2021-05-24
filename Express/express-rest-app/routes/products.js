const ROUTER = require("express").Router();
const PRODUCT = require("../models/product");

// get all products => works
ROUTER.get("/products", async (req, res) => {
    const PROD = await PRODUCT.find();
    res.send(PROD);
})

// Get one Product => error handling needed
ROUTER.get("/products/find/:name", async (req, res, next) => {
    const NAME = req.params.name;
    const PROD = await PRODUCT.findOne({ name: NAME },
        (err, prod) => {
            if (err) {
                console.error("error occured: ", err);
                res.send(err.stack);
            } else {
                try {
                    console.log("product found: ", prod.name, prod.price);
                    res.send(`Product: ${prod.name}, ${prod.price}`);
                } catch (e) {
                    const myNotFoundError = new Error(`${NAME} not found in database`);
                    next(myNotFoundError);
                };
            };


        })
});


// find by ID => works
// ROUTER.get("/products/find/id/:id", async (req, res) => {
//     const PROD = await PRODUCT.find(
//         { _id: req.params.id },
//         "name price",
//         (err, prod) => {
//             if (err) {
//                 console.error(err);
//                 res.send(err.stack);
//             } else {
//                 try {
//                     console.log("product found: ", prod[0].name, prod[0].price);
//                     res.send(prod);
//                 } catch (e) {
//                     const myNotFoundError = new Error(`${NAME} not found in database`);
//                     next(myNotFoundError);
//                 }
//             }
//         }
//     );
// })

// create products => works
ROUTER.post("/products", async (req, res) => {
    const PROD = new PRODUCT({
        name: "carrots",
        price: 1.23
    });
    await PROD.save();
    res.send(PROD);
})

// update products => works - update more than banana
ROUTER.put("/products/:name", async (req, res, next) => {

    const PROD = await PRODUCT.findOne({ name: req.params.name },
        async (err, prod) => {
            if (err) {
                console.log("Item does not exist", err);
                res.status(404).send(err.stack);
            } else {
               
                try {
                    prod.name = "banana";
                    prod.price = 3.99;
                    await prod.save();
                    res.status(202).send(`${prod} has been updated`);
                }
                catch (error) {
                    const myNotFoundError = new Error(`${req.params.name} not found in database`);
                    next(myNotFoundError);
                }
            }

        });



})


// delete products
ROUTER.delete("/products/del", async (req, res, next) => {
    const NAME = req.query.name;

    await PRODUCT.findOneAndDelete({ name: { $eq: NAME } }, function (err, prod) {
        // Handles error in request
        if (err) {
            res.send(err.stack);
        } else {
            // Handles whether returned products exists or not
            try {
                res.send(`${prod.name} has been deleted from products database`);
                console.log(`Deleted user: ${prod}`);
            } catch (error) {
                const notFoundErr = new Error(`${NAME} not found in database, can't delete!`);
                next(notFoundErr);
            }
        }
    })

});

module.exports = ROUTER;