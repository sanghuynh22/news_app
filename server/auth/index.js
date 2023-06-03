const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorize = async (role) => {
	return (req, res, next) => {
		const token = req.cookies.token;
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
		const userId = decodedToken.id;
		const userRole = decodedToken.role;

		if (userRole === role || userRole === "admin") {
			next();
		} else {
			res.status(401).json({ message: "Unauthorized" });
		}
	};
};
module.exports(authorize);
