const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => { 
    res.send("o começo");
});

app.listen(3000, () => {
    console.log("rodou ta bom http://localhost:3000");
});