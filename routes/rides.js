const mysql = require('mysql2');
const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig);
var express = require('express');
var router = express.Router();

router.post('/insert', (req, res)=>{
    const name = req.body.name

    connection.query('insert into user(name) values(?)',[name],(err, rows)=>{
        if(err) throw err;
    });
    res.status(200).json({
        "message" : true
    })
    
})

module.exports = router;