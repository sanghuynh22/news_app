const pool = require("../config/db");

exports.getAllUsers = async () => {
	const query = "SELECT * FROM users";
	const { rows } = await pool.query(query);
	return rows;
};
exports.getUserByLogin = async (name, password) => {
	const query = "SELECT * FROM users WHERE name = $1 and password = $2";
	const values = [name, password];
	const { rows } = await pool.query(query, values);
	return rows[0];
};
exports.getUserById = async (id) => {
	const query = "SELECT * FROM users WHERE id = $1";
	const values = [id];
	const { rows } = await pool.query(query, values);
	return rows[0];
};

exports.createUser = async (name, password) => {
	console.log("pool", pool);
	const query = "INSERT INTO users (name, password) VALUES ($1, $2)";
	const values = [name, password];
	const { rowCount } = await pool.query(query, values);
	return rowCount;
};
