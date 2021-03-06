const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/products", function(req, res) {
    return res.render("products")
})

server.get("/products-details", function(req,res) {
    return res.render("products-details")
})

server.listen(5500, function() {
    console.log("server is running")
})