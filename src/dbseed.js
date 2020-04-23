const mysql = require('mysql');

const con = mysql.createConnection({
    host: "tagoosedev.cm63orfguism.us-east-1.rds.amazonaws.com",
    user: "root",
    password: "fOrtranmyeggo124",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = con;