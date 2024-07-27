const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
    res.send("<form action='/add-products' type='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>")
})

router.post("/add-products", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

module.exports = router;