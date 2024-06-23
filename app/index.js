const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.get('/', async (req, res) => {

	const db = await mysql.createConnection({
	        host: 'mysql',
        	user: 'root',
	        password: 'root',
        	database: 'fullcycle-db'
	});

	const [people] = await db.query('SELECT * FROM people');

	res.send(`<h1>FullCycle Rocks!</h1> </hr> <pre>${JSON.stringify(people)}</pre>`);

});

app.listen(3000, () => console.log('Server running on port 3000'));
