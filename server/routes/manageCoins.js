const db       = require('../database/IDatabase');
const database = new db( "/database.json" );
const express  = require('express');
const router   = express.Router();

// GET
router.get("/get", (req, res) => {

    res.send(database.get());
})


// ADD
router.post('/add', (req, res) => {

    let data = req.body;

    if (!data) res.sendStatus(400);

    console.log("Adding coin");
    console.table(data);

    database.add(data);

    res.sendStatus(201);
})


// UPDATE
router.put('/update', (req, res) => {

    let data = req.body;

    if (!data) res.sendStatus(400);

    console.log("Updating coin");
    console.table(data);

    database.update(data);

    res.send("Update success");
})


// DELETE
router.delete('/delete', (req, res) => {

    let currencyApiName = req.body.currencyApiName;

    if (!currencyApiName) res.sendStatus(400);

    console.log("Deleting coin");
    console.table(currencyApiName);

    database.delete(currencyApiName);

    res.send("Delete Success");
})

module.exports = router