const newsModel = require("../models/newsModel");

exports.getAllNews = async (req, res) => {
	try {
		const news = await newsModel.getAllNews();
		res.status(200).json(news);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
};

exports.getNewsById = async (req, res) => {
	const { id } = req.params;
	try {
		const news = await newsModel.getNewsById(id);
		if (!news) {
			return res.status(404).send("News not found");
		}
		res.status(200).json(news);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
};

exports.createNews = async (req, res) => {
	const { title, image, content, id_user } = req.body;
	try {
		const rowCount = await newsModel.createNews(title, image, content, id_user);
		res.status(201).send("News created successfully");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
};
