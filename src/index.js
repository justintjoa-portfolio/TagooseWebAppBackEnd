var users = require('./routes/users.js');
const express = require("express");
const path = require("path")

const app = express()
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.use("/users", users);


app.listen(3000, () => console.log("Running on localhost:3000"));


