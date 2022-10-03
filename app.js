
const express = require('express');
const app = express();
const port = 8080;
require('./model/tutmodel');
app.get("/", (req, res) => {
    res.send("Home page")
})

app.listen(port, ()=>{
    console.log(`app is listening at http://localhost:${port}`);
})

