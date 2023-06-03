import React, { useState } from "react";
import Header from "../components/Header";
import Information from "../components/Information";

const Schedule: React.FC = () => {
	const today: Date = new Date();

	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	const handlePrevWeek = (): void => {
		const prevWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
		setCurrentDate(prevWeek);
	};

	const handleNextWeek = (): void => {
		const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
		setCurrentDate(nextWeek);
	};

	const handleSelectDate = (date: Date): void => {
		console.log("date click : ", date);
		setSelectedDate(date);
	};

	// Lấy ngày bắt đầu của tuần hiện tại (thứ 2)
	const startOfWeek: Date = new Date(
		currentDate.setDate(
			currentDate.getDate() -
				currentDate.getDay() +
				(currentDate.getDay() === 0 ? -6 : 1)
		)
	);

	// Lấy tháng và năm của tuần hiện tại
	const month: string = startOfWeek.toLocaleString("default", {
		month: "long",
	});
	const year: number = startOfWeek.getFullYear();

	// Tạo mảng các ngày trong tuần hiện tại
	const daysInWeek: Date[] = new Array(7)
		.fill(0)
		.map(
			(_, i) =>
				new Date(
					startOfWeek.getFullYear(),
					startOfWeek.getMonth(),
					startOfWeek.getDate() + i
				)
		);

	return (
		<div className="container">
			<Header />
			{/*  calendar-box-center */}
			<div className="calendar-box-center">
				<div className="calendar-header">
					<h2>
						{startOfWeek.getMonth() + 1}/{year}
					</h2>
				</div>
				<div className="calendar-grid">
					<div className={`calendar-day`}>T2</div>
					<div className={`calendar-day`}>T3</div>
					<div className={`calendar-day`}>T4</div>
					<div className={`calendar-day`}>T5</div>
					<div className={`calendar-day`}>T6</div>
					<div className={`calendar-day`}>T7</div>
					<div className={`calendar-day`}>CN</div>
					{daysInWeek.map((day: Date) => (
						<div
							key={day.toString()}
							className={`calendar-date ${
								day.toDateString() === selectedDate.toDateString()
									? "active"
									: ""
							}`}
							onClick={() => handleSelectDate(day)}
						>
							{`${day.getDate()}/${day.getMonth() + 1}`}
						</div>
					))}
				</div>
				<div className="calendar-nav">
					<button onClick={handlePrevWeek}>{"<"}</button>
					<button onClick={handleNextWeek}>{">"}</button>
				</div>
			</div>
			{new Array(6).fill(0).map((_, i: number) => (
				<Information key={i} date={selectedDate} />
			))}
		</div>
	);
};

export default Schedule;
