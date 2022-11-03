const express = require("express");
let port = process.env.port || 7000;
const app = express();
let apiquote = require("./da.json")

app.use(express.json())

console.log(apiquote);

app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/quoteslist", (req, res) => {
    res.send(apiquote)
})

app.get("/quote", (req, res) => {
    res.send(apiquote[Math.floor(Math.random() * apiquote.length)])
})

app.listen(port, () => {
    console.log(`listening at the port${port}`);
})