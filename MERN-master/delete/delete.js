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
router.post("/", (req, res) => {
    let p_id = req.body.p_id
    connection.query(`delete from products where p_id = ${p_id}`,
        (err, result) => {
            if (err)
                res.json({ 'delete': 'error ' + err })
            else {
                if (result.affectedRows != 0) {
                    console.log('Data deleted')
                    res.json({ 'delete': 'success' })
                }
                else {
                    console.log('Not deleted')
                    res.json({ 'delete': 'failed' })
                }
            }
        })
})
//export router
module.exports = router
