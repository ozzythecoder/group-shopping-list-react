const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	console.log('in GET shopping items');
	let queryText = 'SELECT * from "shopping_table" ORDER BY is_purchased, name';

	pool.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('ERROR: GET shopping items: ', error);
			res.sendStatus(500);
		})
});

router.post('/', (req, res) => {

	const newItem = req.body;

	console.log(newItem)

	let queryText = `
		INSERT INTO "shopping_table" ("name", "quantity", "unit")
		VALUES ($1,$2,$3);`;
	pool.query(queryText, [newItem.name, newItem.quantity, newItem.unit])
		.then((result) => {
			res.sendStatus(201);
		}).catch(error => {
			console.log('Error found in router.post.. ', error);
			res.sendStatus(500);
		});
})


router.put('/reset', (req, res) => {
  let queryText = `UPDATE "shopping_table"
    SET "is_purchased" = false`

    pool.query(queryText)
      .then(result => {
        console.log('shopping list reset');
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('error in router.put:', error);
        res.sendStatus(500);
      })
})

router.put('/:id', (req, res) => {
  const purchasedId = req.params.id;
  console.log(purchasedId);
  let queryText = `UPDATE "shopping_table"
    SET "is_purchased" = true WHERE "id" = $1`
  
  pool.query(queryText, [purchasedId])
    .then(result => {
      console.log('marked item as purchased');
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('Error in router.put:', error);
      res.sendStatus(500);
    })
})
//remove button
router.delete('/:id', (req, res) =>{
	let id = req.params.id
	console.log('in router.delete');

	let queryText = `DELETE from "shopping_table" WHERE id = $1`

	pool.query(queryText, [id])
	.then(() => {
		console.log('router.DELETE went well')
		res.sendStatus(200);
	}).catch(error => {
		console.log('Error found in router.DELETE.. ', error);
		res.sendStatus(500);
	});
})
//clear button delete
router.delete('/', (req, res) => {
	
	console.log('in ShoppingList Delete');

	let queryText = `TRUNCATE TABLE "shopping_table";`;

	pool.query(queryText)
	.then(() => {
		console.log('CLEAR table went well')
		res.sendStatus(200);
	}). catch(error => {
		console.log('error in CLEAR table', error);
		res.sendStatus(500);
	});
})

module.exports = router;