//import express module
let express = require('express')
//create router instance
let router = express.Router()
//import database connection
let conn = require('../config/db_connection')
//get connection object
let connection = conn.getConnection()
//connect to database
connection.connect()
//create rest api
router.get("/", (req, res) => {
    connection.query(`select * from products`, (err, recordsArray) => {
        if (err)
            res.json({ 'message': 'Error ' + err })
        else {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})
//export router
module.exports = router

