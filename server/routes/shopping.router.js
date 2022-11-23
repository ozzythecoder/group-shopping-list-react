const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) =>{
    console.log('in GET shopping items');
    let queryText ='SELECT * from "shopping-table"';

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR: GET shopping items: ',error);
            res.sendStatus(500);
        })
});

module.exports = router;