const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

// Crear el servidor
const server = express();

// Configuración
server.use(cors());
server.use(express.json());

const port = 4000; // 1025 - 65365

// Ponemos a escuchar el servidor
server.listen(port, () => {
	console.log(`Servidor iniciado escuchando en http://localhost:${port}`);
});

// Endpoints

server.get("/", (req, res) => {
	res.send("Mod 4 Virvil  v1.0");
});

async function getConnection() {
	try {
		const conn = await mysql.createConnection({
			host: process.env.DATABASE_HOST,
			port: 3306,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		});

		await conn.connect();

		return conn;
	} catch (error) {
		console.log(error);

		return null;
	}
}

server.get("/api/platforms", async (req, res) => {
	const conn = await getConnection();
	if (!conn) {
		res.status(500).send("Se rompió");
		return;
	}
	const [results, columns] = await conn.query("SELECT * FROM platforms;");
	res.json(results);
	conn.close();
});
server.get("/api/books", async (req, res) => {
	const conn = await getConnection();
	if (!conn) {
		res.status(500).send("Se rompió");
		return;
	}
	const [results, columns] = await conn.query("SELECT * FROM books;");
	res.json(results);
	conn.close();
});
server.post("/api/books", async (req, res) => {
	const conn = await getConnection();
	if (!conn) {
		res.status(500).send("Se rompió");
		return;
	}
	const [results, columns] = await conn.execute(
		`INSERT INTO books (name, category, year, platform_id)
	    VALUES (?, ?, ?, ?)`,
		[req.body.name, req.body.category, req.body.year, req.body.platform_id]
	);
	res.json({
		success: true,
		id: results.insertId,
	});

	conn.close();
});

server.put("/api/books/:id", async (req, res) => {
	console.log(req.body);
	console.log(req.params);
	const conn = await getConnection();
	if (!conn) {
		res.status(500).send("Se rompió");
		return;
	}
	const [results] = await conn.execute(
		`UPDATE books
      SET name=?, year=?, category=?, platform_id=?
      WHERE id=?`,
		[
			req.body.name,
			req.body.year,
			req.body.category,
			req.body.platform_id,
			req.params.id,
		]
	);
	if (results.changedRows === 1) {
		res.json({
			success: true,
		});
	} else {
		res.json({
			success: false,
		});
	}
});

server.delete("/api/books/:id", async (req, res) => {
	console.log(req.body);
	console.log(req.params);
	const conn = await getConnection();
	if (!conn) {
		res.status(500).send("Se rompió");
		return;
	}
	const [results] = await conn.execute(
		`DELETE FROM books
      WHERE id=?`,
		[req.params.id]
	);
	if (results.affectedRows === 1) {
		res.json({
			success: true,
		});
	} else {
		res.json({
			success: false,
		});
	}
});
