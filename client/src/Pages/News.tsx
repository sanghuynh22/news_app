import React, { useState } from "react";
import Header from "../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import New from "../components/New";

const News = () => {
	const [searchDate, setSearchDate] = useState<string>(
		new Date().toISOString().substr(0, 10)
	);

	return (
		<div className="container">
			<Header />
			<div className="news_search">
				<div className="news_search_bar">
					<input placeholder="Tìm kiếm" className="news_search_input" />
					<AiOutlineSearch className="charts_search_iocn" />
				</div>
				<div className="news_search_date">
					<input
						type="date"
						className="news_search_date"
						value={searchDate}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setSearchDate(event.target.value)
						}
					/>
				</div>
			</div>
			{[1, 2, 3, 4, 5, 6, 7].map(() => (
				<New />
			))}
		</div>
	);
};

export default News;
