import React from "react";
import { FastNews } from "../type";

interface InformationProps {
	date?: Date;
	content?: string;
}

const Information: React.FC<InformationProps> = ({ date, content }) => {
	const formattedDate = date
		? date.toLocaleTimeString([], { hour12: false })
		: "";
	console.log("date", date);
	return (
		<div className="infor">
			<div className="infor_time">
				<p className="infor_time_p">{formattedDate}</p>
			</div>
			<div className="infor_content">
				<p className="infor_content_p">{content}</p>
			</div>
		</div>
	);
};

export default Information;
