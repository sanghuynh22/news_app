import React from "react";

const CreateFastNews = () => {
	return (
		<div className="create-fastnews">
			<h2 style={{ margin: "20px 0" }}>Fast News</h2>
			<div className="createnews">
				<div className="createnews_title">
					<textarea className="creat-fastenews_textarea" />
				</div>
			</div>
			<button onClick={() => console.log("")} style={{ marginTop: "60px" }}>
				Create
			</button>
		</div>
	);
};

export default CreateFastNews;
