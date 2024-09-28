const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

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
			host: "localhost",
			port: 3306,
			user: "root",
			password: "Virvil30",
			database: "mod4_final_virvil",
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

	console.log(req.body);

	const [results, columns] = await conn.execute(
		`INSERT INTO books (name, type, reg_date, breed, age)
      VALUES (?, ?, ?, ?, ?)`,
		[req.body.name, req.body.category, req.body.year, req.body.platform_id]
	);

	console.log(results);

	res.json({
		success: true,
		id: results.insertId,
	});

	conn.close();
});
