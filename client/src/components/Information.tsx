import React from "react";

interface InformationProps {
	date?: Date;
}

const Information: React.FC<InformationProps> = ({ date }) => {
	const formattedDate = date
		? date.toLocaleTimeString([], { hour12: false })
		: "";

	return (
		<div className="infor">
			<div className="infor_time">
				<p className="infor_time_p">{formattedDate}</p>
			</div>
			<div className="infor_content">
				<img src="" className="infor_content_img" />
				<p className="infor_content_p">
					CaiXin - PMI (Nghiệp sản xuất) Trung Quốc
				</p>
			</div>
			<div className="infor_bottom">
				<div className="infor_bottom_option">
					<p className="infor_bottom_p">
						Trước đó:<span className="infor_bottom_span">49.50</span>{" "}
					</p>
				</div>
				<div className="infor_bottom_option">
					<p className="infor_bottom_p">
						Kỳ vọng:<span className="infor_bottom_span">49.50</span>{" "}
					</p>
				</div>
				<div className="infor_bottom_option">
					<p className="infor_bottom_p">
						Thực tế:<span className="infor_bottom_span">50.50</span>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Information;
