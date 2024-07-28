const express = require("express");
const path = require("path")

const router = express.Router();

const rootDir = require('../util/path')

router.get("/add-product", (req, res, next) => {
    // res.send("<form action='/add-products' type='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>")
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
})

router.post("/add-products", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

module.exports = router;