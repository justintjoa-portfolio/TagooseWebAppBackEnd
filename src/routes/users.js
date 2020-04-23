const express = require("express");
const con = require("../dbseed.js")
const users = express.Router();
console.log('internal')
users.post('/', (req, res) => {
    if (req.query.latitude && req.query.longitude && req.query.bearing && req.query.imageurl) {
        console.log('Request received');
        con.connect(function(err) {
            con.query(`INSERT INTO USER_DATA.table1 (latitude, longitude, bearing, imageurl) VALUES ('${req.query.latitude}', '${req.query.longitude}', 
            '${req.query.bearing}', '${req.query.imageurl}')`, function(err, result, fields) {
                if (err) res.send(err);
                if (result) res.send({
                    latitude: req.query.latitude, longitude: req.query.longitude, bearing: req.query.bearing, imageurl: req.query.imageurl
                });
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing a parameter');
    }
});

users.get('/', (req, res) => {
    con.connect(function(err) {
        con.query(`SELECT * FROM USER_DATA.table1`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});



module.exports = users;
