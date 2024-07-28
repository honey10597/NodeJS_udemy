const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const rootDir = require("./util/path")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes)
app.use("/shop", shopRoutes)

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page not found</h1>")
    res.sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(8080)