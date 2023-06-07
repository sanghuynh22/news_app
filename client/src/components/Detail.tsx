import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../actions/news/getAllNews";
import moment from "moment";
import { getAllUser } from "../actions/user/getAllUser";
interface NewsItem {
	id: string;
	title: string;
	content: string;
	id_user: string;
	created_at: string;
	image: string;
}

const Detail = () => {
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>(); //
	const { news } = useSelector((state: any) => state.news.getAllNews);
	const { userList } = useSelector((state: any) => state.user.getAllUser);

	useEffect(() => {
		dispatch(getAllNews()).then(() => {
			console.log("get all news detail success!");
		});
		dispatch(getAllUser());
	}, [id]);
	function levenshteinDistance(a: string, b: string) {
		const distanceMatrix = Array(b.length + 1)
			.fill(null)
			.map(() => Array(a.length + 1).fill(null));

		for (let i = 0; i <= a.length; i += 1) {
			distanceMatrix[0][i] = i;
		}

		for (let j = 0; j <= b.length; j += 1) {
			distanceMatrix[j][0] = j;
		}

		for (let j = 1; j <= b.length; j += 1) {
			for (let i = 1; i <= a.length; i += 1) {
				const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
				distanceMatrix[j][i] = Math.min(
					distanceMatrix[j][i - 1] + 1,
					distanceMatrix[j - 1][i] + 1,
					distanceMatrix[j - 1][i - 1] + indicator
				);
			}
		}

		return distanceMatrix[b.length][a.length];
	}
	function getSimilarNews(newsList: NewsItem[], currentNewsTitle: string) {
		const similarNews = newsList
			?.filter((news) => news.id !== theNews?.id)
			?.map((news) => ({
				title: news.title,
				distance: levenshteinDistance(news.title, currentNewsTitle),
				image: news.image, // Add the "image" property here
			}))
			.filter(({ distance }) => distance !== null && distance < 5)
			.sort((a, b) => a.distance - b.distance)
			.slice(0, 6);

		return similarNews;
	}

	const theNews: any = useMemo(() => {
		const foundNews: NewsItem | undefined = news?.find(
			(singleNews: NewsItem) => singleNews.id.toString() === id?.toString()
		);
		console.log("userlist: ", userList);
		return foundNews ?? null;
	}, [id, news]);
	const theAuthor = useMemo(() => {
		const foundNewsAuthor: any | undefined = userList.find(
			(user: any) => user.id.toString() === theNews?.id_user.toString()
		);
		console.log("author", foundNewsAuthor?.name);
		return foundNewsAuthor ?? null;
	}, [id, news]);
	const similarNews = useMemo(
		() => getSimilarNews(news, theNews?.title),
		[news, theNews, id]
	);

	return (
		<div className="container">
			<Header />
			<div className="detail">
				<div className="detail_top">
					<p className="detail_title">{theNews?.title}</p>
					<p className="detail_time">
						{moment(theNews?.created_at).format("DD/MM/YYYY HH:mm")}
					</p>
				</div>
				<div className="detail_content">{parse(theNews?.content ?? "")}</div>
				<div className="detail_author">
					<p className="detail_author_p">{theAuthor?.name}</p>
				</div>
				<p className="detail_options_label">Gợi ý</p>

				<div className="detail_options">
					{similarNews?.map((news) => (
						<div className="detail_option" key={news.title}>
							<img src={news?.image} className="detail_option_img" />
							<p className="detail_option_p">{news.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Detail;
