import React from "react";
import Header from "../components/Header";
import Information from "../components/Information";
interface NewsData {
	content: string;
	createdAt: Date;
}

const FastNews: React.FC = () => {
	// Mock news data
	const newsData: NewsData[] = [
		{ content: "News 1", createdAt: new Date("2023-06-01T10:00:00Z") },
		{ content: "News 2", createdAt: new Date("2023-06-01T11:00:00Z") },
		{ content: "News 3", createdAt: new Date("2023-05-31T09:00:00Z") },
		{ content: "News 4", createdAt: new Date("2023-05-30T08:00:00Z") },
	];

	const newsByDate: Record<string, NewsData[]> = newsData.reduce(
		(acc, news) => {
			const dateStr: string = news.createdAt.toLocaleDateString("en-US", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			});
			if (!acc[dateStr]) {
				acc[dateStr] = [];
			}
			acc[dateStr].push(news);
			return acc;
		},
		{} as Record<string, NewsData[]>
	);

	return (
		<div className="container">
			<Header />
			<div className="fastnews">
				{Object.entries(newsByDate).map(([date, newsList]) => (
					<React.Fragment key={date}>
						<div className="fastnew_label_container">
							<p className="fastnews_label">{date}</p>
						</div>
						{newsList.map((news) => (
							<Information date={news.createdAt} />
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default FastNews;
