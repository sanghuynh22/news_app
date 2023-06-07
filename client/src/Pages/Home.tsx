import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import New from "../components/New";
import axios from "axios";
import Chart from "chart.js/auto";
import { getAllNews } from "../actions/news/getAllNews";
import { useDispatch, useSelector } from "react-redux";
import ChartAnnotation from "chartjs-plugin-annotation";
import "chartjs-plugin-crosshair";
const Home = () => {
	const dispatch = useDispatch();
	const [currentPrice, setCurrentPrice] = useState<any>();
	const [dataBTC, setDataBTC] = useState<any>(null);
	const { news } = useSelector((state: any) => state.news.getAllNews);
	const chartRef = useRef<HTMLCanvasElement>(null);
	const [chartInstance, setChartInstance] = useState<Chart | null>(null);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30"
			)
			.then((response) => {
				console.log("data BTC chart : ", response.data);
				setDataBTC(response.data);
				setCurrentPrice(
					response.data.prices[response.data.prices.length - 1][1]
				);
				// if (chartInstance) {
				// 	chartInstance.destroy();
				// }

				const ctx = chartRef.current?.getContext("2d");
				if (ctx) {
					const chart = new Chart(ctx, {
						type: "line",
						data: {
							labels: response.data.prices.map((item: any) => {
								const timestamp = item[0];
								const date = new Date(Number(timestamp));
								return date.toLocaleDateString("vi-VN", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
								});
							}),
							datasets: [
								{
									label: "Giá Bitcoin",
									data: response.data.prices.map((item: any) => item[1]),
									borderColor: "rgba(0,0,255,1)",
								},
							],
						},
						options: {
							responsive: true,
							maintainAspectRatio: false,
							scales: {
								x: {
									ticks: {
										maxTicksLimit: 7,
										callback: function (value: any, index: any, values: any) {
											if (response.data.prices[value]) {
												const timestamp = response.data.prices[value][0];
												console.log("timestamp : ", timestamp);
												const date = new Date(Number(timestamp));
												return date.toLocaleDateString("vi-VN", {
													year: "numeric",
													month: "2-digit",
													day: "2-digit",
													hour: "2-digit",
													minute: "2-digit",
												});
											}
										},
										stepSize: 120, // Hiển thị mỗi 2 giờ trên trục x
									},
								},

								y: {
									ticks: {
										callback: function (value: any, index: any, values: any) {
											return "$" + value;
										},
									},
								},
							},
							elements: {
								line: {
									borderWidth: 1,
									tension: 0,
								},
								point: {
									radius: 0,
								},
							},
							plugins: {
								tooltip: {
									intersect: false,
									mode: "index",
									callbacks: {
										label: function (context: any) {
											return `${Math.floor(context.parsed.y)}`;
										},
									},
								},
								annotation: {
									annotations: [
										{
											type: "line",
											// mode: "vertical",
											scaleID: "x",
											value: new Date().getTime(),
											borderColor: "red",
											borderWidth: 1,
											label: {
												// enabled: true,
												content: "Today",
												// position: "top",
											},
										},
									],
								},
							},
							onHover: function (event, chartElement) {
								if (
									chartInstance &&
									chartInstance.tooltip &&
									chartInstance.tooltip.active
								) {
									const activePoint =
										chartInstance.tooltip.getActiveElements()[0];
									if (activePoint) {
										const ctx = chartInstance.ctx;
										const x = activePoint.element.x;
										const topY = chartInstance.chartArea.top;
										const bottomY = chartInstance.chartArea.bottom;
										// draw vertical line
										ctx.save();
										ctx.beginPath();
										ctx.moveTo(x, topY);
										ctx.lineTo(x, bottomY);
										ctx.lineWidth = 1;
										ctx.strokeStyle = "#000";
										ctx.globalCompositeOperation = "destination-over"; // Sửa lại dòng này
										ctx.stroke();
										ctx.restore();
									}
								}
							},
						},
						plugins: [ChartAnnotation],
					});

					setChartInstance(chart);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [news]);

	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	return (
		<div className="container">
			<Header />
			<div className="home_price">
				Bitcoin :
				<span className="home_price_span">{Math.floor(currentPrice)} </span>
				USD
			</div>
			<div className="home_chart">
				<canvas ref={chartRef}></canvas>
			</div>
			{news?.map((item: any, i: number) => (
				<New
					key={item?.id}
					id={item?.id}
					title={item?.title}
					created_at={item?.created_at}
					image={item?.image}
				/>
			))}
			<div className="home_footer">@SangHuynh</div>
		</div>
	);
};

export default Home;
