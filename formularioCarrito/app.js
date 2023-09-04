const express = require('express');
const app = express();
const path = require("path");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen (3001,() => console.log("Levantando un servidor con Express"))
app.get("/",function (req, res) {

    res.sendFile(path.join(__dirname,"listado","listado.html"))
    
})
