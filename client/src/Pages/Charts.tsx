import React from "react";
import Header from "../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
const Charts = () => {
	return (
		<div className="container">
			<Header />
			<div className="charts_search">
				<input placeholder="Tìm kiếm" className="charts_search_input" />
				<AiOutlineSearch className="charts_search_iocn" />
			</div>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Tên</th>
						<th>Giá trị (USD)</th>
						<th style={{ textAlign: "right" }}>Tỉ lệ thay đổi (24h)</th>
						<th style={{ textAlign: "right" }}>Khối lượng giao dịch</th>
						<th style={{ textAlign: "right" }}>Vốn hóa</th>
						<th style={{ textAlign: "center" }}>Biểu đồ</th>
					</tr>
				</thead>
				<tbody>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, i) => (
						<tr>
							<td>{i + 1}</td>
							<td
								style={{
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<img src="" className="tb_img" />
								<p>Bitcoin</p>
							</td>
							<td>37,875.20</td>
							<td style={{ textAlign: "right" }}>-0.56%</td>
							<td style={{ textAlign: "right" }}>-0.56%</td>
							<td style={{ textAlign: "right" }}>-0.56%</td>
							<td style={{ textAlign: "center" }}>-0.56%</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="home_footer">@SangHuynh</div>
		</div>
	);
};

export default Charts;
