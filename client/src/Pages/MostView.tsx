import React from "react";
import Header from "../components/Header";
import New from "../components/New";

const MostView = () => {
	return (
		<div className="container">
			<Header />
			<div className="mostview">
				{[1, 2, 3, 4, 5].map(() => (
					<New />
				))}
			</div>
		</div>
	);
};

export default MostView;
