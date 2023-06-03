import React from "react";
import Header from "../components/Header";
import New from "../components/New";

const Home = () => {
	return (
		<div className="container">
			<Header />
			<div className="home_chart">{/* BTC */}</div>
			<New />
			<div className="home_footer">@SangHuynh</div>
		</div>
	);
};

export default Home;
