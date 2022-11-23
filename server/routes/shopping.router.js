const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	console.log('in GET shopping items');
	let queryText = 'SELECT * from "shopping_table"';

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


module.exports = router;