const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    console.log("Someone is launching our website");
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/animals",(req,res) => {
    console.log("Someone is requesting our API");
    const animals = [];
    animals[0] = {
        name: "lion",
        color: "yellow",
        state: "fierce",
        img: "images/lion.jpg"
    };
    animals[1] = {
        name: "bear",
        color: "white",
        state: "timid",
        img: "images/bear.jpg"
    };
    animals[2] = {
        name: "penguin",
        color: "black and white",
        state: "playful",
        img: "images/penguin.jpg"
    };

    console.log(animals);
    res.json(animals);
});


app.listen(3000, () => {
    console.log("listening");
});