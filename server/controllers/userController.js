const userModel = require("../models/userModel");
require("dotenv").config();

exports.getAllUsers = async (req, res) => {
	try {
		const users = await userModel.getAllUsers();
		res.json(users);
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};
exports.getUserById = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await userModel.getUserById(id);
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};
exports.login = async (req, res) => {
	const { name, password } = req.body;

	try {
		const user = await userModel.getUserByLogin(name, password);
		if (!user) {
			res.status(401).json({ message: "Invalid username or password" });
			return;
		}
		const payload = {
			userId: user.id,
			role: user.role || "user",
		};
		const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
			expiresIn: "12h",
		});
		res.cookie("token", token, { httpOnly: true, secure: true });
		res.status(200).json(user);
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};
exports.logout = async (req, res) => {
	try {
		res.clearCookie("token");
		res.status(200).send("Logout successful");
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};

exports.createUser = async (req, res) => {
	const { name, password } = req.body;

	try {
		const result = await userModel.createUser(name, password);
		res.status(200).json(result);
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};
